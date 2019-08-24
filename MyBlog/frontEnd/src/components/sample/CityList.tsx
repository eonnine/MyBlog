import React, { Fragment, FunctionComponent } from 'react';
import City from './City';
import styled from 'styled-components';

const RowStyle = styled.div`

`;

interface ICity {
  id: number
  name: string
  population: number
}

interface ICityList {
  cityList: [ICity]
}

const CityList: FunctionComponent<ICityList> = (props) => {

  const makeCityList = () => {
    return props.cityList.map(city => (
      <City
        key={city.id}
        id={city.id}
        name={city.name}
        population={city.population}
      />
    ));
  }

  return (
    <section className="wrapper style2 fullscreen">
      <h2>City List</h2>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Population</th>
            </tr>
          </thead>
          <tbody>
            {makeCityList()}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default CityList;