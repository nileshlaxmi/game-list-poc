import React, { Component } from "react";
import errorIcon from "../../../resources/icons/icon-error.svg";

class RenderInput extends Component {
  static defaultProps = {
    _key: "value",
    label: "",
    error: null,
    value: "",
    isDirty: false,
    placeholder: "",
    disabled: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    };
  }

  onChange = (value) => {
    this.setState({ value }, () => {
      this.props.onChange(value);
    });
  };

  render() {
    const {
      type,
      error,
      placeholder,
      disabled,
      className,
      label,
    } = this.props;
    const { value } = this.state;

    return (
      <>
        {label && <div className="custom-label">{label}</div>}
        <input
          placeholder={placeholder}
          type={type}
          className={className}
          value={value}
          disabled={disabled}
          onChange={(e) => this.onChange(e.target.value)}
        />
        {error && (
          <span className="error-box-wrap">
            <span className="error-box-message">{error}</span>
            <img className="error-box-icon" src={errorIcon} alt="icon" />
          </span>
        )}
      </>
    );
  }
}

export default RenderInput;
