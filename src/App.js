import React, { useContext } from 'react';

import jobData from './data.json';
import Jobs from './components/Jobs';
import Header from './components/Header';
import { JobContext } from './context/job-context';

function App() {
  const jobContext = useContext(JobContext);

  return (
    <div>
      <div className="header-bg"></div>
      {jobContext.keywords.length > 0 && <Header />}
      <Jobs jobData={jobData} />
    </div>
  );
}

export default App;
