import React, { useState } from "react";
import Headers from "./Headers";
import Search from "./Search";
import Form from "./Form";

function Table() {
  // State to hold the initial dealings data
  const [dealings, setDealings] = useState([
    {
      date: "12/02/2024",
      description: "Paycheck from Hilton Hotel",
      category: "Income",
      amount: "3000000"
    },
    {
        date: "23/03/2024",
        description: "Television Set",
        category: "Luxury",
        amount: "-70000"
    },
    {
        date: "3/05/2024",
        description: "Movie",
        category: "Entertainment",
        amount: "-1000"
    },
    {
        date: "15/08/2024",
        description: "Pizza",
        category: "Food",
        amount: "-1000"
    },
    {
        date: "12/02/2024",
        description: "Burberry",
        category: "Fashion",
        amount: "-250000"
    }
  ]);

   // State to hold the filtered dealings data
   const [filteredDealings, setFilteredDealings] = useState([]);

   // Function to handle search results
   const handleSearch = (searchResult) => {
     // If search results are present, update the filtered dealings state with search results,
     // otherwise, revert to displaying all dealings
     setFilteredDealings(searchResult.length > 0 ? searchResult : dealings);
   };

   return (
     <>
       {/* Render the Search component to allow users to search for specific dealings */}
       <Search dealings={dealings} onSearch={handleSearch} />
       <Form dealings={dealings} setDealings={setDealings}/>
       {/* Render the table with the appropriate dealings data based on the search results */}
       <table className="table table-light">
         <Headers dealings={filteredDealings.length > 0 ? filteredDealings : dealings} />
       </table>
     </>
   );
 }

 export default Table;