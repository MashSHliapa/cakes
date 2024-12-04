import { createSlice } from '@reduxjs/toolkit';
import filling1 from '../components/images/fillings/filling1.jpg';
import filling2 from '../components/images/fillings/filling2.jpg';
import filling3 from '../components/images/fillings/filling3.jpg';
import filling4 from '../components/images/fillings/filling4.jpg';
import filling5 from '../components/images/fillings/filling5.jpg';
import filling6 from '../components/images/fillings/filling6.jpg';
import filling7 from '../components/images/fillings/filling7.jpg';
import filling8 from '../components/images/fillings/filling8.jpg';
import filling9 from '../components/images/fillings/filling9.jpg';
import filling10 from '../components/images/fillings/filling10.jpg';
import filling11 from '../components/images/fillings/filling11.jpg';

const fillingsSlice = createSlice({
  name: 'fillings',
  initialState: {
    data: [
      {
        id: 1,
        title: 'Бисквитный медовик',
        subtitle: 'с черной смородиной',
        text: 'Воздушные медовые бисквиты, конфи с чёрной смородиной, мягкий мармелад из чёрной смородины и сливочной смородиновый крем',
        weight: '2,0 кг',
        image: filling1,
      },
      {
        id: 2,
        title: 'Карамельная девочка',
        text: 'Тонкие коржи на варёной сгущеном молоке, нежный сливочный крем в составе которого сливочный сыр, сахарная пудра, варёная сгущенка, сметана, сливки',
        weight: '2,0 кг',
        image: filling2,
      },
      {
        id: 3,
        title: 'Птичье молоко',
        text: 'Ванильный бисквит + воздушное суфле + ганаш на темном шоколаде ',
        weight: '0,8 кг',
        image: filling3,
      },
      {
        id: 4,
        title: 'Молочная девочка',
        text: 'Воздушные бисквиты на основе сгущенного молока и сливочно-творожный крем. Возможно добавить в начинку вишню, бананы, консервированные персики',
        weight: '2,0 кг',
        image: filling4,
      },
      {
        id: 5,
        title: 'Муссовый торт',
        subtitle: '“Три шоколада”',
        text: 'Шоколадный брауни + три прослойки мусса с добавлением темного, молочного и белого шоколада',
        weight: '1,5 кг',
        image: filling5,
      },
      {
        id: 6,
        title: 'Морковный тортик',
        subtitle: 'с апельсином/вишней',
        text: 'Морковные бисквиты с добавлением грецкого ореха, мака + крем чиз на сливках + апельсиновый курд/вишневое кули + апельсиновое/вишневое конфи',
        weight: '2,7 кг',
        image: filling6,
      },
      {
        id: 7,
        title: 'Классический медовик',
        text: 'Песочное медовые коржи + сметанно-сливочный крем. Возможно добавить ягодный наполнитель в виде вишни, смородины, клубники, клюквы',
        weight: '1,6 кг',
        image: filling7,
      },
      {
        id: 8,
        title: 'Шоколадный медовик',
        subtitle: '"Спартак"',
        text: 'Песочное шоколадные медовые коржи плюс сметанно-сливочный крем',
        weight: '1,6 кг',
        image: filling8,
      },
      {
        id: 9,
        title: 'Бисквитный медовик',
        subtitle: 'c клюквой',
        text: 'Нежные медовые бисквиты + сметанно сливочный крем + кули из клюквы',
        weight: '1,5 кг',
        image: filling10,
      },
      {
        id: 10,
        title: 'Бисквитный медовик',
        subtitle: '"карамельная нежность"',
        text: 'Воздушные медовые бисквиты в прослойке сметанно-сливочный крем и нежная сливочная карамель',
        weight: '2,0 кг',
        image: filling9,
      },
      {
        id: 11,
        title: 'Меренговый рулет',
        text: 'Меренговое суфле + крем-чиз на сливках + ягодное кули ',
        weight: '1,0 кг',
        image: filling11,
      },
    ],
  },
  reducers: {
    setFillings: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setFillings } = fillingsSlice.actions;
export const fillingsReducer = fillingsSlice.reducer;
