export type PersonProps = {
  photo: string;
  name: string;
  type: string;
  url: string;
  onAddFavoritesClick: React.MouseEventHandler<any>;
  selectedPerson: object;
};
