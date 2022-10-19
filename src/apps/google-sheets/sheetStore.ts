import {
  GoogleSpreadsheetRow,
  GoogleSpreadsheetCell,
} from 'google-spreadsheet';
import { createStore } from '../../utils/store';

export type rowData = {
  from?: string;
  to?: string;
  company?: string;
  logo?: string;
  job_title?: string;
  city?: string;
  description?: string;
};

type SheetData = {
  title: string;
  sheet: string;
  rowCount?: number;
  rows?: GoogleSpreadsheetRow[];
  target1?: string;
  target2?: GoogleSpreadsheetCell;
  target3?: GoogleSpreadsheetCell;
  target4?: GoogleSpreadsheetCell;
};

const sheetStore: SheetData = {
  title: '',
  sheet: '',
  rowCount: 0,
  rows: [],
  target1: '',
  target2: undefined,
  target3: undefined,
  target4: undefined,
};

const { setState, useStore } = createStore(sheetStore);

export const setTitle = (title: string) => setState('title', title);
export const setSheet = (sheet: string) => setState('sheet', sheet);
export const setRowCount = (val: number) => setState('rowCount', val);
export const setRows = (rows: GoogleSpreadsheetRow[]) => setState('rows', rows);
export const setTarget1 = (target: string) => setState('target1', target);
export const setTarget2 = (target: GoogleSpreadsheetCell) =>
  setState('target2', target);
export const setTarget3 = (cell: string | number | boolean) =>
  setState('target3', cell);
export const setTarget4 = (cell: string | number | boolean) =>
  setState('target4', cell);

export { useStore };
