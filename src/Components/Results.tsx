import React from "react";
import { GlobalStyle, Wrapper } from "../App.styles";
type Props = {
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  score: number;
  totalQuestions: number;
};
console.log("inside results");
const Results: React.FC<Props> = ({ callback, score, totalQuestions }) => (
  <>
    <GlobalStyle />
    <Wrapper>
      <h1>
        Score:{score}/{totalQuestions}
      </h1>
      <button className="next" onClick={callback}>
        Start Again
      </button>
    </Wrapper>
  </>
);

export default Results;
