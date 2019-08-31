import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const UrlList = ({ url }) => {
  const { originalUrl, shortUrl, clicks, date } = url;

  let originalUrlNew;
  let newDate;
  if (originalUrl && date) {
    originalUrlNew = originalUrl.substring(0, 60);
    let oldDate = new Date(date);
    newDate = new Date();
    newDate = Math.abs(newDate.getMinutes() - oldDate.getMinutes());
  }
  return (
    <Fragment>
      <tr>
        <td>
          <a href={originalUrl} target="_blank">
            {originalUrlNew}
          </a>
        </td>
        <td>
          {newDate} {newDate < 1 ? 'min' : 'mins'} ago
        </td>
        <th>
          <a href={shortUrl} target="_blank">
            {shortUrl}
          </a>
        </th>
        <th>{clicks}</th>
      </tr>
    </Fragment>
  );
};

UrlList.propTypes = {
  url: PropTypes.object.isRequired
};

export default UrlList;
