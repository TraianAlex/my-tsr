import React from 'react';
import { Column, useTable } from 'react-table';
import BTable from 'react-bootstrap/Table';

/** React 19: keys must not be spread into JSX. */
function splitKeyProps<T extends { key?: React.Key }>(
  props: T,
): { key?: React.Key; rest: Omit<T, 'key'> } {
  const { key, ...rest } = props;
  return { key, rest };
}

export default function Table({
  columns,
  data,
}: {
  columns: Column<{}>[];
  data: {}[];
}) {
  // Use the useTable Hook to send the columns and data to build the table
  const {
    getTableProps, // table props from react-table
    getTableBodyProps, // table body props from react-table
    headerGroups, // headerGroups, if your table has groupings
    rows, // rows for the table based on the data passed
    prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
  } = useTable({
    columns,
    data,
  });

  /* 
    Render the UI for your table
    - react-table doesn't have UI, it's headless. We just need to put the react-table props from the Hooks, and it will do its magic automatically
  */
  return (
    <BTable striped bordered hover responsive size="sm" {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => {
          const { key, rest } = splitKeyProps(headerGroup.getHeaderGroupProps());
          return (
            <tr key={key} {...rest}>
              {headerGroup.headers.map((column) => {
                const headerProps = splitKeyProps(column.getHeaderProps());
                return (
                  <th key={headerProps.key} {...headerProps.rest}>
                    {column.render('Header')}
                  </th>
                );
              })}
            </tr>
          );
        })}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          const rowProps = splitKeyProps(row.getRowProps());
          return (
            <tr key={rowProps.key} {...rowProps.rest}>
              {row.cells.map((cell) => {
                const cellProps = splitKeyProps(cell.getCellProps());
                return (
                  <td key={cellProps.key} {...cellProps.rest}>
                    {cell.render('Cell')}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </BTable>
  );
}
