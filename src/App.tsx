import { useState } from 'react';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import './App.scss';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showError, setShowError] = useState(false);

  interface loginCreds {
    uname: string;
    pass: string;
  }

  const submitFn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let showError = false;
    const form = e.target as HTMLElement;
    const creds: loginCreds = { uname: 'MAINT', pass: 'safetyiskey' };
    const inputFields: NodeListOf<HTMLInputElement> =
      form.querySelectorAll('input.form__field');

    [...inputFields].forEach((input) => {
      const id: string = input.id;
      const value: string = creds[id as keyof typeof creds];
      showError = input.value !== value;
    });

    const randomTimout = Math.floor(Math.random() * 600 + 100);
    const myTimeout = setTimeout(onLoginSuccess, randomTimout);

    function onLoginSuccess() {
      clearTimeout(myTimeout);
      setIsLoggedIn(!showError);
      setShowError(showError);
    }
  };

  return (
    <div className="app-body">
      {isLoggedIn ? (
        <HomePage />
      ) : (
        <LoginPage showError={showError} submitFn={submitFn} />
      )}
    </div>
  );
}

export default App;
