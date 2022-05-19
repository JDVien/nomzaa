import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, useHistory } from 'react-router-dom';
import { signUp } from '../../store/session';

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(fullname, city, zipcode, email, password, repeatPassword));
      if (data) {
        setErrors(data)
      }

    } else {
      setErrors(["passwords must match"])
    }
  };

  const updateFullname = (e) => {
    setFullname(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updateCity = (e) => {

    setCity(e.target.value);
  }

  const updateZipcode = (e) => {
    setZipcode(e.target.value);
  }

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  const signinButton = (e) => {
    e.preventDefault();
    history.push('/login')
  }

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='top_level_login'>
    <div className='login_container'>
    <div id="nom_auth_logo">
        <img
          id="nomzaa_logo_auth_sm"
          src="/static/images/nomza_logo_dark_lg.png"
          alt="nomzaa logo"
          width="120"
          height="auto"
        />
      </div>
      <div className='login-form-container'>
      <h1>Create Account</h1>
    <form className='login_form' onSubmit={onSignUp}>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div>
        <label>Full name</label>
        <input
          type='text'
          name='fullname'
          onChange={updateFullname}
          value={fullname}
        ></input>
        {/* {errors?.fullname?.map(error => {
          return (<p className="form_error" key={error}>{error}</p>)
        })} */}
      </div>
      <div>
        <label>City</label>
        <input
          type='text'
          name='city'
          onChange={updateCity}
          value={city}
        ></input>
        {/* {errors?.city?.map(error => {
          return (<p className="form_error" key={error}>{error}</p>)
        })} */}
      </div>
      <div>
        <label>Zip Code</label>
        <input
          type='number'
          name='zipcode'
          onChange={updateZipcode}
          value={zipcode}
        ></input>
        {/* {errors?.zipcode?.map(error => {
          return (<p className="form_error" key={error}>{error}</p>)
        })} */}
      </div>
      <div>
        <label>Email</label>
        <input
          type='text'
          name='email'
          onChange={updateEmail}
          value={email}
        ></input>
        {/* {errors?.email?.map(error => {
          return (<p className="form_error" key={error}>{error}</p>)
        })} */}
      </div>
      <div>
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          name='password'
          onChange={updatePassword}
          value={password}
        ></input>
        {/* {errors?.password?.map(error => {
          return (<p className="form_error" key={error}>{error}</p>)
        })} */}
      </div>
      <div>
        <label htmlFor='repeat_password'>Repeat Password</label>
        <input
          type='password'
          name='repeat_password'
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        ></input>
      </div>
      <button type='submit'>Sign Up</button>
    </form>
    <span className='priv_text'>By continuing, you agree to Nomzaa's Conditions of Use and Privacy Notice.</span>
    </div>
    <div className='signup_bttn_container'>
      <span className='new_user_text'>Already have an account?</span>
      <button onClick={signinButton}>Sign In</button>
    </div>
    </div>
  </div>
  );
};

export default SignUpForm;
