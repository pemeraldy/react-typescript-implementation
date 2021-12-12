import React from "react";
import { ColumnContainer, ColumnTitle } from "./styles";

interface ColumnProps {
  text: string; //text:? means this prop is optional
}

export const Column = ({
  text,
  children,
}: React.PropsWithChildren<ColumnProps>) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {children}
    </ColumnContainer>
  );
};
