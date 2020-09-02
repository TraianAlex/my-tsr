import React, { useState, useEffect, useMemo } from "react";

import axios from "axios";
import Table from "../components/tables/Table";
import { columnsData } from "./columns";
import "./App.css";

function SnowApp() {
  // data state to store the TV Maze API data. Its initial value is an empty array
  const [data, setData] = useState([]);

  // Using useEffect to call the API once mounted and set the data
  useEffect(() => {
    (async () => {
      const result = await axios("https://api.tvmaze.com/search/shows?q=snow");
      setData(result.data);
    })();
  }, []);

  const columns = useMemo(() => columnsData, []);

  return (
    <div className="App">
      <Table columns={columns} data={data} />
    </div>
  );
}

export default SnowApp;
