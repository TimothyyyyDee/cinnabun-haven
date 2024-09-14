// Prices of the products
const prices = {
    cinnabun: 3,
    lemonade: 2,
    pretzelBites: 3
};

// Function to calculate the total cost based on quantities
function calculateTotal(cinnabunQty, lemonadeQty, pretzelBitesQty) {
    const total = (prices.cinnabun * cinnabunQty) + 
                  (prices.lemonade * lemonadeQty) + 
                  (prices.pretzelBites * pretzelBitesQty);
    
    console.log(`The total cost is $${total}`);
}

// Example: Prompt the user for quantities (replace these with actual inputs in a web environment)
const cinnabunQty = prompt("Enter the number of cinnabuns:");
const lemonadeQty = prompt("Enter the number of lemonades:");
const pretzelBitesQty = prompt("Enter the number of pretzel bites:");

// Convert user input from string to number
calculateTotal(Number(cinnabunQty), Number(lemonadeQty), Number(pretzelBitesQty));
