import React from 'react';
import { Watch } from 'react-loader-spinner';
import { UserIsLoading } from './LoaderStyled';

const Loader = ({ className = '', width = '80', height = '80' }) => {
  return (
    <UserIsLoading>
      <Watch
        visible={true}
        height={height}
        width={width}
        radius="48"
        color="#0ef387"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </UserIsLoading>
  );
};

export default Loader;
