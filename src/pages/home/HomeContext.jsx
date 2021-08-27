import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const HomeContext = createContext();

const homeStoreCreator = () => {
  const [currentSearchTerm, setCurrentSearchTerm] = useState('');

  return {
    currentSearchTerm,
    setCurrentSearchTerm,
  };
};

export const useHomeContext = () => useContext(HomeContext);

const HomeContextProvider = ({ children }) => (
  <HomeContext.Provider value={homeStoreCreator()}>{children}</HomeContext.Provider>
);
HomeContextProvider.propTypes = { children: PropTypes.node.isRequired };

export default HomeContextProvider;
