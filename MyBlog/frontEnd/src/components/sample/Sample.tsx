import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';
import CityList from './CityList';

const ALL_CITIES = gql`
  query {
    allCities {
      id
      name
      population
    }
  }
`;

const Sample = () => {
  const { data, error, loading } = useQuery(ALL_CITIES);
  if(loading) return <span>Loading...</span>
  if(error) return <span>error</span>
  return (
    <CityList cityList={data.allCities} />
  )
}

export default Sample;