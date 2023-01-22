import React from 'react';
import Header from './components/Header';
import './styles/main.css'
import { useGlobalContext } from './context/Context';
import {Routes,Route} from "react-router-dom"
import MainPage from './pages/MainPage';
import CountryPage from './pages/CountryPage';
import ErrorPage from './pages/ErrorPage';

function App() {
  const {darkMode} = useGlobalContext()
  return (
    <div className={`App ${darkMode ? 'dark-bg':''}`}>
      <Header/>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='country/:id' element={<CountryPage/>}/>
          <Route path='*' element={<ErrorPage/>}/>
        </Routes>
    </div>
  );
}

export default App;
