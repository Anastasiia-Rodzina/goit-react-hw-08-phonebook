import { useDispatch } from "react-redux";
import css from './register-form.module.css';
import { register } from '../../redux/auth/auth-operations';
// import { useState } from "react";

// const INITIAL_STATE = {
//   name: "",
//   email: "",
//   password: "",
// };

export const RegisterForm = () => {


    const dispatch = useDispatch();
  
    const handleSubmit = e => {
      e.preventDefault();
      const form = e.currentTarget;
      
       dispatch (register({
          name: form.elements.name.value,
          email: form.elements.email.value,
          password: form.elements.password.value,
        }))
        form.reset();
    };

  
    return (
      <form className={css.form}  onSubmit={handleSubmit} autoComplete="off">
        <label className={css.label}>
          Username
          <input className={css.input} type="text" name="name" />
        </label>
        <label className={css.label}>
          Email
          <input className={css.input} type="email" name="email" />
        </label>
        <label className={css.label}>
          Password
          <input className={css.input} type="password" name="password" />
        </label>
        <button className={css.btn} type="submit">Register</button>
      </form>
    );
  };