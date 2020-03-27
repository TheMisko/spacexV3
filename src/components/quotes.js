import React, { useState, useEffect } from "react";

const Quotes = () => {
  const quotes = [
    {
      quote:
        "I can honestly say - and it's a big surprise to me - that I have never had a dream about being on the moon.",
      author: "Neil Armstrong"
    },

    {
      quote: "All civilizations become either spacefaring or extinct.",
      author: "Carl Sagan"
    },
    {
      quote:
        "The exploration of space will go ahead, whether we join in it or not, and it is one of the great adventures of all time, and no nation which expects to be the leader of other nations can expect to stay behind in the race for space.",
      author: "John F. Kennedy"
    },
    {
      quote:
        "I'm sure the universe is full of intelligent life. It's just been too intelligent to come here.",
      author: "Arthur C. Clarke"
    },
    {
      quote: "It's a fixer-upper of a planet but we could make it work.",
      author: "Elon Musk"
    },
    {
      quote: "Returning to Earth, that was the challenging part.",
      author: "Buzz Aldrin"
    }
  ];

  const [showBar, setShowBar] = useState(true);

  const [quote, setQuote] = useState("");

  const rand = () =>
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowBar(!showBar);
      rand();
      console.log("misko");
    }, 7000);
    return () => clearInterval(interval);
  }, [showBar]);

  useEffect(() => {
    setShowBar(true);
  }, [showBar]);

  useEffect(() => {
    rand();
  }, []);

  return (
    <div className="quotes-container">
      <div className="quotes-flex">
        <div className="quote">
          <h1>"{quote.quote}"</h1>
        </div>
        <div className="author">
          <h3>- {quote.author}</h3>
        </div>

        {showBar ? (
          <div className="progress">
            <div className="progress-value"></div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Quotes;
