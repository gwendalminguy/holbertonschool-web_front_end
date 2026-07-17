let stock = {
    macbook: 2,
    iphone: 4
}

function processPayment(itemName) {
    stock[itemName]--;

    console.log(`Payment is being processed for item ${itemName}`);
}

function processError(itemName) {
    console.log(`No more ${itemName} in stock`);
    console.log("Payment is not being processed");
}

function processOrder(itemName, callbackPayment, callbackError) {
    itemName = itemName.toLowerCase();

    console.log(`Verifying the stock of ${itemName}`);

    // Verify stock and type to call the right callback
    if (stock[itemName] > 0 && typeof(stock[itemName]) === "number") {
        callbackPayment(itemName);
    } else {
        callbackError(itemName);
    }
}

let answer = prompt("Please enter the item you would like to purchase (Macbook, iPhone)");

processOrder(answer, processPayment, processError);
