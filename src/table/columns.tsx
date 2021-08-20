import React from 'react';

type genres = { values: string[] };
type runtime = { value: number };

const Genres = ({ values }: genres) => {
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
        Cell: ({ cell: { values } }: { cell: genres }) => (
          <Genres values={values} />
        ),
      },
      {
        Header: 'Runtime',
        accessor: 'show.runtime',
        Cell: ({ cell: { value } }: { cell: runtime }) => {
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
