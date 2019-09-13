// 페이지 이동시 사용할 Reducer의 타입 정의입니다.
export type TChangePageAction = { type: 'INCREMENT', length: number } | { type: 'DECREMENT', length: number };
export type TPutDataAction = { data: IPutBoard };
export interface IPageIndexState {
  index: number;
}

export interface IBoardProps {
  pageIndex: string
}

export interface IBoardDetailProps {
  id: string
  pageIndex: string
}

export interface IBoardWriterProps {
  id: string
}

export interface IBoard {
  id: number
  title: string
  content: string
  visitCount: number
  postDate: string
  pageIndex: number
}

export interface IBoardList {
  boardList: [IBoard]
  pageIndex: number
}

export interface IPutBoard {
  [key: number]: IPutBoard
  id: number
  title: string
  content: string
  isPublic: boolean
}

export interface ITd {
	width: string,
}