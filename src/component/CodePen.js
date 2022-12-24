import SyntaxHighlighter from 'react-syntax-highlighter';

import { PrismAsyncLight as St } from 'react-syntax-highlighter';

import tomorrow from 'react-syntax-highlighter/dist/esm/styles/prism/tomorrow';

export const CodePen = () => {
   console.log(SyntaxHighlighter.supportedLanguages)
  const codeString = '.div-stle {}';
  return (
    <St language="css" style={tomorrow}>
      {codeString}
    </St>
  );
};

