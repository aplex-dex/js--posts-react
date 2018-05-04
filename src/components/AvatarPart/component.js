import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'material-ui/Avatar';
import { CardHeader } from 'material-ui/Card';

const AvatarPart = ({ classes, action, subheader, userName }) => (
  <CardHeader
    avatar={
      <Avatar aria-label="Recipe" className={classes.avatar}>
        {userName[0]}
      </Avatar>
    }
    action={action}
    title={userName}
    subheader={subheader}
  />
);

AvatarPart.propTypes = {
  classes: PropTypes.object.isRequired,
  action: PropTypes.node,
  subheader: PropTypes.string,
  userName: PropTypes.string,
};

AvatarPart.defaultProps = {
  subheader: 'September 14, 2016',
  userName: '',
  action: '',
};

export default AvatarPart;
