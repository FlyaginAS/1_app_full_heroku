import React, { useEffect } from 'react';
import '../../services/load-service';
import './page-main-content.scss';

import { withData } from '../hoc-helpers';

const PageMainContent = ({
  //onCountItems = () => {},
  data,
  location,
  children,
}) => {
  // useEffect(() => {
  //   onCountItems(data.length);
  // }, []);

  const cards = children(data, location);
  return <React.Fragment>{cards}</React.Fragment>;
};

export default withData(PageMainContent);
