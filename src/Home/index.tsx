import React, { useState } from 'react';
import { Container, Content } from './styles';

export default function CopyExample() {
  const [copySuccess, setCopySuccess] = useState('');
  const [text, setText] = useState('');
  const [result, setResult] = useState('');
  const [select, setSelect] = useState(false);

  function handleText(e: string) {
    setText(e);
  }
  function handleConvert(text: string) {
    const cleanExpression = /\+/gm;
    const cleanExpression1 = /''/gm;
    const cleanExpression2 = /^\s+/gm;
    // const cleanExpression3 = /\r?\n|\r/g;
    const clean = ``;
    const cleaning = text
      .replace(cleanExpression, clean)
      .replace(cleanExpression1, clean)
      .replace(cleanExpression2, clean);
    // .replace(cleanExpression3, clean);

    const subsExpression = /'/gm; // altera todas ' por "
    const subs = `"`;
    const subsExpression1 = /"#39"/gm; // altera "#39" por '
    const subs1 = `'`;
    const subsExpression2 = /$/gm; //adiciona "+" no final das linhas
    const subs2 = `+`;
    const subsExpression3 = /\+$/g; //altera "+" do final de tudo por ,
    const subs3 = `,`;

    let replaced = cleaning
      .replace(subsExpression, subs)
      .replace(subsExpression1, subs1)
      .replace(subsExpression2, subs2)
      .replace(subsExpression3, subs3);

    if (select) {
      const subsExpression4 = /:/gm; //altera ":" por ${
      const subs4 = `$\{e.e.`;
      const subsExpression5 = /"/gm; //altera "  por `
      const subs5 = '`';
      const subsExpression6 = /  +/gm; //aremove espaços em branco
      const subs6 = '';

      replaced = replaced.replace(subsExpression4, subs4);
      replaced = replaced.replace(subsExpression5, subs5);
      replaced = replaced.replace(subsExpression6, subs6);
      // .replace(subsExpression, subs)
      //(\$\{)\w+) Sellecionar o final
    }

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
            autoFocus
            defaultValue={result}
          />
        </div>
        <div className="buttons">
          <button onClick={() => handleConvert(text)}>Converter</button>
          <div>
            <input
              type="checkbox"
              name="update"
              id="update"
              onClick={() => setSelect(!select)}
            />
            <span>UPDATE?</span>
          </div>
        </div>
      </Content>
    </Container>
  );
}
