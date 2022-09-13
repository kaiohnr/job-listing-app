import React, { useEffect, useState, useContext } from 'react';

import styles from './JobItem.module.css';
import { JobContext } from '../context/job-context';

function JobItem(props) {
  const jobContext = useContext(JobContext);

  const {
    company,
    logo,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  } = props.jobData;

  const [icon, setIcon] = useState();
  const keywords = [role, level, ...languages, ...tools];

  const importLogos = () => {
    const logoSvg = import(`${logo}`).then((logo) => {
      setIcon(logo.default);
    });
  };

  useEffect(() => {
    importLogos();
  }, [logo]);

  return (
    <li className={styles[`${featured ? 'job-item-featured' : 'job-item'}`]}>
      <div className={styles.informations}>

        <div className={styles['icon-container']}>
          <img src={icon} alt="" />
        </div>

        <div className={styles['person-info']}>
          <div className={styles['company-container']}>
            <p>{company}</p>
            <div className={styles['badges-container']}>
              {props.jobData.new && <p className={styles['new-badge']}>NEW!</p>}
              {featured && <p className={styles['featured-badge']}>FEATURED</p>}
            </div>
          </div>

          <div className={styles['position-container']}>
            <p>{position}</p>
          </div>

          <div className={styles['details-container']}>
            <p>{postedAt}</p>
            <span>•</span>
            <p> {contract}</p>
            <span>•</span>
            <p>{location}</p>
          </div>
        </div>

        <div className={styles.line}></div>

        <div className={styles.keywords}>
          <div className={styles['keywords-container']}>
            {keywords.map((keyword, id) => (
              <button
                key={id}
                onClick={() => {
                  jobContext.addKeyword(keyword);
                }}
              >
                {keyword}
              </button>
            ))}
          </div>
        </div>
      </div>
    </li>
  );
}

export default JobItem;
