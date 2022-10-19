import React, { useEffect } from 'react';
import { setTarget3, setTarget4, useStore } from './sheetStore';
import { getSheetData } from './utils';

export const RenderCell = () => {
  const target3 = useStore('target3');
  const target4 = useStore('target4');

  useEffect(() => {
    const loadCells = async () => {
      const sheet = await getSheetData();
      sheet && (await sheet.loadCells('A1:G10'));
      const a1 = sheet && sheet.getCell(0, 0);
      a1 && setTarget3(a1.value);
      const f2 = sheet && sheet.getCellByA1('F2');
      f2 && setTarget4(f2.value);
    };
    loadCells();
  }, []);

  return (
    <div>
      <div>Target3: {target3}</div>
      <div>Target4: {target4}</div>
    </div>
  );
};
