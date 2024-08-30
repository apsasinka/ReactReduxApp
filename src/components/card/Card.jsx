import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Card = () => {
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate('/');
    }
    
  return (
    <>
    <button className='btn' onClick={handleRedirect}>На главную</button>
        <div>Card</div>
    </>
  )
}
