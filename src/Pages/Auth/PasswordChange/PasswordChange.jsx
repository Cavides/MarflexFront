import React, { useState } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { changePassword } from '../../../Services/Auth';
import "./changepass.css";

const logo = "https://res.cloudinary.com/ds9rxxr5l/image/upload/v1661626272/imagenes/icoMarflex_zibr1l.png";

function PasswordChange() {
  const { resetToken } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({});
  const profile = JSON.parse(localStorage.getItem('profile'));

  const resetPassword = async () => {
    if (form.password !== form.confirmPassword) {
      Swal.fire({
        title: 'Password and confirm password must match!',
        text: 'Please, check the introduced passwords.',
        icon: 'error',
        confirmButtonText: 'Got it!',
      });
    } else {
      const res = await changePassword(resetToken, form.password);
      if (res.details) {
        if (res.details[0].message.includes('newPassword')) {
          res.details[0].message = `Password needs to be at least 6 characters long and include only alphanumeric!`;
        }
        Swal.fire({
          title: res.details[0].message,
          icon: 'warning',
          confirmButtonText: 'Got it!',
        });
        return;
      }
      Swal.fire({
        title: 'Your password has been changed successfully',
        icon: 'success',
        confirmButtonText: 'Got it!',
      });
      if (profile) {
        navigate(`/profile-settings/${profile.name}`);
      } else {
        navigate(`/login`);
      }
    }
  };

  const handleResetPassword = e => {
    e.preventDefault();
    resetPassword();
  };

  const handleChange = e => {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className='resetPassword'>
      <div className='resetPassword__header'>
        <NavLink to='/'>
          {' '}
          <img
            className='resetPassword__header__logo'
            src={logo}
            alt=''
          />{' '}
        </NavLink>
      </div>
      <form className='resetPassword__form' onSubmit={handleResetPassword}>
        <p>
          <b>Change your password</b>
        </p>

        <span className='resetPassword__label'>New Password</span>
        <input
          className='resetPassword__password '
          type='password'
          name='password'
          placeholder=' Enter the new password *'
          autoComplete='on'
          onChange={handleChange}
        />
        <span className='resetPassword__label'>Confirm your New Password</span>
        <input
          className='resetPassword__password '
          type='password'
          name='confirmPassword'
          placeholder=' Confirm the new password *'
          autoComplete='on'
          onChange={handleChange}
        />
        <button type='submit' className='resetPassword__button'>
          <b>Change Password</b>
        </button>
      </form>
     
    </div>
  );
}
export default PasswordChange;