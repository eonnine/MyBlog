import gql from 'graphql-tag';

export default {
  GET_BOARD_LIST: gql`
    query GetBoardList($index: Int!) {
      getBoardList(index: $index) {
        id 
        title 
        visitCount 
        postDate 
      }
    }
  `,
  GET_BOARD: gql`
    query {
      getBoard {
        id 
        title 
        content 
        isPublic 
        visitCount 
        postDate 
        updateDate 
      }
    }
  `,
  POST_BOARD: gql`
    mutation PostBoard($title: String!, $content: String!, $isPublic: Boolean!) {
      postBoard(title: $title, content: $content, isPublic: $isPublic) {
        id 
        title 
        content 
        postDate
      }
    }
  `,
  PATCH_BOARD: gql`
    mutation PatchBoard($id: Int!, $title: String!, $content: String!, $isPublic: Boolean!) {
      patchBoard(id: $id, title: $title, content: $content, isPublic: $isPublic) {
        id 
        title 
        content 
        updateDate 
      }
    }
  `
};