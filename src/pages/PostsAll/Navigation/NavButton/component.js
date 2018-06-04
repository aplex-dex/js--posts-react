import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import classNames from 'classnames';

const NavButton = ({ classes, isVisable, isLeftButton, onClick }) => {
  return (
    isVisable && (
      <Button
        className={classNames({ [classes.leftButton]: isLeftButton })}
        variant="fab"
        color="primary"
        onClick={onClick}
      >
        <Icon>send</Icon>
      </Button>
    )
  );
};

NavButton.propTypes = {
  classes: PropTypes.object.isRequired,
  isVisable: PropTypes.bool,
  isLeftButton: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

NavButton.defaultProps = {
  isVisable: true,
  isLeftButton: false,
  onClick: () => {},
};

export default NavButton;
