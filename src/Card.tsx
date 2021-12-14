import React from "react";
import { CardContainer } from "./styles";
interface CardProp {
  text: string;
}

export const Card = ({ text, children }: React.PropsWithChildren<CardProp>) => {
  return <CardContainer>{text}</CardContainer>;
};
