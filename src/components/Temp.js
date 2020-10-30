import React from "react";

const Temp = ({ color, name, isSpecial }) => {
  return (
    <>
      <div style={{ color }}>
        {name}
        {isSpecial && "*"}
      </div>
    </>
  );
};
Temp.defaultProps = {
  name: "이름 없음",
  color: "pink",
};

export default Temp;
