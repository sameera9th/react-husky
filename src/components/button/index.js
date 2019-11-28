import React from 'react'
import PropTypes from 'prop-types'
import './button.css'

const Button = ({ label }) => {
  return (
    <div data-testid="button" className="button-style">
      {label}
    </div>
  )
}

Button.propTypes = {
  label: PropTypes.string
}

export default Button
