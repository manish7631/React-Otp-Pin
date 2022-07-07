
import { useState } from 'react';
import './App.css';
import { Pin } from './components/Pin';

function App() {

  const [otp, setOtp] = useState('')

  return (
    <div className="App">
      <Pin length={4} setOtphandler={(value) => { setOtp(value) }} />

      <h4>The value of Otp is {otp}</h4>
    </div>
  );
}

export default App;
