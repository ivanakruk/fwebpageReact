import './App.css';
import { useDispatch } from 'react-redux';
import { CheckToken } from './Redux/auth';
import { useEffect } from 'react';
import Router from './Router/Router';


function App() {  
  
  const dispatch = useDispatch();
  useEffect(() => {
   dispatch(CheckToken());
  }, []);

  return (
    <div className="App">     
        <header className="App-header">
            <Router />
        </header>     
    </div>
  );
}

export default App;