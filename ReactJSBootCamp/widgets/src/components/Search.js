import axios from "axios";
import React, { useState, useEffect } from "react";

const Search = () => {
  const [term, setTerm] = useState("");

  useEffect(() => {
    // shorter way
    // (async ()=>{
    //   await axios.get('asda')
    // })();
    const search = () => {
      axios.get("https://en.wikipedia.org/w/api.php", {
        headers: { "Access-Control-Allow-Origin": "*" },
        action: "query",
        list: "search",
        // origin: "*",
        format: "json",
        srsearch: term,
      });
    };
    search();
  }, [term]);

  return (
    <div className="ui form">
      <div className="field">
        <label>Enter Search Term</label>
        <input
          className="ui input"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
