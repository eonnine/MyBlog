import React, { useState } from 'react';
import { useQuery } from 'react-apollo-hooks';
import BoardList from './BoardList';
import Queries from './Queries';
import { NavLink } from 'react-router-dom';

const Index = () => {
  const [ pageState, setPageState ] = useState({ index: 0 });
  const { index } = pageState;
  
  const { data, loading, error } = useQuery(Queries.GET_BOARD_LIST,{ variables: { index } });

  return (
    ( loading ) ? <span>Loading...</span> :
    ( error ) ? <span>{error.message}</span> :

    <section id="intro" className="wrapper style1 fullscreen">
      <div className="inner">
        <h2>Board List</h2>
        <BoardList boardList={data.getBoardList} />
        <ul className="actions">
          <li><NavLink to="/BoardWriter" className="button">새 글</NavLink></li>
        </ul>
      </div>
    </section>;
  );
}

export default Index;