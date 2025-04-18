export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface Post {
  _id: string;
  title: string;
  text: string;
  imageUrl?: string;
  user: {
    _id: string;
    avatarUrl?: string;
    fullName: string;
  };
  createdAt: string;
  updatedAt: string;
  viewsCount: number;
  commentsCount: number;
  tags: string[];
}

export interface PostsState {
  items: Post[];
  status: Status;
}
