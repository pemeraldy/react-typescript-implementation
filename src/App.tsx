import React from "react";
import {Card} from './Card'
import {Column} from './Column'

import { AppContainer } from "./styles";

function App() {
  return (
    <AppContainer>
      <Column text="Goals">
        <Card text="Build apps worth billions of dollars" />
        <Card text="Become a BILLIONAIRE" />
      </Column>
      <Column text="Todos">
        <Card text="Finish React and Typescript" />
        <Card text="Complete Vue and Typescript" />
      </Column>
    </AppContainer>
  );
}

export default App;
