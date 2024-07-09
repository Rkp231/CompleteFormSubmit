import "./App.css";
import { React, useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    gender: "male",
    subjects: ["english"], // Default subject
    profilePic: null,
    url: "",
    selectedOption: "",
    about: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  const handleInput = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]:
        e.target.type === "file" ? e.target.files[0] : e.target.value,
    }));
  };
  const handleSubjectChange = (sub) => {
    setFormData((prev) => ({
      ...prev,
      subjects: prev.subjects.includes(sub)
        ? prev.subjects.filter((subject) => subject !== sub)
        : [...prev.subjects, sub],
      //or if initially the subject:[] i.e. no default value
      // then,
      // setFormData((prev) => ({
      //   ...prev,
      //   subjects: prev.subjects ? [...prev.subjects, sub] : [sub],
      // }));
    }));
  };

  const handleReset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      contact: "",
      gender: "male",
      subjects: ["english"], // Reset to default subject
      profilePic: null,
      url: "",
      selectedOption: "",
      about: "",
    });
  };

  return (
    <div className="App">
      <h1>Form in React</h1>
      <fieldset>
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstname">First Name*</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={formData.firstName}
            onChange={handleInput}
            placeholder="Enter First Name"
            required
          />
          <label htmlFor="lastname">Last Name*</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={formData.lastName}
            onChange={handleInput}
            placeholder="Enter Last Name"
            required
          />
          <label htmlFor="email">Enter Email* </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleInput}
            placeholder="Enter email"
            required
          />
          <label htmlFor="tel">Contact*</label>
          <input
            type="tel"
            name="contact"
            id="contact"
            value={formData.contact}
            onChange={handleInput}
            placeholder="Enter Mobile number"
            required
          />
          <label>Gender*</label>
          <div className="gender-container">
            <label className="gender-option">
              <input
                type="radio"
                name="gender"
                value="male"
                id="male"
                checked={formData.gender === "male"}
                onChange={handleInput}
              />
              Male
            </label>
            <label className="gender-option">
              <input
                type="radio"
                name="gender"
                value="female"
                id="female"
                checked={formData.gender === "female"}
                onChange={handleInput}
              />
              Female
            </label>
            <label className="gender-option">
              <input
                type="radio"
                name="gender"
                value="other"
                id="other"
                checked={formData.gender === "other"}
                onChange={handleInput}
              />
              Other
            </label>
          </div>
          <label>Your best Subject</label>
          <div className="subject-container">
            {["english", "maths", "physics"].map((subject, index) => (
              <label key={index} className="subject-option">
                <input
                  type="checkbox"
                  name="subjects"
                  id={subject}
                  checked={formData.subjects.includes(subject)}
                  onChange={() => handleSubjectChange(subject)}
                />
                {subject.charAt(0).toUpperCase() + subject.slice(1)}
              </label>
            ))}
          </div>
          <label>Upload Profile Picture*</label>
          <div className="profile-pic-container">
            <input
              type="file"
              name="profilePic"
              id="profilePic"
              accept="image/jpeg, image/png"
              onChange={handleInput}
              className="profile-pic-input"
            />
            {formData.profilePic && (
              <div style={{ marginTop: 10 }}>
                <img
                  src={URL.createObjectURL(formData.profilePic)}
                  alt="Profile"
                  width="100"
                  height="100"
                />
              </div>
            )}
          </div>
          <label htmlFor="url">Enter URL(GitHub/Portfolio)*</label>
          <input
            type="url"
            name="url"
            id="url"
            value={formData.url}
            onChange={handleInput}
            placeholder="Enter URL"
            required
          />
          <label>Select your Expertise</label>
          <select
            name="selectedOption"
            id="selectedOption"
            value={formData.selectedOption}
            onChange={handleInput}
          >
            <option value="" disabled>
              Select your Ans
            </option>
            <optgroup label="Beginners">
              <option value="1">HTML</option>
              <option value="2">CSS</option>
              <option value="3">JavaScript</option>
            </optgroup>
            <optgroup label="Advanced">
              <option value="4">React</option>
              <option value="5">Node</option>
              <option value="6">Express</option>
              <option value="7">MongoDB</option>
            </optgroup>
          </select>
          <label htmlFor="about">About</label>
          <textarea
            name="about"
            id="about"
            cols="30"
            rows="10"
            value={formData.about}
            onChange={handleInput}
            placeholder="About yourself"
            required
          ></textarea>
          <button type="button" onClick={handleReset}>
            Reset
          </button>
          <button type="submit">Submit</button>
        </form>
      </fieldset>
    </div>
  );
}

export default App;
