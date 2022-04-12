import { ReactNode } from 'react';
import styled from 'styled-components';

export type ButtonProps = {
  children: ReactNode;
  onClick: () => void;
};

export type ListItemProps = {
  children: ReactNode;
  onClick: () => void;
};

export const SimpleButton = ({ children, onClick }: ButtonProps) => (
  <ButtonCss onClick={onClick}>{children}</ButtonCss>
);

export const ListItem = ({ children, onClick }: ListItemProps) => (
  <div onClick={() => onClick()}>{children}</div>
);

export const ButtonCss = styled.button`
  padding: 8px 12px;
  background: #0f85fa;
  border-radius: 2px;
  border: 1px solid #0352a0;
  cursor: pointer;

  &:hover {
    background: #0352a0;
  }
`;
