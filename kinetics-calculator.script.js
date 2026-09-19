// Function to calculate remaining concentration [A]_t
function calculateFirstOrderKinetics(initialConcentration, rateConstant, time) {
    // Math.exp(x) calculates e raised to the power of x
    const remainingConcentration = initialConcentration * Math.exp(-rateConstant * time);
    return remainingConcentration;
}

// --- EXAMPLE USAGE ---

// Input values
const A0 = 1.0;  // Initial concentration in Molar (M)
const k = 0.05;  // Rate constant in min^-1
const t = 10;    // Time in minutes

// Run the function
const At = calculateFirstOrderKinetics(A0, k, t);

// Display results in the console
console.log("=== First-Order Kinetics Calculation ===");
console.log(`Initial Concentration [A]0: ${A0} M`);
console.log(`Rate Constant (k): ${k} min^-1`);
console.log(`Time elapsed (t): ${t} minutes`);
console.log(`Remaining Concentration [A]t: ${At.toFixed(4)} M`);
