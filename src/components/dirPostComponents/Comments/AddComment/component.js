import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Avatar from 'material-ui/Avatar';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';

class AddComment extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '', isFocusOnField: false };
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onChange = this.onChange.bind(this);
    this.clearText = this.clearText.bind(this);
  }
  onFocus() {
    this.setState(st => ({ ...st, isFocusOnField: true }));
  }
  onBlur() {
    this.setState(prevState => ({ ...prevState, isFocusOnField: false }));
  }
  clearText() {
    this.setState(prevState => ({ ...prevState, text: '' }));
  }
  onChange({ target: { value } }) {
    this.setState(prevState => ({ ...prevState, text: value }));
  }
  render() {
    const { classes, onSubmit } = this.props;
    const { text, isFocusOnField } = this.state;
    const doneColor = text ? 'primary' : 'action';
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
