import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes,Route,  Navigate} from 'react-router-dom';
import {v4 as uuid} from 'uuid';
import Editor from './component/Editor';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate replace to={`/document/${uuid()}`} />} />
        <Route path='/document/:id' element={<Editor />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
