//import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { Data } from './credentials';

export const GoogleSheets: React.FC = () => {
  const SPREADSHEET_ID = process.env.REACT_APP_SPREADSHEET_ID;
  const SHEET_ID = process.env.REACT_APP_SHEET_ID || 0;
  // const CLIENT_EMAIL = process.env.REACT_APP_GOOGLE_CLIENT_EMAIL || '';
  // const PRIVATE_KEY = process.env.REACT_APP_GOOGLE_SERVICE_PRIVATE_KEY || '';
  const CLIENT_EMAIL = Data.client_email || '';
  const PRIVATE_KEY = Data.private_key || '';

  const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

  const loadSpreadsheet = async () => {
    try {
      await doc.useServiceAccountAuth({
        client_email: CLIENT_EMAIL,
        private_key: PRIVATE_KEY,
      });
      await doc.loadInfo();
      //console.log(doc.title);

      const sheet = doc.sheetsById[SHEET_ID];
      console.log(sheet);
    } catch (e) {
      console.error('Error: ', e);
    }
  };
  loadSpreadsheet();

  return <Container>Test Google Sheets</Container>;
};
