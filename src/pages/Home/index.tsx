import React, { useState } from 'react';
import { StringDecoder } from 'string_decoder';
import { Container, Content } from './styles';

export default function CopyExample() {
  const [copySuccess, setCopySuccess] = useState('');
  const [text, setText] = useState('');

  function handleText(e: string) {
    console.log(e);

    const expression = /\r?\n|\r/g;
    const expression2 = /^/gm;
    const expression3 = /$/gm;
    const subst = ``;
    const subst2 = `"`;
    const subst3 = `"`;

    const result = e
      .replace(expression, subst)
      .replace(expression2, subst2)
      .replace(expression3, subst3);

    console.log(result);

    navigator.clipboard.writeText(result).then(
      function () {
        setCopySuccess('Query parsed and add to clipBoard');
      },
      function () {
        setCopySuccess('Not Copied!');
      },
    );

    setText(result);
  }

  return (
    <Container>
      <Content>
        {document.queryCommandSupported('copy') ? (
          <span className="support">copy command is supported</span>
        ) : (
          <span className="notsupport">copy command is NOT supported</span>
        )}
        <span className="succsess">{copySuccess}</span>
        <textarea
          placeholder="put your query here"
          autoFocus
          onChange={e => handleText(e.target.value)}
        />
        <h4>
          Result:
          <p className="result">{text}</p>
        </h4>
      </Content>
    </Container>
  );
}

// import React from 'react';
// import { Container } from './styles';

// import ToolBar from '../../components/ToolBar';
// import Menu from '../../components/Menu';

// const Home: React.FC = () => {
//   return (
//     <Container>
//       <ToolBar />
//       <Menu />
//       <div className="page">HOME</div>
//     </Container>
//   );
// };

// export default Home;
