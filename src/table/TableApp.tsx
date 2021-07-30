import React, { useState, useEffect, useMemo } from 'react';

import axios from 'axios';
import Table from '../components/tables/Table';
import { columnsData } from './columns';
import { Container } from 'react-bootstrap';

function SnowApp() {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await axios('https://api.tvmaze.com/search/shows?q=snow');
      setData(result.data);
    })();
  }, []);

  const columns = useMemo(() => columnsData, []);

  return (
    <Container className="App">
      <Table columns={columns} data={data} />
    </Container>
  );
}

export default SnowApp;
