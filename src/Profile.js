import React from 'react';
import ProfileForm from './ProfileForm';

/**
 * Renders the profile form for the site
 *
 * endpoint: /profile
 *
 * Props:
 * - updateProfile: fn from parent
 *
 * State:
 * - None
 *
 * RouteList -> Profile -> ProfileForm
 */

function Profile({ updateProfile }) {
  return (
    <div className='Profile'>
      <ProfileForm updateProfile={updateProfile} />
    </div>
  );
}

export default Profile;