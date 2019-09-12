import React, { useState, FunctionComponent } from 'react';
import { IBoardList, IBoardPost } from './Type';
import { useMutation } from 'react-apollo-hooks';
import Queries from './Queries';

const Post: FunctionComponent<any> = ({ history }) => {

  // useSate 및 작성 폼 초기화에 사용합니다.
  const postData: IBoardPost = {
    id: 8,
    title: '',
    content: '',
    isPublic: false
  };
  
  const [ state, setState ] = useState(postData);
  const [ postBoard] = useMutation(Queries.POST_BOARD);

  // 공개 여부 체크박스 이벤트
  const onCheckboxClick = (e: React.MouseEvent) => {
    setState({ 
      ...state,
      isPublic: !state.isPublic
    });
  }

  // 작성 폼 입력 시 데이터 변경 이벤트
  const onChangeState = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setState({
      ...state,
      [e.target.id]: e.target.value
    });
  }

  const [ patchBoard ] = useMutation(Queries.PATCH_BOARD);
  
   // 신규 게시글 작성
  const onPostBoard = () => {
    const { id, title, content, isPublic } = state;
    if( state.id == 0 ){
      postBoard({ variables: { title, content, isPublic } });
    } else {
      patchBoard({ variables: { id, title, content, isPublic } });
    }

  }

  const onLeavePage = () => {
    if( !confirm('작성 중이던 내용이 사라집니다. 정말 목록으로 이동하시겠습니까?') ){
      return false;
    }
    history.push("/Board");
  }

  return (
    <section id="intro" className="wrapper style1 fullscreen">
      <div className="inner">
        <section>
          <h3>글쓰기</h3>
          <form action="#">
            <div className="row gtr-uniform">
              <div className="col-6 col-12-xsmall">
                <input type="text" id="id" value={state.id} onChange={()=>{}}/>
                <input type="text" id="title" value={state.title} onChange={onChangeState} placeholder="Title" />
              </div>
              <div className="col-4 col-12-small">
                <input type="checkbox" checked={state.isPublic} onChange={()=>{}} />
                <label onClick={onCheckboxClick}>공개</label>
              </div>
              <div className="col-12">
                <textarea id="content" value={state.content} onChange={onChangeState} placeholder="Content"></textarea>
              </div>
            </div>
          </form>
          <ul className="actions">
            <li><a href="#" className="button" onClick={onLeavePage}>목록</a></li>
            <li><a href="#" className="button" onClick={onPostBoard}>작성</a></li>
          </ul>
        </section>
      </div>
    </section>
  )
}

export default Post;