import React from 'react';
import loader from '../../assets/Hourglass.gif'

const Loader = () => (
  <div className="flex items-center justify-center h-screen">
    <img src={loader} alt="" className='w-14' />
  </div>
);

export default Loader;