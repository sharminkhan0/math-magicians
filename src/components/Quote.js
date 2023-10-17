import React, { useState, useEffect } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const apiKey = 'NgUYIEDPY3aFoV0Sl737ow==ai5zy6L02IkjpVm9';
    const category = 'inspirational';

    fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
      headers: {
        'X-Api-Key': apiKey,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        const randomQuote = data[Math.floor(Math.random() * data.length)];
        setQuote(randomQuote);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  return (
    <div className="quote">
      <h2>Inspirational Quote</h2>
      <blockquote>{quote.quote}</blockquote>
      <p>
        -
        {quote.author}
      </p>
    </div>
  );
};
export default Quote;
