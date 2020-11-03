import React, {useState, useEffect} from "react";
import Tour from "./Tour";
import Loading from "./Loading";

const Tours = ({url}) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setIsLoaded(false);
    try {
      const response = await fetch(url);
      const tourData = await response.json();
      setIsLoaded(true);
      setTours(tourData);
    } catch (error) {
      setIsLoaded(true);
      setError(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (error) {
    return <h1>error: {error.message}</h1>;
  }

  if (!isLoaded) {
    return <Loading />;
  } else if (tours.length === 0) {
    return (
      <div className="title">
        <h2>'No tours left :('</h2>
        <button className="btn" onClick={fetchTours}>
          refresh
        </button>
      </div>
    );
  } else {
    const tourComps = tours.map((tour) => (
      <Tour key={tour.id} removeTour={removeTour} {...tour} />
    ));

    return (
      <section>
        <div className="title">
          <h2>Our Tours</h2>
          <div class="underline"></div>
        </div>
        <div>{tourComps}</div>
      </section>
    );
  }
};

export default Tours;
