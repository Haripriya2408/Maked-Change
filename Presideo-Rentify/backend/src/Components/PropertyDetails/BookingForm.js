import React, { useState } from "react";

const BookingForm = ({
  price,
 
 
}) => {
  const [isHeartFilled, setIsHeartFilled] = useState(false);

  const handleHeartClick = () => {
    setIsHeartFilled(!isHeartFilled);
 
   }

  return (
    <>
     <div className="">
      <form className="payment-form">
        <div className="price-pernight">
          <b>&#8377;{price}</b>
          <span>/ per Month</span>
        </div>
        <div className="interest-container">
          <span
            type="button"
            className="heart-button"
            onClick={handleHeartClick}
          >
            <span className={`heart ${isHeartFilled ? 'filled' : ''}`}>
              &#x2661; 
            </span>
            <span> I am interested</span>
          </span>
        </div>
      </form>
    </div>
    </>
  );
};


export default BookingForm;
