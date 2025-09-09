import React, { useEffect, useState } from 'react';
import { Advocate } from '../models/advocate';

type SearchBarProps = {
  setFilteredAdvocates: React.Dispatch<React.SetStateAction<Advocate[]>>;
}

const SearchBar: React.FC<SearchBarProps> = ({ setFilteredAdvocates }) => {
  const [searchInput, setSearchInput] = React.useState<string>("");
  const [advocates, setAdvocates] = useState<Advocate[]>([]);
  

  useEffect(() => {
    fetch("/api/advocates").then((response) => {
      response.json().then((jsonResponse) => {
        setAdvocates(jsonResponse.data);
        setFilteredAdvocates(jsonResponse.data);
      });
    });
  }, [setFilteredAdvocates]);

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