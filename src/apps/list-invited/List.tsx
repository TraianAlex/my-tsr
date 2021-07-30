import React from 'react';
import styled from 'styled-components';
import { IState as Props } from './ListInvited';

interface IProps {
  people: Props['people'];
}

const List: React.FC<IProps> = ({ people }) => {
  const renderList = (): JSX.Element[] => {
    return people.map((person) => {
      return (
        <li key={person.name + person.age} className="List">
          <div className="List-header">
            <img className="List-img" src={person.img} alt="" />
            <h2>{person.name}</h2>
          </div>
          <p>{person.age} years old</p>
          <p className="List-note">{person.note}</p>
        </li>
      );
    });
  };

  return <ListStyled>{renderList()}</ListStyled>;
};

export default List;

const ListStyled = styled.ul`
  .List {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    max-width: 50rem;
    margin: 0rem auto;
    padding: 1rem;
    border: 0.1rem solid rgba(0, 0, 0, 0.233);
    list-style: none;
  }

  .List-header {
    display: flex;
    align-items: center;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .List-header h2 {
    color: rgb(37, 36, 36);
  }

  .List-img {
    width: 4rem;
    height: 4rem;
    border-radius: 100%;
    margin-right: 0.5rem;
  }

  .List-note {
    width: 30%;
    text-align: left;
  }
`;
