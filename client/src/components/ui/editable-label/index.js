import React from 'react'
import merge from 'mini-dash/merge'
import classNames from 'classnames'
import { autobind } from 'core-decorators'

export class EditableLabel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editing: false,
      editedText: props.text,
      text: props.text,
    }
  }

  @autobind onChange() {
    this.setState(merge(this.state, { editedText: this.textInput.value }))
  }

  @autobind onBlur() {
    this.setState(merge(this.state, { editing: false, text: this.state.editedText }))
  }

  @autobind onKeyPress(e) {
    if (e.key === 'Enter') {
      this.setState(merge(this.state, { editing: false, text: this.state.editedText }))
    }
  }

  @autobind onClick() {
    this.setState(merge(this.state, { editing: true }))
  }

  render() {
    const {inputClass, labelClass} = this.props
    const {editing, text, editedText} = this.state
    const {onChange, onBlur, onKeyPress, onClick} = this
    const saveRef = input => {
      this.textInput = input
    }

    if (editing) {
      return <input
        ref={saveRef}
        className={classNames(inputClass)}
        type="text"
        value={editedText}
        onChange={onChange}
        onBlur={onBlur}
        onKeyPress={onKeyPress}
        autoFocus />
    }
    return <span className={classNames(labelClass)} onClick={onClick}>{text}</span>
  }
}
