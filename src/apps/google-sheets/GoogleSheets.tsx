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
import { columns, getSheetData } from './utils';

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

  const data = rows.map((row: rowData) => ({
    from: row.from,
    to: row.to,
    company: row.company,
    job_title: row.job_title,
    city: row.city,
  }));

  return (
    <Container>
      Title: {title} <br /> Sheet: {sheet}
      <hr />
      <div>Target1: {target1}</div>
      <div>Target2: {target2}</div>
      <hr />
      <RenderCell />
      <hr />
      <span>Row count: {rowCount}</span>
      <Table columns={columns} data={data} />
    </Container>
  );
};
