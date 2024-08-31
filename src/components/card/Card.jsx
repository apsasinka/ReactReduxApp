import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export const Card = () => {
    const navigate = useNavigate();
    const {name, artist} = useParams();

    console.log(name, artist);
    
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
