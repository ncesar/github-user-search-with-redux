export type InputProps = {
  placeholder: string;
  onClearClick: any;
  onChange: any;
  value: string;
} & ErrorProps;
export type ErrorProps = {
  error: boolean;
};
