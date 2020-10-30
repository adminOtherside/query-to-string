import React, { useRef, useState } from 'react';

export default function CopyExample() {
  const [copySuccess, setCopySuccess] = useState('');
  const textAreaRef = useRef(null);

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand('copy');

    e.target.focus();
    setCopySuccess('Copied!');
  }

  return (
    <div>
      {document.queryCommandSupported('copy') && (
        <div>
          <button onClick={copyToClipboard}>Copy</button>
          {copySuccess}
        </div>
      )}
      <form>
        <textarea ref={textAreaRef} value="Some text to copy" />
      </form>
    </div>
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
