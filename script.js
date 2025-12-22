const quoteText = document.getElementById("quote-text");
const authorText = document.getElementById("author-text");
const newQuoteBtn = document.getElementById("new-quote");
const shareBtn = document.getElementById("share-quote");
const themeToggle = document.getElementById("theme-toggle");

/* Curated Quotes by Public Figures */
const quotes = [
    {
        text: "You don’t need to prove your grind to anyone. If it’s working, it’ll show. If it’s not, you’ll learn.",
        author: "Virat Kohli"
    },
    {
        text: "Dreams don’t work on motivation alone. They work on showing up even when you feel average.",
        author: "A. P. J. Abdul Kalam"
    },
    {
        text: "It’s okay if your timeline looks messy. Life isn’t a reel; it’s a full movie.",
        author: "Shah Rukh Khan"
    },
    {
        text: "Calm isn’t weakness. Sometimes silence is the strongest response you can give.",
        author: "MS Dhoni"
    },
    {
        text: "You don’t have to be fearless. Just don’t let fear decide for you.",
        author: "Alia Bhatt"
    },
    {
        text: "Success isn’t about being the smartest. It’s about staying honest with your work.",
        author: "Ratan Tata"
    },
    {
        text: "Consistency beats talent when talent keeps taking breaks.",
        author: "Neeraj Chopra"
    },
    {
        text: "If you’re constantly tired, maybe you’re chasing too many expectations that aren’t yours.",
        author: "Sadhguru"
    },
    {
        text: "Growth feels lonely at first because not everyone signs up for change.",
        author: "Nikhil Kamath"
    },
    {
        text: "You’re not late. You’re just early in your own version of success.",
        author: "Deepika Padukone"
    },
    {
        text: "Resting is productive when it helps you come back stronger.",
        author: "PV Sindhu"
    },
    {
        text: "Real confidence is not loud. It’s knowing you’ll figure things out somehow.",
        author: "Vicky Kaushal"
    }
];

/* Generate Quote with Fade Effect */
function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);

    quoteText.classList.remove("fade");
    authorText.classList.remove("fade");

    void quoteText.offsetWidth; // reflow trigger

    quoteText.textContent = `"${quotes[randomIndex].text}"`;
    authorText.textContent = `— ${quotes[randomIndex].author}`;

    quoteText.classList.add("fade");
    authorText.classList.add("fade");
}

/* Share Quote */
shareBtn.addEventListener("click", () => {
    const quote = `${quoteText.textContent} ${authorText.textContent}`;
    navigator.clipboard.writeText(quote);
    alert("Quote copied to clipboard!");
});

/* Dark Mode Toggle */
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

/* Events */
newQuoteBtn.addEventListener("click", generateQuote);

/* Load Initial Quote */
generateQuote();
