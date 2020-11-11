import React, {useState, useEffect} from "react";
import {FaAngleDoubleRight} from "react-icons/fa";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(1);

  const fetchJobs = async () => {
    setLoading(true);
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <section className="section loading">
        <h1>loading...</h1>
      </section>
    );
  }

  const activeJob = jobs[value];
  const {title, dates, duties, company} = activeJob;

  const dutiesComps = duties.map((duty, index) => {
    return (
      <div key={index} className="job-desc">
        <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
        <p>{duty}</p>
      </div>
    );
  });

  const jobButtons = jobs.map((job, index) => {
    return (
      <button
        onClick={() => setValue(index)}
        key={index}
        className={`job-btn ${index === value && "active-btn"}`}
      >
        {job.company}
      </button>
    );
  });

  return (
    <section className="section">
      <div className="title">
        <h2>Experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">{jobButtons}</div>
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {dutiesComps}
        </article>
      </div>
    </section>
  );
}

export default App;
