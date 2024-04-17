import './App.css';
import FormInput from './components/FormInput';
import FormRadioGroup from './components/FormRadioGroup';
import FormTextArea from './components/FormTextArea';
import Oldform from './components/Oldform';
import SecondForm from './components/SecondForm';
// import Oldform from './components/Oldform';
import YoutubeForm from './components/YoutubeForm';


function App() {
  return (
    <div className="App">
      <YoutubeForm />
      {/* <Oldform /> */}
      <SecondForm />
     <Oldform/>
     <FormInput />
     <FormRadioGroup />
     <FormTextArea />
    </div>
  );
}

export default App;
