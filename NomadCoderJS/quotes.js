const quotes = [
    {
        quote: "Where there is life, there is hope.", 
        author: "Thomas Carlyle"
    },
    {
        quote: "Whether you think you can, or you think you can't--you're right.",
        author: "Henry Ford"
    },
    {
        quote: "Failure is not fatal: It is the courage to continue that counts.", 
        author: "Winston Churchill"
    },
    {
        quote: "Don't aim at success — the more you aim at it and make it a target, the more you are going to miss it.", 
        author:"Viktor Frankl"
    },
    {
        quote:"The people who are crazy enough to think they can change the world are the ones who do.", 
        author:"Steve Jobs"
    },
    {
        quote:"Imagination is more important than knowledge. Knowledge is limited; imagination encircles the world.", 
        author:"Albert Einstein"
    },
    {
        quote:"The secret of success in life is for a man to be ready for his opportunity when it comes.",
        author:"Benjamin Disraeli"
    },
    {
        quote:"The most important time in your life was now.",
        author:"Voltaire"
    },
    {
        quote:"A pessimist sees difficulty in every opportunity; an optimist sees opportunity in every difficulty." ,
        author :"Winston Churchill" 
    },
  	{
        quote :"Many of life’s failures are people who did not realize how close they were to success when they gave up." ,
        author : "Thomas Edison"
    }
];

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText =` -${todaysQuote.author}-`;