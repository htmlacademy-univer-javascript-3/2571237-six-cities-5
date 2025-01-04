import { Helmet } from 'react-helmet-async';
import { FormEvent } from 'react';
import { loginAction } from '../../store/api-actions';
import { useAppDispatch } from '../../hooks';
import HeaderLogo from '../../components/header/header-logo';

export default function LoginPage(){
  const dispatch = useAppDispatch();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const formData = new FormData(evt.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    if (email && password){
      dispatch(loginAction({login: email, password}));
    }
  };

  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>6 cities - login</title>
      </Helmet>
      <HeaderLogo />

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={handleSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input" type="email" name="email" placeholder="Email" required/>
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input" type="password" name="password" placeholder="Password" required/>
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
