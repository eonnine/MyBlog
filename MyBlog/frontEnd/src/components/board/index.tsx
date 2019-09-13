import React, { useReducer, FunctionComponent } from 'react';
import { RouteComponentProps } from 'react-router';
import { useQuery } from 'react-apollo-hooks';
import { Link } from 'react-router-dom';
import { IIndexState, IBoardProps, TChangePageAction } from './Type';
import BoardList from './BoardList';
import Queries from './Queries';

function PageReducer (state: IIndexState, action: TChangePageAction) {
  let { index } = state;
  const { type, length } = action;

  switch(type){
    case 'DECREMENT':
      //첫 페이지일 때
      if(index == 0) return state;
      return { index: --index };
    case 'INCREMENT':
      //마지막 페이지일 때
      if(length < 5) return state;
      return { index: ++index };
  }
}

const Index: FunctionComponent<RouteComponentProps<IBoardProps>> = ({ match }) => {
  
  let [ { index }, dispatch ] = useReducer(PageReducer, { index: Number(match.params.pageIndex) || 0 });
  const { data, loading, error } = useQuery(Queries.GET_BOARD_LIST,{ variables: { index }, fetchPolicy: "no-cache" });

  let length = 0;
  if( data ){
    length = data.getBoardList.length;
  }

  return (
    ( loading ) ? <span>불러오는 중...</span> :
    ( error ) ? <span>목록을 불러오는데 실패했습니다</span> :

    <section id="intro" className="wrapper style1 fullscreen">
      <div className="inner">
        <h2>글 목록</h2>
        <BoardList boardList={data.getBoardList} pageIndex={index} />
        <ul className="actions">
          <li><Link to="/BoardWriter/0" className="button">글쓰기</Link></li>
          <li><a href="#" onClick={() => dispatch({type: "DECREMENT", length})} className="button primary">이전</a></li>
          <li><a href="#" onClick={() => dispatch({type: "INCREMENT", length})} className="button primary">다음</a></li>
        </ul>
      </div>
    </section>
  );
}

export default Index;