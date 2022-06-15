import React, { useState } from 'react';
import { MenuItems1 } from './MenuItems/MenuItems1';
import './Dropdown1.css';
import { Link } from 'react-router-dom';

function Dropdown(props) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        // onClick={handleClick}
        onClick={props.onCloseMobileMenu}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {MenuItems1.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
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

export default Dropdown;
