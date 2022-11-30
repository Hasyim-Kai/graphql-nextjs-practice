import * as React from 'react';
import { useLaunchListQuery } from '../../generated/graphql/graphql';
import Loading from '../Loading';
import LaunchList from './LaunchList';

const LaunchListContainer = ({handleIdChange}: any) => {
  const { data, error, loading } = useLaunchListQuery();

  if (loading) {
    return <Loading/>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  return <LaunchList data={data} handleIdChange={handleIdChange} />;
};

export default LaunchListContainer