const mongoose = require('mongoose');

const vehicleExpensesSchema = new mongoose.Schema({
  totalVehicleExpenses: { type: Number }
});

const travelExpensesSchema = new mongoose.Schema({
  totalTravelExpenses: { type: Number }
});

const selfEmployedIncomeSchema = new mongoose.Schema({
  grossBusinessIncome: { type: Number },
  businessExpenses: { type: Number },
  netBusinessIncome: { type: Number }
});

const investmentIncomeSchema = new mongoose.Schema({
  interestProfit: { type: Number },
interestLostt { type: Number },
  dividendsProfit: { type: Number },
dividends:Loss { type: Number },
});

const capitalGainsSchema = new mongoose.Schema({
  fromPropertyProfit: { type: Number },
 fromPropertyLoss: { type: Number },
  fromStocksProfit: { type: Number },
fromStocksLoss: { type: Number }
});

const deductionLimitsSchema = new mongoose.Schema({
  unusedRRSPContributions: { type: Number },
  tuitionCarryforwards: { type: Number }
});

const dependentSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  sin: { type: String, required: true, match: [/^\d{9}$/, 'Invalid SIN number.'] },
  dateOfBirth: { type: Date, required: true },
  relationshipToUser: {
    type: String,
    required: true,
    enum: ['spouse', 'child', 'elder', 'impaired_dependent']
  },
  income: { type: Number },
  educationCosts: { type: Number },
  residencyStatus: {
    type: String,
    required: true,
    enum: ['full_year', 'partial_year', 'none']
  }
});

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  dob: { type: Date, required: true }, // Changed to Date for proper formatting
  sin: { type: String, required: true, match: [/^\d{9}$/, 'Invalid SIN number.'] },
  address: {
    streetAddress1: { type: String, required: true },
    streetAddress2: { type: String }, // Optional field
    city: { type: String, required: true },
    postalCode: { type: String, required: true }
  },
  dependents: [dependentSchema],
  businessExpenses: {
    homeOfficeExpenses: { type: Number },
    vehicleExpenses: vehicleExpensesSchema,
    supplies: { type: Number },
    travelExpenses: travelExpensesSchema,
    toolExpenses: { type: Number }
  },
  income: {
    employmentIncome: { type: Number },
    selfEmployedIncome: selfEmployedIncomeSchema,
    investmentIncome: investmentIncomeSchema,
    pensionIncome: { type: Number },
    rrspIncome: { type: Number },
    otherIncome: { type: Number },
    governmentBenefits: { type: Number }
  },
  receipts: {
    rrspContributions: { type: Number },
    employmentExpenses: {
      homeOffice: { type: Number },
      vehicle: { type: Number },
      supplies: { type: Number },
      travel: { type: Number },
      tools: { type: Number }
    },
    otherDeductions: {
      childcareExpenses: { type: Number },
      medicalExpenses: { type: Number },
      studentLoanInterest: { type: Number }
    }
  },
  otherInformation: {
    capitalGains: capitalGainsSchema,
    deductionLimits: deductionLimitsSchema,
    charitableDonations: { type: Number }
  },
});

const User = mongoose.model('User', userSchema);
module.exports = User;
