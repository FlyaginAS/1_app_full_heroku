import React from 'react';
import { LoadServiceConsumer } from '../load-service-context';

const withLoadService = () => (View) => {
  return (props) => {
    return (
      <LoadServiceConsumer>
        {(loadService) => {
          return <View {...props} loadService={loadService} />;
        }}
      </LoadServiceConsumer>
    );
  };
};
export default withLoadService;
