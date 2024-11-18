// TransactionsTableCumulative.js
import React from "react";
import { Table } from "react-bootstrap";

const TransactionsTableCumulative = ({ chartData }) => {

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Sale Date</th>
          <th>Vendor Amount (USD)</th>
        </tr>
      </thead>
      <tbody>
        {chartData.map((transaction, index) => (
          <tr key={index}>
            <td>{transaction.saleDate || "N/A"}</td>
            <td>${parseFloat(transaction.cumulativeVendorBalance).toFixed(2)}</td>
          </tr>
        ))} 
      </tbody>
    </Table>
  );
};

export default TransactionsTableCumulative;
