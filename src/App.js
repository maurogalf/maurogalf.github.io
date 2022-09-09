import './App.css';
import Header from './components/Header';
import Resume from './components/Resume';
import {Routes, Route} from "react-router-dom";
import Projects from './components/Projects';

function App() {
  return (
    <div className="container">
        <Header/>
      <div className="body">
        <Routes>
          <Route path="/" element={<Resume/>}/>
          <Route path="/projects" element={<Projects/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
