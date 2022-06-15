import React, { useState } from 'react';
import { MenuItems4 } from './MenuItems/MenuItems4';
import './Dropdown1.css';
import { Link } from 'react-router-dom';

function Dropdown4(props) {
  const [click4, setClick4] = useState(false);

  const handleClick4 = () => setClick4(!click4);

  return (
    <>
      <ul
        // onClick={handleClick}
        onClick={props.onCloseMobileMenu}
        className={click4 ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {MenuItems4.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick4(false)}
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

export default Dropdown4;