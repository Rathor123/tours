import React, { useState, useEffect, useDebugValue } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, SetLoding] = useState(true);

  const [tour, SetTour] = useState();

  const removeTour = (id) => {
    const newTours = tour.filter((tour) => tour.id !== id);
    SetTour(newTours);
  };
  const func = async () => {
    SetLoding(true);

    try {
      const response = await fetch(url);
      const tours = await response.json();
      SetTour(tours);
      SetLoding(false);
      console.log(tour);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    func();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <main>
      <Tours tour_detail={tour} removeTour={removeTour} />
    </main>
  );
}

export default App;
