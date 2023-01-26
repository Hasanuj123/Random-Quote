const btnEl = document.getElementById("btn");
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
// document.getElementById("autho").style.color = "#ff0000";


const apiURL ="https://api.quotable.io/random";

async function getQuote(){
    try {
        btnEl.innerText="loading....";
        btnEl.disabled = true;
        quoteEl.innerText = "Updating...";
        authorEl.innerText = "Updating...";
        const response = await fetch(apiURL);
        const data = await response.json();
        const quoteContent = data.content;
        const quoteAuthor = data.author;
        quoteEl.innerText = quoteContent;
        authorEl.innerText = "~"+ quoteAuthor;
        btnEl.innerHTML="Get a quote";
        btnEl.disabled=false;
        
    } catch (error) {
        console.log(error);
        quoteEl.innerText="An Error please try after sometime "
        authorEl.innerText="Check your internate connection "
        btnEl.innerHTML="Get a quote";
        btnEl.disabled=false;
    }
   
    // console.log(data);

}
getQuote()

btnEl.addEventListener("click",getQuote);