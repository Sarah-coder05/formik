import './App.css';
import Oldform from './components/Oldform';
import SecondForm from './components/SecondForm';
import YoutubeForm from './components/YoutubeForm';


function App() {
  return (
    <div className="App">
      <YoutubeForm />
      <Oldform />
      <SecondForm />
    </div>
  );
}

export default App;
