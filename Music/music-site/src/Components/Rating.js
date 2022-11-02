import React from "react";

const stars = document.querySelectorAll(".star");
const output = document.querySelector(".output");

for (let i = 0; i < stars.length; i++) {
  stars[i].starValue = i + 1;
  ["click", "mouseover", "mouseout"].forEach(function (e) {
    stars[i].addEventListener(e, showRating);
  });
}
function showRating(e) {
  let type = e.type;
  // console.log(type)
  let starValue = this.starValue;
  // console.log(starValue)

  if (type === "click") {
    if (starValue > 1) {
      output.innerHTML = "You rated " + starValue + "stars";
    }
  }

  stars.forEach(function (elm, index) {
    if (type === "click") {
      if (index < starValue) {
        elm.classList.add("starcol");
      } else {
        elm.classList.remove("starcol");
      }
    }
    if (type === "mouseover") {
      if (index < starValue) {
        elm.classList.add("starcol1");
      } else {
        elm.classList.remove("starcol1");
      }
    }
    if (type === "mouseout") {
      elm.classList.remove("starcol");
    }
  });
}
export default function Rating() {
  return (
    <>
      <div className="star-rating">
        <h3>Give Your Rating</h3>
        <ul className="stars">
          <li className="star">
            <i className="fa fa-star-o" aria-hidden="true"></i>
          </li>
          <li className="star">
            <i className="fa fa-star-o" aria-hidden="true"></i>
          </li>
          <li className="star">
            <i className="fa fa-star-o" aria-hidden="true"></i>
          </li>
          <li className="star">
            <i className="fa fa-star-o" aria-hidden="true"></i>
          </li>
          <li className="star">
            <i className="fa fa-star-o" aria-hidden="true"></i>
          </li>
        </ul>
        <p className="output">Ratings</p>
        <br />
        <button className="next">Next</button>
      </div>
    </>
  );
}
