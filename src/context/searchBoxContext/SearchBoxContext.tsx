import { createContext, useState } from 'react';
interface ISearch {
  search: string;
  addsearch: (name: string) => void;
}
export const SearchC = createContext<ISearch>({
  search: '',
  addsearch: () => {},
});

export const SearchBoxContext: React.FC = ({ children }) => {
  const [search, setsearch] = useState<string>('');

  return (
    <SearchC.Provider
      value={{
        search,
        addsearch: setsearch,
      }}
    >
      {children}
    </SearchC.Provider>
  );
};
