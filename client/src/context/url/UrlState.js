import React, { useReducer } from 'react';
import UrlContext from './urlContext';
import urlReducer from './urlReducer';
import axios from 'axios';

import { GET_SHORTURL, CLEAR_ERROR, SET_ERROR } from '../types';

const UrlState = props => {
  const initialState = {
    url: null,
    error: null,
    loading: true
  };

  const [state, dispatch] = useReducer(urlReducer, initialState);

  const getShortUrl = async longUrl => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.post(
        '/api/url',
        {
          originalUrl: longUrl
        },
        config
      );
      dispatch({
        type: GET_SHORTURL,
        payload: res.data
      });
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload: error.response.data.msg
      });
    }
  };

  return (
    <UrlContext.Provider
      value={{
        url: state.url,
        error: state.error,
        loading: state.loading,
        getShortUrl
      }}
    >
      {props.children}
    </UrlContext.Provider>
  );
};

export default UrlState;
