import React, { useState } from 'react';
import "./ProfileForm.css";

/**
 * The profile update form for the site
 *
 * Props:
 *  -updateProfile: fn to call in App
 *
 * State:
 * - formData: data entered into the form
 * - formErrors: errors encountered while filling form
 * - updateConfirmed: set to true once the form update is registered
 *
 * Profile -> ProfileForm
 */

function ProfileForm({ updateProfile }) {
  const [formData, setFormData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
  });
  const [formErrors, setFormErrors] = useState([]);
  const [updateConfirmed, setUpdateConfirmed] = useState(false);

  console.log("ProfileForm renders", formData, formErrors);

  /** Handle user updates on the form by named input field */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((fData) => ({ ...fData, [name]: value }));
  }

  /** Call function from prop and present confirmation message.
   *  Set errors if any returned */

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await updateProfile(formData);
      setUpdateConfirmed(true);
    } catch (err) {
      setFormErrors(err);
    }
  }
  return (
    <div className='ProfileForm'>
      <h2>Profile</h2>
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
          <label htmlFor="firstName">First Name: </label>
          <input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name: </label>
          <input
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        {formErrors.length > 0
          ? <div>{formErrors.map((err, i) => <p key={i}>Error: {formErrors[i]}</p>)}</div>
          : null
        }

        {updateConfirmed
          ? <div><i>Updated successfully.</i></div>
          : null
        }

        <div className='ProfileForm-submitBtn'>
          <button type="submit">Save Changes</button>
        </div>
      </form>
    </div>
  );
}

export default ProfileForm;