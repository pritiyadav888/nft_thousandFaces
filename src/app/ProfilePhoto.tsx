import React from 'react';
import PropTypes from 'prop-types';

const ProfilePhoto = (props: { image: string }) => (
  <div className='profile-photo'>
    <img src={props.image} alt='Profile photo' />
  </div>
);

export default ProfilePhoto;
