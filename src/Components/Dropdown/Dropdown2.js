import React, { useState } from 'react';
import { MenuItems2 } from './MenuItems/MenuItems2';
import './Dropdown1.css';
import { Link } from 'react-router-dom';

function Dropdown2(props) {
  const [click2, setClick2] = useState(false);

  const handleClick2 = () => setClick2(!click2);

  return (
    <>
      <ul
        // onClick={handleClick}
        onClick={props.onCloseMobileMenu}
        className={click2 ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {MenuItems2.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick2(false)}
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

export default Dropdown2;