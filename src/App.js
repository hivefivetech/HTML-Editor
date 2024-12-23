import './App.css';

import { useRef } from 'react';

function App() {

  var refdiv = useRef(null);
  var rte;

  function btnclick() {
    alert(rte.getHTMLCode());
  }

  setTimeout(function () {
    rte = new window.RichTextEditor(refdiv.current);
    rte.setHTMLCode("Hello World!");
  }, 0)

  return (
    <div className="App">
      <header className="App-header">
        <h2 className='App-MainHeading'>JetStream Mailer HTML Editor</h2>

        <div ref={refdiv}></div>

        <hr />
        <div><button onClick={btnclick}>Show HTML Code</button></div>

        <h3 className='App-MainHeading'>Buy JetStream Mailer - <a href='https://t.me/ZplusMan' className='App-PurchaseAnchor'>ZplusMan</a></h3>
      </header>
    </div>
  );
}

export default App;
