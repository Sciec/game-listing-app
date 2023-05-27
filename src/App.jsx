import { useState } from 'react';
// import './App.css';
import Home from './Pages/Home';
import Header from './Components/Header';

function App() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState('light');

  return (
    <>
      
      {/* /*============================================= */}
      {/* =       manual dark mode implementation       = */}
      {/* ===============================================*/ }
      <div className={`${theme} ${theme =='dark'?'bg-[#121212]':null}`}>
      
      {/* /*===== End of dark mode implementation =======*/ }
        <Header />
        <Home />
      </div>
    </>
  )
}

export default App
