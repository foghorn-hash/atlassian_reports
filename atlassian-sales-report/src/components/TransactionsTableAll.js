import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const TransactionsTableAll = () => {
  const [transactions, setTransactions] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      const response = await axios.get(
        "http://localhost/atlassian_reports/reports/public/api/transactions"
      ); // Replace with your Laravel API URL
      const data = response.data.root;

      // Prepare chart data
      const formattedChartData = data.map((item) => ({
        saleDate: item.saleDate,
        vendorAmount: parseFloat(item.vendorAmount),
        balanceVendor: parseFloat(item.balanceVendor),
      }));

      setTransactions(data);
      setChartData(formattedChartData);
    } catch (err) {
      setError("Failed to fetch transactions. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h2>Cumulative Transactions with Bar Chart</h2>

      {/* Bar Chart */}
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="saleDate" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="vendorAmount" fill="#007bff" name="Vendor Amount" />
        </BarChart>
      </ResponsiveContainer>

      {/* Table */}
      <h3>Transaction Table</h3>
      <table border="1" style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Sale Date</th>
            <th>Vendor Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.saleDate || "N/A"}</td>
              <td>${transaction.vendorAmount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsTableAll;