import React from "react";

export default function Filter(props) {

  return (
    <div className="filter">
      <form>
      <label>Filter by:</label>
            <select id="cars" name="cars">
            <option value="author" onClick={props.selectFilter("author")}>Author</option>
            <option value="title" onClick={props.selectFilter("title")}>Title</option>
            <option value="recent">Recent</option>
            <option value="genre">Genre</option>
        </select>
      </form>
    </div>
  );
}