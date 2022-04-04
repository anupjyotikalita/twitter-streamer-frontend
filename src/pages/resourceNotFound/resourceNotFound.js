import React from 'react';
import { Link } from 'react-router-dom';
import Styles from './resourceNotFound.module.css';

const ResourceNotFound = () => (
  <div className={Styles.container}>
    <p>There is nothing in the specified url.</p>
    <p>
      Click on this link to go to <Link to="/">homepage</Link>
    </p>
  </div>
);

export default ResourceNotFound;
