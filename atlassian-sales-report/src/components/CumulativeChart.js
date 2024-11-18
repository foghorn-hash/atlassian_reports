import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import TransactionsTableCumulative from "./TransactionsTableCumulative";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
const apiUrl = process.env.REACT_APP_API_URL;

const CumulativeChart = () => {
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCumulativeData();
  }, []);

  const fetchCumulativeData = async () => {
    try {
      const response = await axios.get(apiUrl + "/cumulative-sales"); // Update to your API URL
      setChartData(response.data.root);
    } catch (err) {
      setError("Failed to fetch cumulative data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h2>Cumulative Sales Chart</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="saleDate" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="cumulativeVendorBalance" fill="#007bff" name="Cumulative Vendor Balance" />
        </BarChart>
      </ResponsiveContainer>
      <TransactionsTableCumulative chartData={chartData} />
    </div>
  );
};

export default CumulativeChart;