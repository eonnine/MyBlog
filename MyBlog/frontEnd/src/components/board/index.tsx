import React, { useState } from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';
import BoardList from './BoardList';
import Post from './Post';
import Queries from './Queries';


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
        <Post boardList={data.getBoardList} />
      </div>
    </section>
  );
}

export default Index;