let quote = document.querySelector('.quote');
let author = document.querySelector('.author');
let quoteButton = document.querySelector('.quote-button');
let tweetButton = document.querySelector('.tweet-button');

const fetchQuotes = async () => {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    console.log("data", data)
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}

function tweet() {
    window.open(`https://twitter.com/intent/tweet?text=${quote.innerHTML} ----by ${author.innerHTML}`, "Tweet Window", "width=600, height=300")
}

fetchQuotes();
quoteButton.addEventListener('click', fetchQuotes)
tweetButton.addEventListener('click', tweet)
