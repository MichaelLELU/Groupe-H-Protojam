import { createContext, useContext, useState }
  from "react";

const DetailContext = createContext();

export function DetailProvider({ children }) {
  const [details, setDetails] = useState(null);

  return (
    <DetailContext.Provider
      value={{ details, setDetails }}>
     {children}
   </DetailContext.Provider>
 );
}

export const useDetail =
  () => useContext(DetailContext);