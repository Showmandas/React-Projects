import React from "react";
import review from '../src/images/review.gif'
import Rating from "./Components/Rating";
export default function Review() {
  return (
    <>
    <div className="container-fluid">
      <div className="row">
        <div className="col-10 mx-auto  my-5">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-12 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
            <h2 className="text-center">Post Your Review Here..</h2>
          <form>
            <div class="mb-3">
              <textarea
                className="form-control w-100  postarea"
                placeholder="Feel free to  write here your feelings about this website"
                rows="5"
              ></textarea>
              
            </div>
        <div className="col-12">
        <button class="postbtn" type="submit">Post Review</button>

        </div>
          </form>
            </div>
            <div className="col-12 col-md-6 col-lg-6 my-4">
              <img src={review} alt="Review image" className="img-fluid" />
            </div>
            <div className="col-lg-6 col-md-6 col-12 my-5">
            <Rating/>
            </div>
            
          </div>
 
          
        </div>
        {/* <Rating/> */}
      </div>
    </div>

    </>
      );
}
