import React from "react";
import Tour from "./Tour";
const Tours = ({ tour_detail, removeTour }) => {
  return (
    <section>
      <div>
        {tour_detail.map((each_tour_detail) => {
          return (
            <Tour
              key={each_tour_detail.id}
              {...each_tour_detail}
              removeTour={removeTour}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
