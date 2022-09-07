import './App.css';
import Header from './components/Header';
import Left from './components/Left';
import Right from './components/Right';

function App() {
  return (
    <div className="container">
        <Header/>
      <div className="body">
          <Left/>
          <Right/>
      </div>
    </div>
  );
}

export default App;
