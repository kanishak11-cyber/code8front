import React, { useState } from 'react';
import { MenuItems3 } from './MenuItems/MenuItems3';
import './Dropdown1.css';
import { Link } from 'react-router-dom';

function Dropdown3(props) {
  const [click3, setClick3] = useState(false);

  const handleClick3 = () => setClick3(!click3);

  return (
    <>
      <ul
        // onClick={handleClick}
        onClick={props.onCloseMobileMenu}
        className={click3 ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {MenuItems3.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick3(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown3;