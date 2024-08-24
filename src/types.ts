export interface ReposState {
  items: {};
  isFetching: boolean;
  count: number;
}

export interface RootState {
  repos: ReposState;
}
