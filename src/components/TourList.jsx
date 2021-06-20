import { useState } from "react";

import { tourData } from "../services/tourService";
import Tour from "./Tour";

const TourList = () => {
  const [tours, setTours] = useState(tourData);

  const handleRemoveTour = (id) => {
    setTours((tours) => {
      const newTours = tours.filter((tour) => tour.id !== id);
      return newTours;
    });
  };

  return (
    <section className="tourlist">
      {tours.map((tour) => {
        return <Tour key={tour.id} {...tour} onRemove={handleRemoveTour} />;
      })}
    </section>
  );
};

export default TourList;
