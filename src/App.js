
import './App.css';
import CallBackPrac from './components/CallBackPrac';
import MemoPrac from './components/MemoPrac';
import CAUCPrac from './components/CAUCPrac';
import HocPrac from './components/HocPrac';
import Parent from './components/Parent';

function App() {
  return (
    <div className="App">
      <MemoPrac />
      <CallBackPrac />
      <CAUCPrac data={["neha"]} />
      <CAUCPrac data={["abcd"]} />
      <HocPrac />
      <Parent />
    </div>
  );
}

export default App;
