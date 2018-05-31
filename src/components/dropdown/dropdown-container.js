import React from 'react';
import classname from 'classnames';
import PropTypes from 'prop-types';

import Dropdown from './style'

const DropdownContainer = ({title, handleToggle, isCollapsed}) => {
  return (
    <div>
      <p className="dropdown-title">
        <span className="icon-file"></span> {title}
        <a href="#" onClick={handleToggle}>
        <span className={classname(isCollapsed ? "icon-caret-down" : "icon-caret-up")}></span>
        </a>
      </p>
    </div>
  )
}

DropdownContainer.propTypes = {
  title: PropTypes.string,
  handleToggle: PropTypes.func.isRequired,
  isCollapsed: PropTypes.boolean
}

export default DropdownContainer
