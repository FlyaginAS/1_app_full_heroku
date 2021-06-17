import React, { useEffect, useState } from 'react';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

const withData = (View) => {
  return (props) => {
    const [state, setState] = useState({
      data: null,
      loading: true,
      error: null,
    });
    let cancelled = false;

    useEffect(() => {
      update();

      return () => {
        cancelled = true;
      };
    }, [props.getData, props.topic]);

    const update = () => {
      setState({
        data: null,
        loading: true,
        error: null,
      });

      props
        .getData()
        .then((data) => {
          if (!cancelled) {
            setState({
              data,
              loading: false,
              error: null,
            });
          }
        })
        .catch((error) => {
          console.log(error);
          if (!cancelled) {
            setState({
              data: null,
              error,
              loading: false,
            });
          }
        });
    };

    if (state.loading) return <Spinner />;
    if (state.error) return <ErrorIndicator />;

    return <View {...props} data={state.data} />;
  };
};

export default withData;
