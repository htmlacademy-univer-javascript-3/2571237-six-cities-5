import { FormEvent, useEffect, useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { loginAction } from '../../store/api-actions';
import { validatePassword } from './password-validation';

const SUBMIT_DISABLED_TIMEOUT = 5000;

export default function LoginForm() {
  const [submitDisabled, setSubmitDisabled] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!submitDisabled) {
      return;
    }

    const timerId = setTimeout(
      () => setSubmitDisabled(false),
      SUBMIT_DISABLED_TIMEOUT
    );

    return () => clearTimeout(timerId);
  }, [submitDisabled]);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setSubmitDisabled(true);

    const formData = new FormData(evt.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    if (!validatePassword(password)) {
      return;
    }

    if (email && password) {
      dispatch(loginAction({ login: email, password }));
    }
  };

  return (
    <section className="login">
      <h1 className="login__title">Sign in</h1>
      <form
        className="login__form form"
        action="#"
        method="post"
        onSubmit={handleSubmit}
      >
        <div className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">E-mail</label>
          <input
            className="login__input form__input"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">Password</label>
          <input
            className="login__input form__input"
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </div>
        <button
          className="login__submit form__submit button"
          type="submit"
          disabled={submitDisabled}
        >
          Sign in
        </button>
      </form>
    </section>
  );
}
