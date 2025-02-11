import { useState } from "react";
import DropDown from "./DropDown";
import SearchBar from "./SearchBar";
import CountriesList from "./CountriesList";

import { useTheme } from "../hooks/useTheme";

function Home() {
  const [query, setQuery] = useState("");
  const searchHandler = (e) => {
    setQuery(e.target.value);
  };
  // const [isDark] = useOutletContext(); //it help to use the "outlet" context
  const [isDark] = useTheme();

  return (
    <>
      <main className={`${isDark ? "dark" : ""}`}>
        <div className="serach-filter-container">
          <SearchBar onChange={searchHandler} />
          <DropDown setQuery={searchHandler}/>
        </div>

        <CountriesList query={query} />
      </main>
    </>
  );
}

export default Home;
