import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./components/schema";
import { inputs } from "./components/inpustData";
import { withApiService } from "../../hoc/withApiService";
import { deletePositions, setShowModal } from "../../../actions";
import { useDispatch } from "react-redux";
import ErrorIndicator from "../../utility/error-indicator";
function Form({ positions, apiService }) {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const [radio, setRadio] = useState(0);
  const [file, setFile] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const formData = generateFromData(data);
    // apiService
    //   .postUser(formData)
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //     if (data.success) {
    postUserSuccess();
    showModal();
    //   } else {
    // setError(true)
    //   }
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
  };

  const generateFromData = (data) => {
    const formData = new FormData();
    formData.append("position_id", data.positions);
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("photo", data.image[0]);
    return formData;
  };

  const postUserSuccess = () => {
    dispatch(deletePositions());
  };
  const showModal = () => {
    dispatch(setShowModal());
  };

  const changeFile = (e) => {
    if (!e.target.files[0]) setFile("");
    else setFile(e.target.files[0].name);
  };
  if (error) {
    return <ErrorIndicator />;
  }
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
            {item.text || errors[item.name] ? (
              <p
                className={`sign-up__text ${
                  errors[item.name] ? "sign-up__text--error" : ""
                }`}
              >
                {item.text || errors[item.name].message}
              </p>
            ) : null}
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
                value={position.id}
                ref={register}
              />
              {position.name}
            </label>
          );
        })}
      </div>
      <div className="sign-up__item">
        <p className="sign-up__label">Photo</p>
        <label
          className={`sign-up__file-label ${
            errors.image ? "sign-up__file-label--error" : ""
          }`}
        >
          <input
            className="visually-hidden"
            type="file"
            name="image"
            id="image"
            ref={register}
            onChange={changeFile}
          />
          <p className="sign-up__file-text">{file || "Upload your photo"}</p>
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
        {errors.image ? (
          <p className="sign-up__text sign-up__text--error">
            {errors.image.message}
          </p>
        ) : null}
      </div>
      <button className="button sign-up__button" type="submit">
        Sing up now
      </button>
    </form>
  );
}
export default withApiService()(Form);
