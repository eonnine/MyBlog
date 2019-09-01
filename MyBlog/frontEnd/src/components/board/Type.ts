export interface IBoardList {
  boardList: [IBoard]
}

export interface IBoard {
  id: number
  title: string
  content: string
  isPublic: boolean
  visitCount: number
  postDate: string
  updateDate: string
}

export interface IBoardPost {
  id: number
  title: string
  content: string
  isPublic: boolean
}