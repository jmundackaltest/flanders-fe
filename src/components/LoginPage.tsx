import React from 'react';
import Background from '../assets/images/flanders-bg.jpg';

interface LoginProps {
  showError: boolean;
  submitFn: React.FormEventHandler<HTMLFormElement>;
}

const LoginPage: React.FC<LoginProps> = ({
  showError,
  submitFn,
}: LoginProps) => {
  // Generate JSX code for error message
  const renderErrorMessage: React.FC = () =>
    showError && (
      <div className="error-ct">
        <span className="error">User name or Password is incorrect</span>
      </div>
    );

  return (
    <div className="login-ct">
      <div className="flanders-bg-ct">
        <img src={Background} />
      </div>
      <form onSubmit={submitFn}>
        <div className="form-header">
          <a href="https://www.flandersinc.com">
            <img
              src="https://www.flandersinc.com/wp-content/themes/flanders/assets/public/images/flanders-logo.png"
              alt=""
              id="masthead-logo"
            />
          </a>
        </div>
        <div className="input-container form__group field">
          <label htmlFor="uname" className="form__label">
            Username{' '}
          </label>
          <input
            id="uname"
            type="text"
            name="uname"
            placeholder="User Name"
            className="form__field"
            required
          />
        </div>
        <div className="input-container form__group field">
          <label htmlFor="pass" className="form__label">
            Password{' '}
          </label>
          <input
            id="pass"
            placeholder="Password"
            type="password"
            name="pass"
            className="form__field"
            required
          />
        </div>
        {renderErrorMessage('uname')}
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
