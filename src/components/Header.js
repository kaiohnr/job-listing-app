import React, { useContext } from 'react';

import { JobContext } from '../context/job-context';
import { IoMdClose } from 'react-icons/io';
import styles from './Header.module.css';
import removeIcon from './images/icon-remove.svg';

function Header() {
  const jobContext = useContext(JobContext);

  return (
    <div className={styles['header-container']}>
      <ul className={styles['keywords-list']}>
        
        {jobContext.keywords.map((keyword, id) => (
          <li key={id}>
            <div className={styles['keyword-item']}>
              <span>{keyword}</span>
              <img
                src={removeIcon}
                alt="remove keyword"
                className={styles['remove-keyword-btn']}
                onClick={() => {
                  jobContext.deleteKeyword(keyword);
                }}
              />
            </div>
          </li>
        ))}

        <div
          className={styles['clearAll-btn']}
          onClick={() => {
            jobContext.clearAllKeywords();
          }}
        >
          Clear
        </div>
      </ul>
    </div>
  );
}

export default Header;
