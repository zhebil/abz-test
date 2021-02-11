import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const schema = yup.object().shape({
  name: yup.string().required(),
  phone: yup.string().required(),
  email: yup.string().required().email(),
  image: yup.object().required(),
  positions: yup.string().required(),
});

const inputs = [
  {
    key: 1,
    label: "Name",
    type: "text",
    name: "name",
    placeholder: "Your name",
  },
  {
    key: 2,
    label: "Email",
    type: "email",
    name: "email",
    placeholder: "Your email",
  },
  {
    key: 3,
    label: "Phone number",
    type: "tel",
    name: "phone",
    placeholder: "+380 XX XXX XX XX",
    text: "Enter a phone number in international format",
  },
];

export default function Form({ positions }) {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const [radio, setRadio] = useState(0);
  const onSubmit = (data) => {
    console.log(data);
  };

  console.log(errors);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="sign-up__form">
      {inputs.map((item) => {
        return (
          <div key={item.key} className="sign-up__item">
            <label htmlFor={item.name} className="sign-up__label">
              {item.label}
            </label>
            <input
              className={`sign-up__input ${
                errors[item.name] ? "sign-up__input--error" : ""
              } `}
              ref={register}
              type={item.type}
              name={item.name}
              id={item.name}
              placeholder={item.placeholder}
            />
            {item.text ? <p className="sign-up__text">{item.text}</p> : null}
          </div>
        );
      })}

      <div className="sign-up__item">
        <p className="sign-up__label">Select your position</p>
        {positions.map((position, idx) => {
          const isActive = idx === radio;
          return (
            <label
              className={`sign-up__radio-label ${
                isActive ? "sign-up__radio-label--active" : ""
              }`}
              key={position.id}
            >
              <input
                className="visually-hidden"
                checked={isActive}
                onChange={() => {
                  setRadio(idx);
                }}
                type="radio"
                name="positions"
                value={position.name}
                ref={register}
              />
              {position.name}
            </label>
          );
        })}
      </div>
      <div className="sign-up__item">
        <p className="sign-up__label">Photo</p>
        <label className="sign-up__file-label">
          <input
            className="visually-hidden"
            type="file"
            name="image"
            id="image"
            ref={register}
          />
          <p className="sign-up__file-text">Upload your photo</p>
          <button
            onClick={(e) => {
              e.target.parentNode.click();
            }}
            type="button"
            className="sign-up__file-input"
          >
            Browse
          </button>
        </label>
      </div>
      <button className="button sign-up__button" type="submit">
        Sing up now
      </button>
    </form>
  );
}
