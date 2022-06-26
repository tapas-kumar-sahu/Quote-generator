const quoteText = document.querySelector(".quote_text");
const quoteAuthor = document.querySelector(".quote_author")
const quoteBtn = document.querySelector(".quote_btn");


const fetchQuotes = async () => {
    const response = await fetch("https://type.fit/api/quotes");
    const responseData = await response.json()
    // console.log(responseData.length);
    let allQuotesData = responseData;

    quoteBtn.addEventListener("click", () => {
        const rndQuote = Math.floor(Math.random() * 1643) + 0;
        const quote = allQuotesData[rndQuote];
        quoteText.textContent = `“ ${quote.text} ”`;
        if (quote.author === null) {
            quoteAuthor.textContent = "Anonymous";
        } else {
            quoteAuthor.textContent = quote.author;
        }

        // console.log(quote);
    })

}
fetchQuotes();