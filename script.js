const QUOTES = [
  { text: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci" },
  { text: "What you do speaks so loudly that I cannot hear what you say.", author: "Ralph Waldo Emerson" },
  { text: "The best way out is always through.", author: "Robert Frost" },
  { text: "Do the best you can until you know better. Then when you know better, do better.", author: "Maya Angelou" },
  { text: "If you're going through hell, keep going.", author: "Winston Churchill" }
];

function getRandomQuote(current) {
  let next;
  do {
    next = QUOTES[Math.floor(Math.random() * QUOTES.length)];
  } while (current && next.text === current.text);
  return next;
}

function App() {
  const [quote, setQuote] = React.useState(() => getRandomQuote());

  const newQuote = () => {
    setQuote((prev) => getRandomQuote(prev));
  };

  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `"${quote.text}" — ${quote.author}`
  )}`;

  return (
    <div id="quote-box">
      <div id="text">"{quote.text}"</div>
      <div id="author">— {quote.author}</div>

      <div className="actions">
        <button id="new-quote" onClick={newQuote}>
          New Quote
        </button>

        <a
          id="tweet-quote"
          href={tweetUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Tweet Quote
        </a>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
