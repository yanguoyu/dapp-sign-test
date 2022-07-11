import './App.css';
import Result from './Result';
import SendTx from './SendTx';

function App() {
  const isResult = window.location.pathname.includes('result')
  console.log(window.location.href.length)
  if (isResult) {
    return <Result />
  }
  return (<SendTx />)
}

export default App;
