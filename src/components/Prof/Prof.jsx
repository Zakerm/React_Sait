import React from "react";
import s from './Prof.module.css';
import MyPosts from "./MyPosts/MyPosts";


const Prof = () => {
    return (
      <div className={s.content}>
        <div>
          <img src="https://99px.ru/sstorage/53/2024/01/mid_355601_392700.jpg"></img>
        </div>
        ava+info
        <MyPosts />
      </div>
    );
};

export default Prof;