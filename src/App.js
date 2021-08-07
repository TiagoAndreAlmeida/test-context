import logo from './logo.svg';
import './App.css';
import { useContext, useEffect } from 'react';
import AuthProvider, { AuthContext, useAuth } from './contexts/auth';

function App() {
  // retrieve context values for any component
  const { name, testFunction } = useAuth();
  console.log(name, testFunction)

  useEffect(() => {
    
  },[])

  return (
    <div className="App">
      {name}
      <button onClick={() => testFunction('Tiago', 'André')}>OK</button>
    </div>
  );
}

export default App;
