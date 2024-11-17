export interface PostData {
  id: number | undefined;
  category?: string;
  title?: string;
  subtitle?: string;
  text?: string;
  weight?: string;
  image: string;
}

export interface IPropsCakesPage {
  title: string;
  subtitle: string;
  text: string;
  row1: JSX.Element[];
  row2: JSX.Element[];
  row3?: JSX.Element[];
  row4?: JSX.Element[];
  row5?: JSX.Element[];
}
