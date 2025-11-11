var quotes = [
    {
        quote: "“Be yourself; everyone else is already taken.”",
        author: "― Oscar Wilde"
    },
    {
        quote: "“So many books, so little time.”",
        author: "― Frank Zappa"
    },
    {
        quote: "“A room without books is like a body without a soul.”",
        author: "― Marcus Tullius Cicero"
    },
    {
        quote: "“You only live once, but if you do it right, once is enough.”",
        author: "― Mae West"
    },
    {
        quote: "“Be the change that you wish to see in the world.”",
        author: "― Mahatma Gandhi"
    },
    {
        quote: "“In three words I can sum up everything I've learned about life: it goes on.”",
        author: "― Robert Frost"
    },
    {
        quote: "“If you tell the truth, you don't have to remember anything.”",
        author: "― Mark Twain"
    },
    {
        quote: "“To live is the rarest thing in the world. Most people exist, that is all.”",
        author: "― Oscar Wilde"
    },
    {
        quote: "“A friend is someone who knows all about you and still loves you.”",
        author: "― Elbert Hubbard"
    },
    {
        quote: "“Always forgive your enemies; nothing annoys them so much.”",
        author: "― Oscar Wilde"
    },
    {
        quote: "“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
        author: "― Mahatma Gandhi"
    },
    {
        quote: "“We accept the love we think we deserve.”",
        author: "― Stephen Chbosky"
    },
    {
        quote: "“Without music, life would be a mistake.”",
        author: "― Friedrich Nietzsche"
    },
    {
        quote: "“It is better to be hated for what you are than to be loved for what you are not.”",
        author: "― Andre Gide"
    },
    {
        quote: "“Good friends, good books, and a sleepy conscience: this is the ideal life.”",
        author: "― Mark Twain"
    },
    {
        quote: "“As he read, I fell in love the way you fall asleep: slowly, and then all at once.”",
        author: "― John Green"
    },
    {
        quote: "“Life is what happens to us while we are making other plans.”",
        author: "― Allen Saunders"
    },
    {
        quote: "“It is not a lack of love, but a lack of friendship that makes unhappy marriages.”",
        author: "― Friedrich Nietzsche"
    },
    {
        quote: "“I have not failed. I've just found 10,000 ways that won't work.”",
        author: "― Thomas A. Edison"
    },
    {
        quote: "“The man who does not read has no advantage over the man who cannot read.”",
        author: "― Mark Twain"
    },
]

var lastIndex = -1;
var quote = document.getElementById("quote");
var author = document.getElementById("author");

function generate() {
    var random;
    do {
        random = Math.floor(Math.random() * quotes.length)
    } while (random === lastIndex)
    lastIndex = random;
    quote.classList.add("fade");
    author.classList.add("fade");
    setTimeout(function () {
        quote.innerHTML = quotes[random].quote;
        author.innerHTML = quotes[random].author;

        quote.classList.remove("fade");
        author.classList.remove("fade");
    }, 250);
}

window.onload = generate()
