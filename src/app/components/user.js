import React from "react";
export default function User(props) {
  const { photo, name, position, email, phone } = props.userData;
  const onImageError = (e) => {
    e.target.src = "./assets/photo-placeholder.svg";
  };
  return (
    <article className="user">
      <div className="user__img">
        <img width="74" height="74" src={photo} onError={onImageError} alt="" />
      </div>
      <div className="user__info">
        <h3 className="user__name">{name}</h3>
        <p className="user__positions">{position}</p>
        <a className="user__email" href={`mailto:`}>
          {email}
        </a>
        <a className="user__phone" href={`tel:+`}>
          {phone}
        </a>
      </div>
    </article>
  );
}
