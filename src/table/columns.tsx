import React from 'react';

const Genres = ({ values }: any) => {
  return (
    <>
      {values.map(
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
        Cell: ({ cell: { value } }: any) => <Genres values={value} />,
      },
      {
        Header: 'Runtime',
        accessor: 'show.runtime',
        Cell: ({ cell: { value } }: any) => {
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
