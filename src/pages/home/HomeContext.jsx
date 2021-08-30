import React, { createContext, useContext, useState, useRef } from 'react';
import PropTypes from 'prop-types';

const HomeContext = createContext();

const homeStoreCreator = () => {
  const [currentSearchTerm, setCurrentSearchTerm] = useState('');
  const searchInputRef = useRef(null);

  return {
    currentSearchTerm,
    setCurrentSearchTerm,
    searchInputRef,
  };
};

export const useHomeContext = () => useContext(HomeContext);

const HomeContextProvider = ({ children }) => (
  <HomeContext.Provider value={homeStoreCreator()}>{children}</HomeContext.Provider>
);
HomeContextProvider.propTypes = { children: PropTypes.node.isRequired };

export default HomeContextProvider;
