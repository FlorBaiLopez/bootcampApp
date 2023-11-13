import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getSingleUser } from '../../api/user';
import LoadingSpinner from '../../components/LoadingSpinner';

import './styles.scss';
import CustomButton from '../../components/CustomButton';
import ErrorPage from '../ErrorPage';

const Profile = () => {
  const { id } = useParams();

  const [profileToDisplay, setProfileToDisplay] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const onClick = () => {
    localStorage.removeItem('userData');
    localStorage.removeItem('userId');
    navigate('/');
    window.location.reload();
  };

  const retrieveProfile = async () => {
    try {
      setLoading(true);
      const myProfile = await getSingleUser(id);
      setProfileToDisplay(myProfile.data);
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    retrieveProfile();
  }, [id]);

  const { name, email, address, phone } = profileToDisplay || {};

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="profile-view">
      {error && <ErrorPage />}
      <div className="profile-view__title">
        <h3>User Profile</h3>
      </div>
      <div className="profile-view__details-container">
        <div className="profile-view__details1">
          <p>
            <b>First Name: </b>
            {profileToDisplay && name.firstname}
          </p>
          <p>
            <b>Email: </b>
            {email}
          </p>
          <p>
            <b>Street: </b>
            {profileToDisplay && address.street}
          </p>
          <p>
            <b>City: </b>
            {profileToDisplay && address.city}
          </p>
        </div>
        <div className="profile-view__details2">
          <p>
            <b>Last Name: </b>
            {profileToDisplay && name.lastname}
          </p>
          <p>
            <b>Phone: </b> {phone}
          </p>
          <p>
            <b>Number: </b>
            {profileToDisplay && address.number}
          </p>
          <p>
            <b>Zip Code: </b>
            {profileToDisplay && address.zipcode}
          </p>
        </div>
      </div>
      <div className="profile-view__button-container">
        <CustomButton
          type="primary"
          name="Logout"
          onClick={onClick}
        />
      </div>
    </div>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    phone: PropTypes.number.isRequired,
  }),
};

export default Profile;
