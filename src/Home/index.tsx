import React, { useState } from 'react';
import { Container, Content } from './styles';

export default function CopyExample() {
  const [copySuccess, setCopySuccess] = useState('');
  const [text, setText] = useState('');

  function handleText(e: string) {
    const expression = /\r?\n|\r/g;
    const expression2 = /^/gm;
    const expression3 = /$/gm;
    const cleaner = ``;
    const subst = `"`;

    const result = e
      .replace(expression, cleaner)
      .replace(expression2, subst)
      .replace(expression3, subst);

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