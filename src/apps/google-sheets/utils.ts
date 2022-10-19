import { GoogleSpreadsheet } from 'google-spreadsheet';
import { setTitle } from './sheetStore';

const SPREADSHEET_ID = process.env.REACT_APP_SPREADSHEET_ID;
//const SHEET_ID = process.env.REACT_APP_SHEET_ID || 0;
const CLIENT_EMAIL = process.env.REACT_APP_GOOGLE_CLIENT_EMAIL || '';
const PRIVATE_KEY = process.env.REACT_APP_GOOGLE_SERVICE_PRIVATE_KEY || '';

const doc = new GoogleSpreadsheet(SPREADSHEET_ID);
const title = 'experiences';

export const getSheetData = async () => {
  try {
    await doc.useServiceAccountAuth({
      client_email: CLIENT_EMAIL,
      private_key: PRIVATE_KEY,
    });
    await doc.loadInfo();
    setTitle(doc.title);

    //return doc.sheetsById[SHEET_ID];
    //return doc.sheetsByIndex[0];
    return doc.sheetsByTitle[title];
  } catch (e) {
    console.error('Error: ', e);
  }
};

export const columns = [
  {
    Header: 'From',
    accessor: 'from',
  },
  {
    Header: 'To',
    accessor: 'to',
  },
  {
    Header: 'Company',
    accessor: 'company',
  },
  {
    Header: 'Job title',
    accessor: 'job_title',
  },
  {
    Header: 'City',
    accessor: 'city',
  },
];
