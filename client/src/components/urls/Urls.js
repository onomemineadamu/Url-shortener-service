import React, { useContext } from 'react';
import UrlContext from '../../context/url/urlContext';
import UrlList from './UrlList';

const Urls = () => {
  const urlContext = useContext(UrlContext);
  const { url, loading } = urlContext;

  if (url !== null && url.length === 0) return <p>Please enter a valid url</p>;

  return (
    url &&
    url !== null &&
    !loading && (
      <section className="shortener-list">
        <div className="container">
          <div className="shortener-list-content p50">
            <table>
              <thead>
                <tr>
                  <th>Original Url</th>
                  <th>Created</th>
                  <th>Shorten Url</th>
                  <th>All Clicks</th>
                </tr>
              </thead>
              <tbody>
                <UrlList key={url._id} url={url} />
              </tbody>
            </table>
          </div>
        </div>
      </section>
    )
  );
};

export default Urls;
