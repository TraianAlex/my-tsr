import React from "react";

// Custom component to render Genres 
const Genres = ({ values }: any) => {
  // Loop through the array and create a badge-like component instead of a comma-separated string
  return (
    <>
      {values.map((genre: React.ReactNode, idx: string | number | undefined) => {
        return (
          <span key={idx} className="badge">
            {genre}
          </span>
        );
      })}
    </>
  );
};

export const columnsData = [
  {
    // first group - TV Show
    Header: "TV Show",
    // First group columns
    columns: [
      {
        Header: "Name",
        accessor: "show.name"
      },
      {
        Header: "Type",
        accessor: "show.type"
      }
    ]
  },
  {
    // Second group - Details
    Header: "Details",
    // Second group columns
    columns: [
      {
        Header: "Language",
        accessor: "show.language"
      },
      {
        Header: "Genre(s)",
        accessor: "show.genres",
        // Cell method will provide the cell value; we pass it to render a custom component
        Cell: ({ cell: { value } }: any) => <Genres values={value} />
      },
      {
        Header: "Runtime",
        accessor: "show.runtime",
        Cell: ({ cell: { value } }: any) => {
          const hour = Math.floor(value / 60);
          const min = Math.floor(value % 60);
          return (
            <>
              {hour > 0 ? `${hour} hr${hour > 1 ? "s" : ""} ` : ""}
              {min > 0 ? `${min} min${min > 1 ? "s" : ""}` : ""}
            </>
          );
        }
      },
      {
        Header: "Status",
        accessor: "show.status"
      }
    ]
  }
]; 
