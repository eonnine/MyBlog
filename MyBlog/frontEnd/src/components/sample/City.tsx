import React, { FunctionComponent } from 'react';

interface City {
  id: number
  name: string
  population: number
}

const City: FunctionComponent<City> = ({ id, name, population }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{population}</td>
    </tr>
  )
}

export default City;