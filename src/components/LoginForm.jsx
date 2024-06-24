import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { BsTwitterX } from "react-icons/bs";

const LoginFormContainer = styled.div`
  width: 300px;
  margin: 0 auto;
  padding: 1rem;
  background-color: #000;
  border-radius: 8px;
`;

const FormHeader = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const FormHeaderTitle = styled.h2`
  color: #ffffff;
`;

const ErrorMessage = styled.p`
  color: red;
  margin-bottom: 10px;
`;

const SubmitButton = styled.button`
  background-color: #1da1f2;
  color: #fff;
  border: none;
  border-radius: 20px;
  padding: 10px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1a91da;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormInput = styled.input`
  background-color: #121212;
  border: 1px solid #333;
  border-radius: 1rem;
  color: #fff;
  padding: 10px;
  margin-bottom: 10px;

  &::placeholder {
    color: #4c4f53;
  }
`;
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

  const handleChange = (event) => {
    const { name, value } = event.target;
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

  const handleSubmit = (event) => {
    event.preventDefault();

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
    <LoginFormContainer>
      <FormHeader>
        {<BsTwitterX />}
        <FormHeaderTitle>Giriş Yap</FormHeaderTitle>
      </FormHeader>
      <Form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="username"
          placeholder="Kullanıcı Adı"
          value={formData.username}
          onChange={handleChange}
        />
        {errors.username && <p className="error">{errors.username}</p>}
        <FormInput
          type="password"
          name="password"
          placeholder="Şifre"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <p className="error">{errors.password}</p>}
        <SubmitButton type="submit" disabled={!isFormValid()}>
          Giriş Yap
        </SubmitButton>
      </Form>
    </LoginFormContainer>
  );
}
