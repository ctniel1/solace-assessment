"use client";

import { useState } from "react";
import { Advocate } from "./models/advocate";
import SearchBar from "./components/SearchBar";
import AdvocateTable from "./components/AdvocateTable";
import styles from './page.module.css';

export default function Home() {
  const [filteredAdvocates, setFilteredAdvocates] = useState<Advocate[]>([]);

  return (
    <main className={styles.main}>
      <h1 className={styles.header}>Solace Advocates</h1>
      <SearchBar setFilteredAdvocates={setFilteredAdvocates} />
      <AdvocateTable filteredAdvocates={filteredAdvocates} />
    </main>
  );
}
