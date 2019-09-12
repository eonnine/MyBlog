export interface IIndexState {
  index: number;
}

export type TAction = { type: 'INCREMENT', length: number } | { type: 'DECREMENT', length: number };

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
  id: number
  title: string
  content: string
  isPublic: boolean
}

export interface ITd {
	width: string,
}