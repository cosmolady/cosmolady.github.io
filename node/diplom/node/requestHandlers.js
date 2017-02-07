var querystring = require("querystring"),
    fs = require("fs"),
    shopPage = fs.readFileSync('../static/shop.html'),
    recommendationPage = fs.readFileSync('../static/recommendation.html'),
    loginPage = fs.readFileSync('../static/login.html');

function shop(response) {
    console.log("Request handler 'shop' was called.");
    response.writeHead(200, {
        "Content-Type": "text/html"
    });
    response.write(shopPage);
    response.end();
}

function recommendation(response, request) {
    console.log("Request handler 'recommendation' was called.");
        response.writeHead(200, {
        "Content-Type": "text/html"
    });
    response.write(recommendationPage);
    response.end();
}

function login(response) {
    console.log("Request handler 'show' was called.");
        response.writeHead(200, {
        "Content-Type": "text/html"
    });
    response.write(loginPage);
    response.end();
}

exports.shop = shop;
exports.recommendation = recommendation;
exports.login = login;