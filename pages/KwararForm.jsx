import React from "react";
import validate from "validate.js";
import Select from "react-select";
import ReactCountryFlag from "react-country-flag";
import countryList from "react-select-country-list";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { myData } from "@/components/ui/CourseData";
import Swal from "sweetalert2";
import confetti from "canvas-confetti"; // Import confetti
import DatePicker from "react-datepicker"; // Import DatePicker
import "react-datepicker/dist/react-datepicker.css"; // Import styles for DatePicker

class KwararForm extends React.Component {
  constructor(props) {
    super(props);
    this.options = countryList().getData();
    this.state = {
      startDate: new Date(),
      country: "",
      region: "",
      options: this.options,
      countryVal: null,
      phone: "",
      complete: "",
      displayComplete: "none",
      name: "",
      lastName: "",
      email: "",
      address: "",
      dateOfBirth: new Date(), // Add state for date of birth
    };

    this.flagsRef = React.createRef();
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleValidateName = this.handleValidateName.bind(this);
    this.handleValidateLastName = this.handleValidateLastName.bind(this);
    this.handlerValidateEmail = this.handlerValidateEmail.bind(this);
    this.handlerValidateAddress = this.handlerValidateAddress.bind(this);
    this.handlerComplete = this.handlerComplete.bind(this);
    this.handlerReset = this.handlerReset.bind(this);
    this.completeForm = this.completeForm.bind(this);
  }

  changeHandler = (countryVal) => {
    this.setState({ countryVal });
  };

  handleCourseChange = (courseOfInterest) => {
    this.setState({ courseOfInterest });
  };

  handleChangeDate = (date) => {
    this.setState({ startDate: date });
  };

  handleValidateName = (e) => {
    const name = e.target.value;
    this.setState({ name });
    const isValid = /^[a-zA-ZñÑ]+$/.test(name);
    this.nameCircle.className = isValid ? "circleValidate" : "circleInvalidate";
    this.completeForm();
  };

  handleValidateLastName = (e) => {
    const lastName = e.target.value;
    this.setState({ lastName });
    const isValid = /^[a-zA-ZñÑ]+$/.test(lastName);
    this.lastNameCircle.className = isValid
      ? "circleValidate"
      : "circleInvalidate";
    this.completeForm();
  };

  handlerValidateEmail = (e) => {
    const email = e.target.value;
    this.setState({ email });
    const isValid = validate.validators.email.PATTERN.test(email);
    this.emailCircle.className = isValid
      ? "circleValidate"
      : "circleInvalidate";
    this.completeForm();
  };

  handlerValidateAddress = (e) => {
    const address = e.target.value;
    this.setState({ address });
    const isValid = !address.match(/[*-+]/);
    this.addressCircle.className = isValid
      ? "circleValidate"
      : "circleInvalidate";
    this.completeForm();
  };

