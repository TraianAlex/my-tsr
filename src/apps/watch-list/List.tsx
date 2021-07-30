import React from 'react';
import styled from 'styled-components';
import { IState as IProps } from './WatchList';

export const List: React.FC<IProps> = ({ form }) => {
  const mapList = (): JSX.Element[] =>
    form.map((i) => (
      <tr key={Math.random()}>
        <td>{i.name}</td>
        <td>{i.rate}</td>
        <td>{i.review}</td>
      </tr>
    ));

  return (
    <ListStyled>
      <table>
        <thead>
          <tr>
            <th>Movie</th>
            <th>Rate</th>
            <th>review</th>
          </tr>
        </thead>
        <tbody>{mapList()}</tbody>
      </table>
    </ListStyled>
  );
};

const ListStyled = styled.div`
  max-height: 150px;
  overflow-y: scroll;

  table th,
  table td {
    color: rgb(168, 168, 168) !important;
    padding: 10px 36px;
    font-size: 18px;
    text-align: left;
    max-width: 700px;
    border-bottom: 1px solid rgb(121, 121, 121);
  }
`;
