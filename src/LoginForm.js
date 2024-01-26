import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./LoginForm.css";

/**
 * The login form for the site
 *
 * Props:
 *  -login: fn to call in App
 *
 * State:
 * - formData:
 * - formErrors:
 *
 * Login -> LoginForm
 */


function LoginForm() {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState([]);

  console.log("Login Form renders", formData, formErrors);

  /** Handle user updates on the form by named input field */
  function handleChange(evt) {
    const { name, value } = evt.target.value;
    setFormData((fData) => ({ ...fData, [name]: value }));
  }

  /** Call function from prop and redirect to homepage. Set errors if any returned */
  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await signUp(formData);
      navigate("/");
    } catch (err) {
      setFormErrors(err);
    }
  }

  return (
    <div className='LoginForm'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username: </label>
          <input
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        {formErrors.length > 0
          ? <div>{formErrors.map((err, i) => <p key={i}>Error: {formErrors[i]}</p>)}</div>
          : null
        }

        <div className='SignupForm-submitBtn'>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;