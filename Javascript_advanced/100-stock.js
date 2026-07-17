let stock = {
    macbook: 2,
    iphone: 4
}

function processPayment(itemName) {
    let normalizedItemName = itemName.toLowerCase().trim();

    stock[normalizedItemName]--;

    console.log(`Payment is being processed for item ${itemName}`);
}

function processError(itemName) {
    console.log(`No more ${itemName} in stock`);
    console.log("Payment is not being processed");
}

function processOrder(itemName, callbackPayment, callbackError) {
    let normalizedItemName = itemName.toLowerCase().trim();

    console.log(`Verifying the stock of ${itemName}`);

    // Verify stock and type to call the right callback
    if (stock[normalizedItemName] > 0 && typeof(stock[normalizedItemName]) === "number") {
        callbackPayment(itemName);
    } else {
        callbackError(itemName);
    }
}

let answer = prompt("Please enter the item you would like to purchase (Macbook, iPhone)");

processOrder(answer, processPayment, processError);
