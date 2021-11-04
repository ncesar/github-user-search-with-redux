export type ContentProps = {
  children?: React.ReactNode;
  hideTitle?: boolean;
  onPreviousClick?: React.MouseEventHandler<HTMLButtonElement>;
  onNextClick?: React.MouseEventHandler<HTMLButtonElement>;
  pageNum?: number;
  numOfUsers?: number;
  error?: boolean;
  loading?: boolean;
  hideButtons?: boolean;
  favorites?: number;
  title?: string;
};
