import React from 'react';
import PropTypes from 'prop-types';

const Nav = ({ siteName }) => {
  return (
    <nav>
      <div className="container">
        <h2>Url Shortener</h2>
      </div>
    </nav>
  );
};

Nav.propTypes = {
  siteName: PropTypes.string.isRequired
};

Nav.defaultProps = {
  siteName: 'Url Shortener'
};

export default Nav;
