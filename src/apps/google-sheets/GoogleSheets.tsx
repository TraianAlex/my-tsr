import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Table from '../../components/tables/Table';
import {
  rowData,
  setRows,
  setTarget1,
  setTarget2,
  useStore,
  setSheet,
  setRowCount,
} from './sheetStore';
import { RenderCell } from './RenderCell';
import { getSheetData } from './utils';

export const GoogleSheets: React.FC = () => {
  const title = useStore('title');
  const sheet = useStore('sheet');
  const [rows] = useStore('rows');
  const target1 = useStore('target1');
  const target2 = useStore('target2');
  const rowCount = useStore('rowCount');

  useEffect(() => {
    (async () => {
      const sheet = await getSheetData();
      const rows = await sheet?.getRows();
      sheet && setSheet(sheet.title);
      sheet && setRowCount(sheet.rowCount);
      rows && setRows(rows);
      rows && setTarget1(rows[1]?.description);
      rows && setTarget2(rows[2].description);
    })();
  }, []);

  const columns = [
    {
      Header: 'Company',
      accessor: 'company',
    },
    {
      Header: 'City',
      accessor: 'city',
    },
  ];

  const data = rows.map((row: rowData) => ({
    company: row.company,
    city: row.city,
  }));

  return (
    <Container>
      Title: {title} <br /> Sheet: {sheet}
      <hr />
      <div>
        <span>Row count: {rowCount}</span>
        {rows?.map((row: rowData) => (
          <div key={row?.from}>
            <span>
              {row?.from} | {row?.to} | {row?.company} | {row?.job_title} |{' '}
              {row?.city} | {row?.company}
            </span>
          </div>
        ))}
      </div>
      <hr />
      <div>Target1: {target1}</div>
      <div>Target2: {target2}</div>
      <RenderCell />
      <Table columns={columns} data={data} />
    </Container>
  );
};
