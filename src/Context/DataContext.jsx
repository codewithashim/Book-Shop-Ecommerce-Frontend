import React, { createContext, useEffect, useState } from "react";

export const DataContextApi = createContext();

const DataContext = ({ children }) => {

  const dataInfo = {

  };
  return (
    <DataContextApi.Provider value={dataInfo}>{children}</DataContextApi.Provider>
  );
};

export default DataContext;
