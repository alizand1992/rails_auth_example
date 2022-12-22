import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const signUp = async (e) => {
    e.preventDefault();
    const res = await fetch('api/users.json', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        user: {
          email: signUpEmail,
          password: signUpPassword,
        }
      }),
    });
    const json = await res.json();
    if (res.status === 422) {
      setMessage(JSON.stringify(json.errors));
    } else {
      setMessage(JSON.stringify(json));
    }
  };

  const signIn = async (e) => {
    e.preventDefault();
    const res = await fetch('api/users/sign_in.json', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        user: {
          email,
          password,
        }
      }),
    });
    const json = await res.json();
    if (res.status === 401) {
      setMessage(json.error);
    } else {
      setMessage(json.message);
    }
  };

  const checkSignedIn = async (e) => {
    e.preventDefault();
    const res = await fetch('api/check_signed_in.json');
    const json = await res.json();
    if (res.status === 401) {
      setMessage(json.error);
    } else {
      setMessage(json.message);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Sign Up</h1>
        <table>
          <tr>
            <td>E-Mail</td>
            <td><input type="email" value={signUpEmail} onChange={(e) => { setSignUpEmail(e.target.value); }} /></td>
          </tr>
          <tr>
            <td>Password</td>
            <td><input type="password" value={signUpPassword} onChange={(e) => { setSignUpPassword(e.target.value); }} /></td>
          </tr>
          <tr>
            <td colSpan="2">
              <button onClick={signUp}>Sign Up</button>
            </td>
          </tr>
        </table>
        <br /><br />
        <h1>Sign In</h1>
        <table>
          <tr>
            <td>E-Mail</td>
            <td><input type="email" onChange={(e) => { setEmail(e.target.value); }} /></td>
          </tr>
          <tr>
            <td>Password</td>
            <td><input type="password" onChange={(e) => { setPassword(e.target.value); }} /></td>
          </tr>
          <tr>
            <td colSpan="2">
              <button onClick={signIn}>Sign In</button>
            </td>
          </tr>
        </table>
        <br /><br />
        <p>
          <button onClick={checkSignedIn}>Check Signed In</button>
        </p>
        <p>
          Message: {message}
        </p>
      </header>
    </div>
  );
}

export default App;
