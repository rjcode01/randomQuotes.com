const quotes = document.getElementById("quotes");
const author = document.getElementById("author");
const newQ = document.getElementById("newQ");
const tweetMe = document.getElementById("tweetMe");
const darkmode = document.getElementById("darkmode");
const container = document.getElementById("container");
const box = document.getElementById("box");


let realData = "";
let quotesData = "";

const tweetNow = () => {
  let tweetPost = `https://twitter.com/intent/tweet?text=${quotesData.text}`;
  window.open(tweetPost);
};

const getNewQuotes = () => {
  let rnum = Math.floor(Math.random() * 1600);
  quotesData = realData[rnum];
  quotes.innerText = `${quotesData.text}`;
  quotesData.author = null
    ? (author.innerText = "By Unknown")
    : (author.innerText = `${quotesData.author}`);
};

const getQuotes = async () => {
  const api = "https://type.fit/api/quotes";
  try {
    let data = await fetch(api);
    realData = await data.json();
    getNewQuotes();
  } catch (error) {}
};

tweetMe.addEventListener("click", tweetNow);
newQ.addEventListener("click", getNewQuotes);
getQuotes();

const changemode = document.getElementById("changemode")
darkmode.addEventListener("click", ()=>{
container.classList.toggle('d-mode')
box.classList.toggle('box2')
changemode.classList.toggle('changemode2')

})
