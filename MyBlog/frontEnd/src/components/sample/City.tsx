import React, { FunctionComponent } from 'react';

interface City {
  id: number
  name: string
  population: number
}

const City: FunctionComponent<City> = (props) => {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.name}</td>
      <td>{props.population}</td>
    </tr>
  )
}

export default City;