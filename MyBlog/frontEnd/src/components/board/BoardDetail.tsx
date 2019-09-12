import React, { FunctionComponent } from 'react';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom'; 
import { useQuery } from 'react-apollo-hooks';
import { IBoard, IBoardDetailProps } from './Type';
import Query from './Queries';

const BoardDetail: FunctionComponent<RouteComponentProps<IBoardDetailProps>> = ({ match }) => {
  
  const { id, pageIndex } = match.params;
  const { data, loading, error } = useQuery(Query.GET_BOARD, { variables: { id } });

  if( loading ) return <span>불러오는 중...</span>;
  if( error ) return <span>데이터를 불러오는데 실패했습니다</span>;

  const boardData: IBoard = data.getBoard;

  return (
    <section id="intro" className="wrapper style1 fullscreen">
      <div className="inner">
        <section>
          <blockquote><h3>{boardData.title}</h3></blockquote>
          <form action="#">
            <div className="row gtr-uniform">
              <div className="col-12">
                <pre><code>{boardData.content}</code></pre>
              </div>
            </div>
          </form>
          <ul className="actions">
            <li><Link to={`/Board/${pageIndex}`} className="button">목록</Link></li>
          </ul>
        </section>
      </div>
    </section>
  );
}

export default BoardDetail;