  // Updated handlerComplete method with SweetAlert and confetti
  handlerComplete = () => {
    if (this.state.countryVal && this.state.complete && this.state.phone) {
      this.setState({ displayComplete: "flex" });
      window.scrollTo({ top: this.complete.offsetTop, behavior: "smooth" });

      // Show SweetAlert and trigger confetti when the popup opens
      Swal.fire({
        title: "Success!",
        text: "The form has been successfully completed!",
        icon: "success",
        showConfirmButton: false,
        willClose: () => {
          // Trigger confetti effect
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
          });
        },
        didOpen: () => {
          // Start confetti when SweetAlert is shown
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
          });
        },
      }).then(() => {
        // Redirect to the home page after the alert is closed
        window.location.href = "/"; // Redirect to home page
      });
    } else {
      Swal.fire({
        title: "Oops!",
        text: "You have not yet completed the form.",
        icon: "error",
        showConfirmButton: true,
      });
    }
  };

  handlerReset = () => {
    this.setState({
      startDate: new Date(),
      countryVal: null,
      phone: "",
      complete: false,
      displayComplete: "none",
      name: "",
      lastName: "",
      email: "",
      address: "",
      courseOfInterest: null,
      dateOfBirth: new Date(), // Reset date of birth
    });
    this.nameCircle.className = "";
    this.lastNameCircle.className = "";
    this.emailCircle.className = "";
    this.addressCircle.className = "";
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  completeForm = () => {
    const isComplete =
      this.nameCircle.className === "circleValidate" &&
      this.lastNameCircle.className === "circleValidate" &&
      this.emailCircle.className === "circleValidate" &&
      this.addressCircle.className === "circleValidate" &&
      this.state.courseOfInterest;

    this.setState({ complete: isComplete });
  };

  render() {
    const { country, region } = this.state;
    return (
      <div className="App" onChange={this.completeForm}>
        <div
          id="complete"
          style={{ display: this.state.displayComplete }}
          ref={(div) => (this.complete = div)}
        >
          <p className="whiteLetter">
            Form submitted successfully
          </p>
          <button className="buttons" onClick={this.handlerReset}>
            Reset
          </button>
        </div>
        <h1 id="title" className="blackLetter">
          Form
        </h1>
        <p id="description" className="blackLetter">
          Accurately place your data
        </p>
        <div className="perfectCentered">
          <div className="hero pt-[74px]">
            
            <div className="form-portion lg:w-[53%] sm:w-[70%] w-[90%] mx-auto lg:border py-7 mb-20 rounded-xl">
            <h1 className="lg:text-4xl sm:text-4xl text-3xl text-center">
              Course Registration Form
            </h1>
              <form className="p-5 mt-5" onSubmit={(e) => e.preventDefault()}>
                <div className="flex md:flex-row flex-col sm:gap-2 gap-0 justify-evenly lg:mb-8 sm:mb-7">
                  <div id="nameCircle" ref={(div) => (this.nameCircle = div)} />
                  <div>
                    <div className="mb-3">
                      <label>First name</label>
                    </div>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      maxLength="30"
                      value={this.state.name}
                      onChange={this.handleValidateName}
                      required
                      placeholder="First Name"
                      className="md:w-[310px] md:h-[37px] w-[99%] border border-neutral-300 px-4 py-1 md:mb-0 mb-7 mx-auto rounded-md focus:outline-none"
                    />
                  </div>
                  <div
                    id="lastNameCircle"
                    ref={(div) => (this.lastNameCircle = div)}
                  />
                  <div>
                    <div className="mb-3">
                      <label>Last name</label>
                    </div>

                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      maxLength="30"
                      value={this.state.lastName}
                      onChange={this.handleValidateLastName}
                      required
                      placeholder="Last Name"
                      className="lg:w-[310px] lg:h-[37px] sm:w-[310px] sm:h-[37px] border border-neutral-300 w-[99%] px-4 py-1 md:mb-0 mb-7 mx-auto rounded-md focus:outline-none"
                    />
                  </div>
                </div>
                <div className="flex md:flex-row flex-col sm:gap-2 gap-0 justify-evenly lg:mb-8 sm:mb-7">
                  <div
                    id="emailCircle"
                    ref={(div) => (this.emailCircle = div)}
                  />
                  <div className="lg:mx-3">
                    <div className="mb-3">
                      <label>Email Address</label>
                    </div>

                    <input
                      type="email"
                      name="email"
                      id="email"
                      maxLength="30"
                      value={this.state.email}
                      onChange={this.handlerValidateEmail}
                      required
                      placeholder="Email"
                      className="md:w-[310px] md:h-[37px] w-[99%] border border-neutral-300 px-4 py-1 md:mb-0 mb-7 mx-auto rounded-md focus:outline-none"
                    />
                  </div>

                  <div className="lg:mx-2 sm:mx-2">
                    <div className="mb-3">
                      <label>Preffered Course</label>
                    </div>

                    <select
                      id="courses"
                      className="bg-transparent text-gray-900 dark:text-gray-500 border border-neutral-300 text-sm rounded-lg focus:outline-none block md:w-[310px] md:h-[37px] w-[99%] mx-auto p-2.5"
                      onChange={(e) => this.handleCourseChange(e.target.value)}
                    >
                      {myData.map((item) => (
                        <option key={item.id} value={item.value}>
                          {item.text}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex md:flex-row flex-col sm:gap-2 gap-0 justify-evenly lg:mb-8 sm:mb-7">
                  <div
                    id="addressCircle"
                    ref={(div) => (this.addressCircle = div)}
                  />
                  <div>
                    <div className="mb-3 mt-5 sm:mt-0 lg:mt-0">
                      <label>Address/Location</label>
                    </div>

                    <input
                      type="text"
                      name="address"
                      id="address"
                      maxLength="30"
                      value={this.state.address}
                      onChange={this.handlerValidateAddress}
                      required
                      placeholder="Address"
                      className="md:w-[310px] md:h-[37px] w-[99%] border border-neutral-300 px-4 py-1 md:mb-0 mb-7 mx-auto rounded-md focus:outline-none"
                    />
                  </div>
                  <div
                    id="countryCircle"
                    ref={(div) => (this.countryCircle = div)}
                  />
                  <div>
                    <div className="mb-3">
                      <label>Country</label>
                    </div>

                    <Select
                      options={this.options}
                      onChange={this.changeHandler}
                      placeholder="Select Country"
                      className="md:w-[310px] w-[99%] mx-auto lg:mb-0 sm:mb-0 mb-5"
                    />
                  </div>
                </div>

                <div className="flex md:flex-row flex-col sm:gap-2 gap-0 justify-evenly lg:mb-8 sm:mb-7 lg:mx-3">
                  {/* Date of Birth Field */}
                  <div className="lg:mx-2 sm:mx-2">
                    <label htmlFor="dob" className="block mb-3">
                      Date of Birth
                    </label>
                    <DatePicker
                      selected={this.state.dateOfBirth}
                      onChange={(date) => this.setState({ dateOfBirth: date })}
                      className="md:w-[310px] md:h-[37px] w-[100%] mx-auto lg:px-4 sm:px-4 px-20 py-2 rounded-md appearance-none border text-heading text-md focus:outline-none"
                      dateFormat="MMMM d, yyyy"
                      showYearDropdown
                      scrollableYearDropdown
                      yearDropdownItemNumber={100}
                      placeholderText="Select Date"
                    />
                  </div>
                  <div
                    id="phoneCircle"
                    ref={(div) => (this.phoneCircle = div)}
                  />
                  <div className="marginBottom">
                    <div className="mb-3">
                      <label id="number-label" htmlFor="number">
                        Phone Number
                      </label>
                    </div>
                    <PhoneInput
                      country={"us"}
                      className="marginBottom "
                      value={this.state.phone}
                      onChange={(phone) => this.setState({ phone })}
                    />
                  </div>
                </div>

                <div className="btn my-8 items-center">
                  <button
                    type="submit"
                    className="px-4 lg:w-[96%] mt-5 sm:w-[633px] w-[100%] lg:mx-4 sm:mx-2 py-2 mx-auto rounded-md text-center justify-center text-[16px] bg-gray-600 text-white hover:text-white hover:bg-gray-700 hover:shadow-xl border-transparent"
                    onClick={this.handlerComplete}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default KwararForm;
