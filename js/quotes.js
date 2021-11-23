const quotes = [
  {
    quote: "Just Do it.",
    author: "Nike",
  },
  {
    quote: "Think like a man of action and act like man of thought.",
    author: "Nike",
  },
  {
    quote:
      "Courage is very important. Like a muscle, it is strengthened by use.",
    author: "Nike",
  },
  {
    quote:
      "Life is the art of drawing sufficient conclusions from insufficient premises.",
    author: "Nike",
  },
  {
    quote: "By doubting we come at the truth.",
    author: "Nike",
  },
  {
    quote:
      "A man that hath no virtue in himself, ever envieth virtue in others.",
    author: "Nike",
  },
  {
    quote: "Better the last smile than the first laughter.",
    author: "Nike",
  },
  {
    quote: "A poet is the painter of the soul.",
    author: "Nike",
  },
  {
    quote: "Error is the discipline through which we advance.",
    author: "Nike",
  },
  {
    quote: "Weak things united become strong.",
    author: "Nike",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
