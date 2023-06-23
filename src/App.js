import { useState } from "react";
import "./App.css";

const initialFormState = {
  name: "",
  email: "",
  password: "",
};

const App = () => {
  const [form, setForm] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Simulating form submission

      submitForm();
    }
  };

  const validateForm = () => {
    const validationErrors = {};

    if (!form.name) {
      validationErrors.name = "Name is required";
    } else if (!/^[a-zA-Z]+$/.test(form.name)) {
      validationErrors.name = "Name is Invalid";
    }

    if (!form.email) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email) || !form.email.includes("@")) {
      validationErrors.email = "Email is invalid";
    }

    if (!form.password) {
      validationErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      validationErrors.password =
        "Password should be at least 6 characters long";
    } else if (!/\d/.test(form.password) || !/[a-zA-Z]/.test(form.password)) {
      validationErrors.password =
        "Password should include both letters and numbers";
    }

    return validationErrors;
  };

  const submitForm = () => {
    // For example, send the form data to an API
    // Reset the form and show success message
    setForm(initialFormState);
    setErrors({});
    setSuccess(true);
  };

  return (
    <div className="container mx-auto col-md-8 col-lg-l">
      <h1>User Registration Form</h1>
      {success && <div className="success">Registration successful!</div>}
      <form onSubmit={handleSubmit}>
        <div class="form-outline mb-2">
          <input
            type="text"
            id="1"
            class="form-control"
            name="name"
            autoFocus
            value={form.name}
            onChange={handleChange}
          />
          {errors.name && <div className="error">{errors.name}</div>}
          <label class="form-label" for="name">
            Name
          </label>
        </div>

        <div class="form-outline mb-2">
          <input
            type="email"
            id="2"
            class="form-control"
            name="email"
            value={form.email}
            onChange={handleChange}
            autoComplete="new-password"
          />
          {errors.email && <div className="error">{errors.email}</div>}
          <label class="form-label" for="email">
            Email address
          </label>
        </div>

        <div class="form-outline mb-2">
          <input
            type="password"
            id="3"
            class="form-control"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
          {errors.password && <div className="error">{errors.password}</div>}
          <label class="form-label" for="password">
            Password
          </label>
        </div>

        <button type="submit" class="btn btn-primary btn-block">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default App;
