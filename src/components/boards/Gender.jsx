import React, { useState } from "react";
const Gender = ({ register }) => {
  const [gender, setGender] = useState({
    man: true,
    girl: false,
  });

  const handleGanderChange = (e) => {
    if (e.target.name === "girl") {
      setGender((prev) =>
        prev.girl === true
          ? prev
          : {
              man: false,
              girl: true,
            }
      );
    } else {
      setGender((prev) =>
        prev.man === true
          ? prev
          : {
              man: true,
              girl: false,
            }
      );
    }
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          {...register("man")}
          checked={gender.man}
          onChange={handleGanderChange}
        />
        <span>👨‍🦲</span>
      </label>
      <label>
        <input
          type="checkbox"
          {...register("girl")}
          checked={gender.girl}
          onChange={handleGanderChange}
        />
        <span>👧</span>
      </label>
    </div>
  );
};

export default Gender;
