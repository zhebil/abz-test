import React, { useState } from "react";
import Tooltip from "./tooltip";
export default function User(props) {
  const { photo, name, position, email, phone } = props.userData;
  const onImageError = (e) => {
    e.target.src = "./assets/photo-placeholder.svg";
  };
  let hasToolTip = false;
  const [toolTip, setToolTip] = useState(false);
  const onTextTransform = (text) => {
    if (text.length > 22) {
      hasToolTip = true;
      return `${text.substr(0, 22)}…`;
    }
    return text;
  };
  return (
    <article className="user">
      <div className="user__img">
        <img width="74" height="74" src={photo} onError={onImageError} alt="" />
      </div>
      <div onMouseLeave={() => setToolTip(false)} className="user__info">
        <h3 className="user__name">{name}</h3>
        <p
          onClick={() => {
            setToolTip(!toolTip);
          }}
          className="user__positions"
        >
          {position}
        </p>
        <a
          onMouseEnter={() => setToolTip(true)}
          className="user__email"
          href={`mailto:${email}`}
        >
          {onTextTransform(email)}
        </a>
        <a className="user__phone" href={`tel:+${phone.replace("+", "")}`}>
          {phone}
        </a>
        {hasToolTip && <Tooltip open={toolTip} text={email} />}
      </div>
    </article>
  );
}
