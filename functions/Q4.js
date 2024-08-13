function calculateTax() {
    return function(income) {
        let tax;
        
        if (income <= 20000) {
            tax = income * 0.1; // 10% tax for income up to 20,000
        } else if (income <= 50000) {
            tax = (20000 * 0.1) + ((income - 20000) * 0.2); // 10% for first 20,000, 20% for the rest
        } else {
            tax = (20000 * 0.1) + (30000 * 0.2) + ((income - 50000) * 0.3); // 10% for first 20,000, 20% for next 30,000, 30% for the rest
        }

        return tax;
    }
}

// Create an instance of the tax calculator
const taxCalculator = calculateTax();

// Test the function with various incomes
console.log(`Tax on $15,000: $${taxCalculator(15000)}`);  // 10% of 15,000
console.log(`Tax on $30,000: $${taxCalculator(30000)}`);  // 10% of 20,000 + 20% of 10,000
console.log(`Tax on $70,000: $${taxCalculator(70000)}`);  // 10% of 20,000 + 20% of 30,000 + 30% of 20,000
