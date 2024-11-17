import React from "react";
import TransactionsTable from "./components/TransactionsTable";
import TransactionsTableAll from "./components/TransactionsTableAll";
import CumulativeChart from "./components/CumulativeChart";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Atlassian Sales Transactions</h1>
      </header>
      <main>
        <TransactionsTable />
        <TransactionsTableAll />
        <CumulativeChart />
      </main>
    </div>
  );
}

export default App;
