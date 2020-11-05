import './App.css'
import Header from './components/header/header'
import Panel from './components/panel/panel'
import ListOfMessages from './components/listOfMessages/listOfMessages'
import Mail from "./components/mail/mail"

function App() {
  return (
    <div className="App">
      <Header/>
        <div className='container clearfix'>
          <Panel/>
          <ListOfMessages/>
          <Mail/>      
        </div>
    </div>
  );
}

export default App;
