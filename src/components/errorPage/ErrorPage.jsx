import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate('/');
    }

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p><i>Page not found</i></p>
      <button className='btn' onClick={handleRedirect}>На главную</button>
    </div>
  );
}

export default ErrorPage;
