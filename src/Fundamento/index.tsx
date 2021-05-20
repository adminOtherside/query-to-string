import React, { useState } from 'react';
import { Container, Content } from './styles';

export default function Fundamento() {
  const [copySuccess, setCopySuccess] = useState('');
  const [text, setText] = useState('');
  const [result, setResult] = useState('');

  function handleText(e: string) {
    setText(e);
  }

  function handleConvert(textPaste: string) {
    // eslint-disable-next-line
    const subsExpression = /	/gm;
    const subs = ` - `;
    const subsExpression1 = /$/gm;
    const subs1 = `,`;
    const subsExpression2 = /\r?\n|\r/gm;
    const subs2 = ` `;
    const subsExpression3 = /,\s*$/;
    const subs3 = ``;

    const replaced = textPaste
      .replace(subsExpression, subs)
      .replace(subsExpression1, subs1)
      .replace(subsExpression2, subs2)
      .replace(subsExpression3, subs3);

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
            onFocus={() => {
              setCopySuccess('');
              setResult('');
            }}
            defaultValue={text}
          />
          <textarea
            className="result"
            placeholder="result"
            defaultValue={result}
          />
        </div>
        <div className="buttons">
          <button onClick={() => handleConvert(text)}>Converter</button>
        </div>
      </Content>
    </Container>
  );
}
