const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const crypto = require("crypto");
const bcrypt = require("bcrypt");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const secretKey = Buffer.from(process.env.SECRET_KEY, "hex"); // Convert hex string back to bytes

app.use(cors());

mongoose
 .connect(process.env.DATABASE_URL)
 .then(() => {
  console.log("Connected to DB");
  mongoose.connection.db
   .collection("users")
   .createIndex({ email: 1 }, { unique: true })
   .then(() => console.log("Indexes are ensured."))
   .catch((err) => console.error("Error ensuring indexes:", err));
 })
 .catch((err) => console.error("DB connection error:", err));

const userSchema = new mongoose.Schema({
 firstName: { type: String, required: true },
 lastName: { type: String, required: true },
 email: { type: String, required: true, unique: true },
 password: { type: String, required: true },
 dob: { type: String, required: true },
 sin: { type: String, required: true },
 address: {
  streetAddress1: { type: String, required: true },
  streetAddress2: { type: String }, // Optional field
  city: { type: String, required: true },
  postalCode: { type: String, required: true },
 },
});

// Encrypt sensitive information before saving to the database
userSchema.pre("save", async function (next) {
 if (!secretKey) {
  throw new Error("Encryption key is not set!");
 }

 if (this.isModified("firstName")) {
  this.firstName = encrypt(this.firstName, secretKey);
 }
 if (this.isModified("lastName")) {
  this.lastName = encrypt(this.lastName, secretKey);
 }
 if (this.isModified("dob")) {
  this.dob = encrypt(this.dob, secretKey);
 }
 if (this.isModified("sin")) {
  this.sin = encrypt(this.sin, secretKey);
 }
 if (this.isModified("address")) {
  this.address.streetAddress1 = encrypt(this.address.streetAddress1, secretKey);
  if (this.address.streetAddress2) {
   this.address.streetAddress2 = encrypt(
    this.address.streetAddress2,
    secretKey
   );
  }
  this.address.city = encrypt(this.address.city, secretKey);
  this.address.postalCode = encrypt(this.address.postalCode, secretKey);
 }
 if (this.isModified("password")) {
  this.password = await bcrypt.hash(this.password, 10);
 }

 next();
});

const User = mongoose.model("User", userSchema);

app.use(express.json());

app.post("/signup", async (req, res) => {
 try {
  const newUser = new User(req.body);
  await newUser.save();
  res.status(201).json({ message: "User created successfully" });
 } catch (error) {
  console.log(error);
  if (error.code === 11000) {
   res.status(400).json({
    message: "Account already exists with this email, try logging in instead.",
   });
  } else {
   res.status(500).json({ message: error.message });
  }
 }
});

app.post("/login", async (req, res) => {
 try {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  if (!user) {
   return res.status(401).json({ message: "User not found." });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
   return res.status(401).json({ message: "Invalid credentials" });
  }

  const payload = {
   id: user._id,
   email: user.email,
  };

  jwt.sign(
   payload,
   process.env.JWT_SECRET,
   { expiresIn: 3600 },
   (err, token) => {
    if (err) throw err;
    res.json({
     success: true,
     token: "Bearer " + token,
    });
   }
  );
 } catch (error) {
  console.error("Login error:", error);
  res.status(500).json({ message: error.message });
 }
});

function encrypt(text, secretKey) {
 const iv = crypto.randomBytes(16);
 const cipher = crypto.createCipheriv(
  "aes-256-cbc",
  Buffer.from(secretKey),
  iv
 );
 let encrypted = cipher.update(text, "utf8", "hex");
 encrypted += cipher.final("hex");
 return iv.toString("hex") + ":" + encrypted;
}

function decrypt(encryptedText, secretKey) {
 const textParts = encryptedText.split(":");
 const iv = Buffer.from(textParts.shift(), "hex");
 const encrypted = Buffer.from(textParts.join(":"), "hex");
 const decipher = crypto.createDecipheriv(
  "aes-256-cbc",
  Buffer.from(secretKey),
  iv
 );
 let decrypted = decipher.update(encrypted, "hex", "utf8");
 decrypted += decipher.final("utf8");
 return decrypted;
}

function verifyToken(req, res, next) {
 const token = req.header("Authorization");
 if (!token)
  return res.status(401).json({ message: "No token, authorization denied" });

 try {
  const decoded = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
  req.user = decoded;
  next();
 } catch (e) {
  res.status(400).json({ message: "Token is not valid" });
 }
}

app.post("/userinfo", async (req, res) => {
 const { email, firstName, lastName, dob, sin, address } = req.body;

 if (!email || !firstName || !lastName || !dob || !sin || !address) {
  return res.status(400).json({ message: "All fields are required." });
 }

 try {
  const existingUser = await User.findOne({ email: email });
  if (existingUser) {
   existingUser.firstName = encrypt(firstName, secretKey);
   existingUser.lastName = encrypt(lastName, secretKey);
   existingUser.dob = encrypt(dob, secretKey);
   existingUser.sin = encrypt(sin, secretKey);
   existingUser.address = {
    streetAddress1: encrypt(address.streetAddress1, secretKey),
    city: encrypt(address.city, secretKey),
    postalCode: encrypt(address.postalCode, secretKey),
   };
   await existingUser.save();
   res.json({ message: "User updated successfully." });
  } else {
   const newUser = new User({
    email,
    firstName: encrypt(firstName, secretKey),
    lastName: encrypt(lastName, secretKey),
    dob: encrypt(dob, secretKey),
    sin: encrypt(sin, secretKey),
    address: {
     streetAddress1: encrypt(address.streetAddress1, secretKey),
     city: encrypt(address.city, secretKey),
     postalCode: encrypt(address.postalCode, secretKey),
    },
   });
   await newUser.save();
   res.status(201).json({ message: "User created successfully." });
  }
 } catch (error) {
  console.error("Error saving user info:", error);
  res.status(500).json({ message: "Internal server error" });
 }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
 console.log(`Server running on http://localhost:${PORT}`);
});
