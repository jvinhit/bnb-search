import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { LoadingContext } from './LoadingContext';

const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  return (
    <LoadingContext.Provider
      value={{
        loading,
        show: () => setLoading(true),
        hide: () => setLoading(false),
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
};

LoadingProvider.propTypes = {
  children: PropTypes.node,
};

export default LoadingProvider;
