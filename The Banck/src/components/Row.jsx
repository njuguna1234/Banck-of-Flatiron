import React from "react";
import Row from "./Row";

function Headers({ dealings }) {
  return (
    <>
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        <Row dealings={dealings} />
      </tbody>
    </>
  );
}

export default Headers;
