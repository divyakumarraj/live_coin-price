
// var btc=document.getElementById("bitcoin");

// var ltc=document.getElementById("litecoin");

// var eth=document.getElementById("ethereum");

// var doge=document.getElementById("dogecoin");




// var liveprice={
// 	"async":true,
// 	"scroosDomain":true,
// 	"url":"https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Clitecoin%2Cethererum%2Cdogecoin&vs_currencies=usd",
// 	"method":"GET",
// 	"headers":{}
// }

// $.ajax(liveprice).done(function (response) {
// 	// body...
// 	btc.innerHTML=response.bitcoin.usd;
// 	ltc.innerHTML=response.litcoin.usd;
// 	eth.innerHTML=response.ethereum.usd;
// 	doge.innerHTML=response.dogecoin.usd;
// });

//$

var btc = document.getElementById("bitcoin");
var ltc = document.getElementById("litecoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");

var liveprice = {
    "async": true,
    "scroosDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Clitecoin%2Cethereum%2Cdogecoin&vs_currencies=usd",

    "method": "GET",
    "headers": {}
}

$.ajax(liveprice).done(function (response){
    btc.innerHTML = response.bitcoin.usd;
    ltc.innerHTML = response.litecoin.usd;
    eth.innerHTML = response.ethereum.usd;
    doge.innerHTML = response.dogecoin.usd;

});

//inr

var btcc = document.getElementById("bitcoinn");
var ltcc = document.getElementById("litecoinn");
var ethh = document.getElementById("ethereumm");
var dogee = document.getElementById("dogecoinn");

var liveprice = {
    "async": true,
    "scroosDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Clitecoin%2Cethereum%2Cdogecoin&vs_currencies=inr",

    "method": "GET",
    "headers": {}
}

$.ajax(liveprice).done(function (response){
    btcc.innerHTML = response.bitcoin.inr;
    ltcc.innerHTML = response.litecoin.inr;
    ethh.innerHTML = response.ethereum.inr;
    dogee.innerHTML = response.dogecoin.inr;

});

