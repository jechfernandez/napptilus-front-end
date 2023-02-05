import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/404/NotFound.scss';


const NotFound = () => {
  return (
    <div>
        <Link to="/">
            <button>Go back</button>
        </Link>
        <p>Not found page</p>
    </div>
  );
};

export default NotFound;