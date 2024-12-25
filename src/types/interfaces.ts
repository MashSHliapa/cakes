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
  row6?: JSX.Element[];
  row7?: JSX.Element[];
  row8?: JSX.Element[];
}

export interface FormDataType {
  name: string;
  email: string;
  phone: string;
  option?: string;
  text: string;
  file?: File;
  agreement?: boolean;
}

export interface DataInitialState {
  loading: boolean;
  error: null | string;
  data: { id: number; image: string; category: string }[];
}
