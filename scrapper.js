const request= require("request")
const cheerio = require("cheerio");
const { get } = require("request");

const http= require("http")
const fs=  require("fs")

const PORT= 8080



const url ="https://hiperdex.com/manga/cant-resist-his-massage-cheating-in-front-of-my-husbands-eyes/01/"
request(url, cb);
function cb(err, response, html){
    if(err){
        console.log(err)
    }
    else{
        //console.log(html);
        extractHTML(html);
    }
}

function extractHTML(html){
    let $ = cheerio.load(html);
    let elementArr = $(".reading-content");
    let htmldata = "";
    for(let i=0;i<elementArr.length;i++){
        htmldata += $(elementArr[i]).html();
    }
    let text= $(elementArr[0]).text();
    
    let href= $(elementArr[0]).find("img").attr("scr");
    console.log(text)
    console.log("djhaj", htmldata)
   // document.getElementById("demo").innerHTML = htmldata;
   
    getSummary(href)
    
}

function getSummary(url){
    request(url, cb);
    function cb(err, response, html) {
        if (err) {
            console.log(err)
        }
        else {
            //console.log(html);
            extractSummary(html);
        }
    }
}

function extractSummary(html) {
    let $ = cheerio.load(html);
    let elementArr = $(".summary__content");
    let text = $(elementArr[0]).text();
    let htmldata = $(elementArr[0]).html();
    console.log(text)
    console.log("djhaj", htmldata)
    
}