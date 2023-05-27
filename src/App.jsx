import { useState, useEffect } from 'react';
// import './App.css';
import Home from './Pages/Home';
import Header from './Components/Header';
import { ThemeContext } from './Context/ThemeContext';

function App() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    setTheme(localStorage.getItem('theme')?localStorage.getItem('theme'):'dark');
  }, []);

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {/* /*============================================= */}
      {/* =       manual dark mode implementation       = */}
      {/* ===============================================*/ }
      <div className={`${theme} ${theme =='dark'?'bg-[#121212]':null} h-[100vh]`}>
      
      {/* /*===== End of dark mode implementation =======*/ }
        <Header />
        <Home />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
