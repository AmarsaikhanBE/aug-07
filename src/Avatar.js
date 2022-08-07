import React, { useState } from "react";
import "./Avatar.css";
import AvatarList from "./AvatarList";

const Avatar = () => {
  const avatarlistarray = [
    { id: 1, name: "Amarsaikhan", work: "Student" },
    { id: 2, name: "Bilguun", work: "UI Designer" },
    { id: 3, name: "Raj", work: "Teacher" },
    { id: 4, name: "Soe", work: "UX Designer" },
  ];
  //   const arrayavatarcard = avatarlistarray.map((avatarcard, i) => (
  //     <AvatarList
  //       id={avatarlistarray[i].id}
  //       name={avatarlistarray[i].name}
  //       work={avatarlistarray[i].work}
  //     />
  //   ));
  const [sub, setSub] = useState(false);
  return (
    <div className="mainpage">
      <h1>{sub ? "Thank You" : "Welcome to Avatar World"}</h1>
      {/* {arrayavatarcard} */}
      <div className="card-holder">
        {avatarlistarray.map((avatarcard, index) => (
          <AvatarList
            key={index}
            id={avatarcard.id}
            name={avatarcard.name}
            work={avatarcard.work}
          />
        ))}
      </div>
      <button onClick={() => setSub(true)}>Subscribe</button>
    </div>
  );
};

export default Avatar;
