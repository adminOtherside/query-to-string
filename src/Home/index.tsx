import React, { useState } from 'react';
import { Container, Content } from './styles';

export default function CopyExample() {
  const [copySuccess, setCopySuccess] = useState('');
  const [text, setText] = useState('');
  const [result, setResult] = useState('');

  function handleText(e: string) {
    setText(e);
  }
  function handleConvert(text: string) {
    const expression = /\r?\n|\r/g;
    const expression2 = /^/gm;
    const expression3 = /$/gm;
    const cleaner = ` `;
    const subst = `"`;

    const replaced = text
      .replace(expression, cleaner)
      .replace(expression2, subst)
      .replace(expression3, subst);

    setResult(replaced);

    navigator.clipboard.writeText(replaced).then(
      function () {
        setCopySuccess('Query converted and add to clipBoard');
      },
      function () {
        setCopySuccess('Not Copied!');
      },
    );
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
        <div className="textareas">
          <textarea
            placeholder="put your query here"
            autoFocus
            onChange={e => handleText(e.target.value)}
            value={text}
          />
          <textarea
            className="result"
            placeholder="result"
            autoFocus
            onFocus={() => {
              setCopySuccess('');
            }}
            value={result}
          />
        </div>
        <button onClick={() => handleConvert(text)}>Converter</button>
      </Content>
    </Container>
  );
}
