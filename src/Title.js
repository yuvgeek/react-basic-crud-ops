import React from "react";

const Title = (props) => {
  const { title, body, updateTitleBtnAction } = props;
  return (
    <div>
      <h1>{title}</h1>
      <p>{body}</p>

      <button onClick={updateTitleBtnAction}>Update Title</button>
    </div>
  );
};

export { Title };
