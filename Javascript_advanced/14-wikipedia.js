function createElement(data) {
    let paragraph = document.createElement("p");
    paragraph.textContent = data;
    document.body.appendChild(paragraph);
}

function queryWikipedia(callback) {
    let xhr = new XMLHttpRequest();
    let link = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*";

    xhr.open("GET", link, true);

    xhr.onload = () => {
        callback(JSON.parse(xhr.responseText)["query"]["pages"]["21721040"]["extract"]);
    };

    xhr.onerror = () => {
        console.log('Network Error');
    };

    xhr.send();
}

queryWikipedia(createElement);
