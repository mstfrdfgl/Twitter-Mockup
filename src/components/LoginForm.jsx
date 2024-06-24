import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { BsTwitterX } from "react-icons/bs";

export default function LoginForm({ setUserData }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "username") {
      if (value.length < 3 || value.length > 50) {
        setErrors({
          ...errors,
          username: "Kullanıcı adı en az 3 en fazla 50 karakter olmalıdır.",
        });
      } else {
        setErrors({
          ...errors,
          username: "",
        });
      }
    }

    if (name === "password") {
      if (value.length < 8) {
        setErrors({
          ...errors,
          password: "Şifre en az 8 karakter olmalıdır.",
        });
      } else {
        setErrors({
          ...errors,
          password: "",
        });
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      username: formData.username,
      password: formData.password,
    };

    axios
      .post("https://reqres.in/api/users", data)
      .then((response) => {
        const userId = response.data.id;
        setUserData({ username: formData.username, userId });
        history.push(`/home/${userId}`);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const isFormValid = () => {
    return (
      formData.username.length <= 50 &&
      formData.username.length >= 3 &&
      formData.password.length >= 8 &&
      !errors.username &&
      !errors.password
    );
  };
  return (
    <div className="login-form">
      <div className="form-header">
        {<BsTwitterX />}
        <h2>Giriş Yap</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          className="form-input"
          type="text"
          name="username"
          placeholder="Kullanıcı Adı"
          value={formData.username}
          onChange={handleChange}
        />
        {errors.username && <p className="error">{errors.username}</p>}
        <input
          className="form-input"
          type="password"
          name="password"
          placeholder="Şifre"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <p className="error">{errors.password}</p>}
        <button
          type="submit"
          className="submit-button"
          disabled={!isFormValid()}
        >
          Giriş Yap
        </button>
      </form>
    </div>
  );
}
