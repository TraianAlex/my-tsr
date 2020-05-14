import React from "react";
import { render } from "@testing-library/react";
import TableApp from "./table/TableApp";

test("renders learn react link", () => {
  const { getByText } = render(<TableApp />);
  const linkElement = getByText(/TV Show/i);
  expect(linkElement).toBeInTheDocument();
});
