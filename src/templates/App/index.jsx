import React from "react";
import { theme } from "../../styles/theme";
import * as S from './style'
function App() {
  return (
   
    <div className="App">
      <S.Wrapper background={'blue'} size={'huge'} theme={theme}>
      <h1>Hello</h1>
      </S.Wrapper>
    </div>
   
  );
}

export default App;
