import React, { useState } from "react";

function Search({ dealings, onSearch }) {
  // State to hold the search term
  const [searchTerm, setSearchTerm] = useState("");

  // Function to handle the search
  const handleSearch = (searchTerm) => {
    // Filter dealings based on the search term
    const searchResult = dealings.filter(dealing =>
      Object.values(dealing).some(value =>
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    // Pass the filtered result to the parent component
    onSearch(searchResult);
  };

  return (
    <div className="m-4 p-4">
      {/* Input field for the search term */}
      <input
        className="form-control form-control-sm"
        type="text"
        placeholder="Search by Date, Description, Category, or Amount"
        value={searchTerm}
        // Update the search term state and perform search on change
        onChange={(e) => {
          setSearchTerm(e.target.value);
          handleSearch(e.target.value);
        }}
      />
    </div>
  );
}

export default Search;
