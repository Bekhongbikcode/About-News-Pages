import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import About from './Component/More/About';
import News from './Component/More/News';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/about' element={<About />}></Route>
          <Route path='/news' element={<News />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
