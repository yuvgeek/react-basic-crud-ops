import React from "react";

const Title = (props) => {
  const { title, description, updateTitleBtnAction } = props;
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>

      <button onClick={updateTitleBtnAction}>Update Title</button>
    </div>
  );
};

export { Title };
