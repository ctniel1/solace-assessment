import React from 'react';
import { Advocate } from '../models/advocate';

type SearchBarProps = {
  advocates: Advocate[];
  setFilteredAdvocates: React.Dispatch<React.SetStateAction<Advocate[]>>;
}

const SearchBar: React.FC<SearchBarProps> = ({advocates, setFilteredAdvocates}) => {
  const [searchInput, setSearchInput] = React.useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
    const searchTerm = e.target.value.toLowerCase();

    const filteredAdvocates = advocates.filter((advocate) => {
      return (
      advocate.firstName.toLowerCase().includes(searchTerm) ||
      advocate.lastName.toLowerCase().includes(searchTerm) ||
      advocate.city.toLowerCase().includes(searchTerm) ||
      advocate.degree.toLowerCase().includes(searchTerm) ||
      advocate.specialties.some((s) => s.toLowerCase().includes(searchTerm)) ||
      advocate.yearsOfExperience.toString().toLowerCase().includes(searchTerm)
      );
    });

    setFilteredAdvocates(filteredAdvocates);
  };

  const onClick = () => {
    setSearchInput("");
    setFilteredAdvocates(advocates);
  };

  return (
    <div>
        <input style={{ border: "1px solid black" }} value={searchInput} onChange={onChange} />
        <button onClick={onClick}>Clear</button>
      </div>
  );
};

export default SearchBar;