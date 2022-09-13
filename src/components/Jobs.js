import React, { useState, useContext, useEffect } from 'react';

import styles from './Jobs.module.css';
import JobItem from './JobItem';
import { JobContext } from '../context/job-context';

function Jobs(props) {
  const jobContext = useContext(JobContext);

  const [filteredData, setFilteredData] = useState([]);

  const modifiedData = () => {
    if (jobContext.keywords.length > 0) {
      console.log(jobContext.keywords)

      const newData = filteredData.filter((jobData) => {
        return jobContext.keywords.every((keyword) => {

          return (
            jobData.role === keyword ||
            jobData.level === keyword ||
            jobData.languages.includes(keyword) ||
            jobData.tools.includes(keyword)
          );

        });
      });
      setFilteredData(newData);
    } else {
      setFilteredData(props.jobData);
    }
  };

  useEffect(() => {
    modifiedData();
  }, [jobContext.keywords]);

  return (
    <div className={styles['jobs-container']}>
      <ul>
        {filteredData.map((data) => (
          <JobItem key={data.id} jobData={data} />
        ))}
      </ul>
    </div>
  );
}

export default Jobs;
