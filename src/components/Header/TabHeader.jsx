import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { ThemeContext } from '../../context/ThemeContext';

const TabHeader = ({ name }) => {
  const { activeTab, handleSetActiveTab } = useContext(ThemeContext);

  return (
    <li className="nav-item">
      <Link
        to={'/' + name}
        className={classNames('nav-link link-light', {
          active: activeTab.tab === name
        })}
        onClick={() => handleSetActiveTab(name)}
      >
        {name.toLocaleUpperCase()}
      </Link>
    </li>
  );
};

export default TabHeader;