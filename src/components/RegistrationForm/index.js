// Write your JS code here
import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    isFormSubmitted: false,
    showFirstNameError: false,
    showLastNameError: false,
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  onBlurFirstName = () => {
    const isValidateFirstName = this.validateFirstName()

    this.setState({showFirstNameError: !isValidateFirstName})
  }

  onBlurLastName = () => {
    const isValidateLastName = this.validateLastName()

    this.setState({showLastNameError: !isValidateLastName})
  }

  validateFirstName = () => {
    const {firstName} = this.state

    return firstName !== ''
  }

  validateLastName = () => {
    const {lastName} = this.state

    return lastName !== ''
  }

  onSubmitRegistrationForm = event => {
    event.preventDefault()
    const isValidateFirstName = this.validateFirstName()
    const isValidateLastName = this.validateLastName()

    if (isValidateFirstName && isValidateLastName) {
      this.setState({isFormSubmitted: true})
    } else {
      this.setState({
        showFirstNameError: !isValidateFirstName,
        showLastNameError: !isValidateLastName,
        isFormSubmitted: false,
      })
    }
  }

  renderFirstName = () => {
    const {firstName, showFirstNameError} = this.state
    const className = showFirstNameError
      ? 'error-name-input name-input'
      : 'name-input'

    return (
      <>
        <label className="label-container" htmlFor="first-name">
          FIRST NAME
        </label>
        <input
          type="text"
          className={className}
          id="first-name"
          placeholder="First name"
          value={firstName}
          onChange={this.onChangeFirstName}
          onBlur={this.onBlurFirstName}
        />
      </>
    )
  }

  renderLastName = () => {
    const {lastName, showLastNameError} = this.state
    const className = showLastNameError
      ? 'error-name-input name-input'
      : 'name-input'

    return (
      <>
        <label className="label-container" htmlFor="last-name">
          LAST NAME
        </label>
        <input
          type="text"
          className={className}
          id="last-name"
          placeholder="Last name"
          value={lastName}
          onChange={this.onChangeLastName}
          onBlur={this.onBlurLastName}
        />
      </>
    )
  }

  onRenderApplicationForm = () => {
    const {showFirstNameError, showLastNameError} = this.state
    return (
      <>
        <form className="reg-form" onSubmit={this.onSubmitRegistrationForm}>
          {this.renderFirstName()}
          {showFirstNameError && <p className="error-msg">Required</p>}
          {this.renderLastName()}
          {showLastNameError && <p className="error-msg">Required</p>}
          <div className="div-btn">
            <button className="sub-btn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </>
    )
  }

  onClickSubmitAnotherResponse = () => {
    this.setState(prevState => ({
      isFormSubmitted: !prevState.isFormSubmitted,
      firstName: '',
      lastName: '',
    }))
  }

  onSubmitApplicationForm = () => (
    <div className="successful-submit">
      <img
        className="sub-image"
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
      />
      <p className="submit-text">Submitted Successfully</p>
      <button
        className="another-response-btn"
        type="button"
        onClick={this.onClickSubmitAnotherResponse}
      >
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {isFormSubmitted} = this.state

    return (
      <div className="registration-form-container">
        <h1 className="header">Registration</h1>
        {isFormSubmitted
          ? this.onSubmitApplicationForm()
          : this.onRenderApplicationForm()}
      </div>
    )
  }
}
export default RegistrationForm
