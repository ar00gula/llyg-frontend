import React from "react";

export default function Book(props) {
  return (
    <div key={props.info.id} className="book" tabIndex={0}>
      <span className="book-container">
        <h3 className="book-title">{props.info.title}</h3>
        <div className="image-container">
          <img src={props.info.img_url} alt="" className="book-cover" />
        </div>
      </span>
    </div>
  );
}