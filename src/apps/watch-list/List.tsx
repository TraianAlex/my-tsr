import React from 'react';
import styled from 'styled-components';
import { IState as IProps } from './WatchList';

const List: React.FC<IProps> = ({ form }) => {
  const mapList = (): JSX.Element[] => {
    return form.map((i) => {
      return (
        <tr>
          <td>{i.name}</td>
          <td>{i.rate}</td>
          <td>{i.review}</td>
        </tr>
      );
    });
  };

  return (
    <ListStyled>
      <table>
        <tr>
          <th>Movie</th>
          <th>Rate</th>
          <th>review</th>
        </tr>
        {mapList()}
      </table>
    </ListStyled>
  );
};

export default List;

const ListStyled = styled.div`
  max-height: 150px;
  overflow-y: scroll;

  table th,
  table td {
    color: rgb(168, 168, 168) !important;
    padding: 10px;
    padding-right: 36px;
    padding-left: 36px;
    font-size: 18px;
    text-align: left;
    max-width: 700px;
    border-bottom: 1px solid rgb(121, 121, 121);
  }
`;
