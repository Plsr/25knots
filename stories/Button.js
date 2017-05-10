import React from 'react';

const baseStyles = {
  borderRadius: 3,
  cursor: 'pointer',
  fontSize: 15,
  padding: '3px 10px',
  margin: 10
}

const regularStyles = {
  background: 'white',
  color: '#333',
  border: '1px solid #ddd'
}

const dangerStyles = {
  background: '#f44242',
  color: 'white',
  border:'1px solid #bc2727'
}

const getStylesForButtonRole = ({role}) => {
  switch (role) {
    case 'danger':
      return Object.assign(baseStyles, dangerStyles)
      break;
    default:
      return Object.assign(baseStyles, regularStyles)
  }
}

const Button = ({ children, onClick, role }) => (
  <button
    style={getStylesForButtonRole({role})}
    onClick={onClick}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func,
};

export default Button;
