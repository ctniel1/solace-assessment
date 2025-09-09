"use client";

import { useState } from "react";
import { Advocate } from "./models/advocate";
import SearchBar from "./components/SearchBar";
import AdvocateTable from "./components/AdvocateTable";

export default function Home() {
  const [filteredAdvocates, setFilteredAdvocates] = useState<Advocate[]>([]);

  return (
    <main style={{ margin: "24px" }}>
      <h1>Solace Advocates</h1>
      <br />
      <br />
      <SearchBar setFilteredAdvocates={setFilteredAdvocates} />
      <br />
      <br />
      <AdvocateTable filteredAdvocates={filteredAdvocates} />
    </main>
  );
}
