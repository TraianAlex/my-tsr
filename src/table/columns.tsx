import React from 'react';
import { CellValue } from 'react-table';

const Genres = ({ values }: CellValue) => {
  return (
    <>
      {values &&
        values.map(
          (genre: React.ReactNode, idx: string | number | undefined) => {
            return (
              <span key={idx} className="badge text-black-50">
                {genre}
              </span>
            );
          },
        )}
    </>
  );
};

export const columnsData = [
  {
    Header: 'TV Show',
    columns: [
      {
        Header: 'Name',
        accessor: 'show.name',
      },
      {
        Header: 'Type',
        accessor: 'show.type',
      },
    ],
  },
  {
    Header: 'Details',
    columns: [
      {
        Header: 'Language',
        accessor: 'show.language',
      },
      {
        Header: 'Genre(s)',
        accessor: 'show.genres',
        Cell: ({ cell: { values } }: CellValue) => <Genres values={values} />,
      },
      {
        Header: 'Runtime',
        accessor: 'show.runtime',
        Cell: ({ cell: { value } }: CellValue) => {
          const hour = Math.floor(value / 60);
          const min = Math.floor(value % 60);
          return (
            <>
              {hour > 0 ? `${hour} hr${hour > 1 ? 's' : ''} ` : ''}
              {min > 0 ? `${min} min${min > 1 ? 's' : ''}` : ''}
            </>
          );
        },
      },
      {
        Header: 'Status',
        accessor: 'show.status',
      },
    ],
  },
];
