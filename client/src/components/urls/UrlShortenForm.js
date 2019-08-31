import React, { useState, useContext } from 'react';
import UrlContext from '../../context/url/urlContext';

const UrlShortenForm = () => {
  const urlContext = useContext(UrlContext);
  const [originalUrl, setOriginalUrl] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    urlContext.getShortUrl(originalUrl);
  };

  return (
    <section className="shortener">
      <div className="container">
        <div className="shortener-content p50">
          <h3 style={{ color: '#fff' }}>Simiplify your links</h3>
          <form onSubmit={onSubmit}>
            <div className="form-control">
              <input
                type="text"
                name="originalUrl"
                value={originalUrl}
                id=""
                placeholder="Your Original URL here"
                onChange={e => setOriginalUrl(e.target.value)}
                required
              />
              <input type="submit" value="Shorten Url" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default UrlShortenForm;
