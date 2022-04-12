import React, { ReactNode } from 'react';
import { ButtonCss } from './buttons';

type ButtonProps = {
  children: ReactNode;
  onClick: () => void;
  loggingData: string;
};

type ListItemProps = {
  children: ReactNode;
  onClick: () => void;
  loggingData: string;
};

const Button = ({ children, onClick, loggingData }: ButtonProps) => {
  const log = (m: any, logs: string) =>
    console.log(`${m} + user logging system + ${logs}`);

  const onButtonClick = () => {
    log('Button was clicked', loggingData);
    onClick();
  };

  return <ButtonCss onClick={onButtonClick}>{children}</ButtonCss>;
};

const ListItem = ({ children, onClick, loggingData }: ListItemProps) => {
  const log = (m: any, logs: string) =>
    console.log(`${m} + user logging system + ${logs}`);

  const onListItemClick = () => {
    log('List item was clicked', loggingData);
    onClick();
  };
  return <div onClick={() => onListItemClick()}>{children}</div>;
};

const withSomethingNormal = (Component: any) => (props: any) =>
  <Component {...props} />;

const ButtonWithSomethingNormal = withSomethingNormal(Button);
const ListWithSomethingNormal = withSomethingNormal(ListItem);

export const Hoc1 = () => (
  <div>
    <ButtonWithSomethingNormal onClick={() => console.log('log click')}>
      [Fixed button]
    </ButtonWithSomethingNormal>
    <ListWithSomethingNormal onClick={() => console.log('log click')}>
      [List]
    </ListWithSomethingNormal>
  </div>
);
