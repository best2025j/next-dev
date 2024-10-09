import React, { useState } from "react";
import validator from "validator"; // Make sure to import the validator library
import ButtonWhite from "@/components/buttons/ButtonWhite";

export default function Registration() {
  // State for holding validation errors
  const [errors, setErrors] = useState({});
  const currentYear = new Date().getFullYear();

  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    address: "",
    city: "",
    stateProvince: "",
    zipCode: "",
    course: "",
    dateOfBirth: "", // New field for date of birth
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validate = () => {
    let tempErrors = {};

    // Name validation
    if (!formData.firstName) tempErrors.firstName = "First name is required.";
    if (!formData.middleName)
      tempErrors.middleName = "Middle name is required.";

    if (!formData.lastName) tempErrors.lastName = "Last name is required.";

    // Email validation
    if (!formData.email || !validator.isEmail(formData.email)) {
      tempErrors.email = "Valid email is required.";
    }

    // Mobile number validation
    if (
      !formData.mobileNumber ||
      !validator.isMobilePhone(formData.mobileNumber)
    ) {
      tempErrors.mobileNumber = "Valid mobile number is required.";
    }

    // Address validation
    if (!formData.address) tempErrors.address = "Address is required.";
    if (!formData.city) tempErrors.city = "City name is required.";
    if (!formData.stateProvince)
      tempErrors.stateProvince = "State/Province is required.";
    if (!formData.zipCode) tempErrors.zipCode = "Zip code is required.";

    // Date of birth validation
    if (!formData.dateOfBirth) {
      tempErrors.dateOfBirth = "Date of birth is required";
    } else {
      const selectedDate = new Date(formData.dateOfBirth);
      if (isNaN(selectedDate.getTime())) {
        tempErrors.dateOfBirth = "Invalid date selected.";
      }
    }

    setErrors(tempErrors);
    console.log("Form Data:", formData);

    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await fetch("/api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const result = await response.json();
        if (result.success) {
          alert("Registration successful");
          console.log("Form submitted successfully:", result.data);
        } else {
          alert("Registration failed");
          console.error("Form submission failed:", result.message);
        }
      } catch (error) {
        alert("Something went wrong");
      }
    } else {
      alert("Please fix the errors in the form.");
    }
  };

  return (
    <div className="py-20 w-full h-full">
      <div className="h-full flex flex-col justify-center mt-10 items-center w-full md:max-w-3xl mx-auto md:border rounded-2xl shadow">
        <div className="flex-col flex py-4">
          <h1 className="font-black text-3xl capitalize text-center">
            registration Form
          </h1>
          <p className="">Fill out the form carefully for registration</p>
        </div>

        <form className="py-4 w-full px-6" onSubmit={handleSubmit}>
          <h1 className="font-medium text-xl">Student Name</h1>
          <div className="md:space-x-4 flex flex-col md:flex-row space-y-2 pb-2 md:space-y-0">
            <div className="flex flex-col space-y-1">
              <label htmlFor="firstName" className="text-slate-500 text-sm">
                first Name
              </label>
              <input
                className="outline-none capitalize py-2 border rounded-md pl-2 dark:bg-transparent dark:text-white text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500yarn dev  "
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm">{errors.firstName}</p>
              )}
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="middleName" className="text-slate-500 text-sm">
                Middle Name
              </label>
              <input
                className="outline-none capitalize py-2 border rounded-md pl-2 dark:bg-transparent dark:text-white text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500yarn dev  "
                type="text"
                name="middleName"
                value={formData.middleName}
                onChange={handleChange}
              />{" "}
              {errors.middleName && (
                <p className="text-red-500 text-sm">{errors.middleName}</p>
              )}
            </div>

            <div className="flex flex-col space-y-1">
              <label htmlFor="lastName" className="text-slate-500 text-sm">
                last Name
              </label>
              <input
                className="outline-none capitalize py-2 border rounded-md pl-2 dark:bg-transparent dark:text-white text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500yarn dev  "
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />{" "}
              {errors.lastName && (
                <p className="text-red-500 text-sm">{errors.lastName}</p>
              )}
            </div>
          </div>

          {/*  */}
          <div className="py-4">
            <div className="w-full md:space-x-3 py-2 flex ">
              <div className="flex flex-col space-y-1">
                <label htmlFor="dateOfBirth" className="text-slate-500 text-sm">
                  Date of Birth
                </label>
                <input
                  className="outline-none capitalize py-2 border rounded-md pl-2 dark:bg-transparent dark:text-white text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500yarn dev  "
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />{" "}
                {errors.dateOfBirth && (
                  <p className="text-red-500 text-sm">{errors.dateOfBirth}</p>
                )}
              </div>

              {/* sex */}
              <div className="w-56">
                <label
                  htmlFor="sex"
                  className="block text-sm font-medium text-gray-700"
                >
                  Sex
                </label>
                {/* sex */}
                <select
                  required
                  className="mt-1 block w-full p-2 border border-gray-300 bg-white dark:bg-black dark:text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="0" >please select</option>
                  <option value="1">male</option>
                  <option value="2">female</option>
                </select>
              </div>
            </div>
          </div>
          {/*  */}
          <h1 className="font-medium text-xl"> Address</h1>
          <div className="flex flex-col space-y-1">
            <label htmlFor="lastName" className="text-slate-500 text-sm">
              Street Address
            </label>
            <input
              className="outline-none py-2 border rounded-md pl-2 dark:bg-transparent dark:text-white text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500yarn dev  "
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />{" "}
            {errors.address && (
              <p className="text-red-500 text-sm">{errors.address}</p>
            )}
          </div>

          <div className="gap-4 py-4 grid md:grid-cols-2">
            <div className="flex flex-col space-y-1">
              <label htmlFor="firstName" className="text-slate-500 text-sm">
                City
              </label>
              <input
                className="outline-none capitalize py-2 border rounded-md pl-2 dark:bg-transparent dark:text-white text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500yarn dev  "
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
              />{" "}
              {errors.city && (
                <p className="text-red-500 text-sm">{errors.city}</p>
              )}
            </div>

            <div className="flex flex-col space-y-1">
              <label htmlFor="middleName" className="text-slate-500 text-sm">
                State / Province
              </label>
              <input
                className="outline-none capitalize py-2 border rounded-md pl-2 dark:bg-transparent dark:text-white text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500yarn dev  "
                type="text"
                name="stateProvince"
                value={formData.stateProvince}
                onChange={handleChange}
              />{" "}
              {errors.stateProvince && (
                <p className="text-red-500 text-sm">{errors.stateProvince}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col space-y-1">
            <label htmlFor="lastName" className="text-slate-500 text-sm">
              Postal / Zip Code
            </label>
            <input
              className="outline-none py-2 border rounded-md pl-2 dark:bg-transparent dark:text-white text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500yarn dev  "
              type="text"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
            />{" "}
            {errors.zipCode && (
              <p className="text-red-500 text-sm">{errors.zipCode}</p>
            )}
          </div>

          <div className="gap-4 py-4 grid md:grid-cols-2">
            <div className="flex flex-col space-y-1">
              <label htmlFor="lastName" className="text-slate-500 text-sm">
                Student E-mail
              </label>
              <input
                placeholder="example@example.com..."
                className="outline-none py-2 border rounded-md pl-2 dark:bg-transparent dark:text-white text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500yarn dev  "
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            <div className="flex flex-col space-y-1">
              <label htmlFor="lastName" className="text-slate-500 text-sm">
                Mobile Number
              </label>
              <input
                placeholder="(000) 000 0000"
                className="outline-none py-2 border rounded-md pl-2 dark:bg-transparent dark:text-white text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                type="text"
                name="mobileNumber" // Corrected this line
                value={formData.mobileNumber}
                onChange={handleChange}
              />
              {errors.mobileNumber && (
                <p className="text-red-500 text-sm">{errors.mobileNumber}</p>
              )}
            </div>

            <div className="flex flex-col space-y-1">
              <label htmlFor="lastName" className="text-slate-500 text-sm">
                Courses
              </label>
              <select
                required
                className="mt-1 block w-full p-2 border border-gray-300 bg-white dark:bg-black dark:text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">Courses</option>
                <option value="1">Web Development</option>
                <option value="2">Design Animation</option>
                <option value="3">UI-UX</option>
                <option value="4">Data Analytics</option>
                <option value="5">Cyber Security</option>
                <option value="6">VA-RemoteJobs</option>
                <option value="7">Digital Marketing</option>
                <option value="8">Content Writing</option>
              </select>
            </div>
          </div>
          {/* Submit Button */}
          <div className="text-center py-4">
            <ButtonWhite label="submit" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
}
