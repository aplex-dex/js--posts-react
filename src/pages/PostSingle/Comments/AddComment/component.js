import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';

class AddComment extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '', isFocusOnField: false };
  }

  onFocus = () => {
    this.setState({ isFocusOnField: true });
  };

  onBlur = () => {
    this.setState({ isFocusOnField: false });
  };

  clearText = () => {
    this.setState({ text: '' });
  };

  onChange = ({ target: { value } }) => {
    this.setState({ text: value });
  };

  render() {
    const { classes, onSubmit } = this.props;
    const { text, isFocusOnField } = this.state;
    const doneColor = text ? 'primary' : 'default';
    const isShowButtons = isFocusOnField || text;
    const buttons = isShowButtons && (
      <div className={classes.buttons}>
        <IconButton
          className={classes.close}
          color="primary"
          onClick={this.clearText}
        >
          <CloseIcon />
        </IconButton>
        <IconButton
          className={classes.done}
          color={doneColor}
          onClick={() => {
            onSubmit({ name: 'Adelle Charles', body: text });
            this.clearText();
          }}
          disabled={!text}
        >
          <DoneIcon />
        </IconButton>
      </div>
    );

    return (
      <div className={classes.root}>
        <Avatar
          className={classes.avatar}
          alt="Adelle Charles"
          src="https://picsum.photos/1366/768/?random"
        />
        <TextField
          id="textarea"
          placeholder="Добавьте комментарий..."
          multiline
          margin="normal"
          className={classes.textFeeld}
          value={text}
          onChange={this.onChange}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
        />
        {buttons}
      </div>
    );
  }
}

AddComment.propTypes = {
  classes: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default AddComment;
