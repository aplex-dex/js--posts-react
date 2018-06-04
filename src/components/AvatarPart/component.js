import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';

class AvatarPart extends PureComponent {
  render() {
    const { classes, action, subheader, user } = this.props;
    const { name } = user;

    return (
      <CardHeader
        avatar={
          <Avatar aria-label="Recipe" className={classes.avatar}>
            {name && name[0]}
          </Avatar>
        }
        action={action}
        title={name}
        subheader={subheader}
      />
    );
  }
}

AvatarPart.propTypes = {
  classes: PropTypes.object.isRequired,
  action: PropTypes.node,
  subheader: PropTypes.string,
  user: PropTypes.object,
};

AvatarPart.defaultProps = {
  subheader: 'September 14, 2016',
  user: {},
  action: '',
};

export default AvatarPart;
