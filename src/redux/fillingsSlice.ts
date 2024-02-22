import { createSlice } from '@reduxjs/toolkit'
import filling1 from '../components/images/fillings/filling1.jpg'
import filling2 from '../components/images/fillings/filling2.jpg'
import filling3 from '../components/images/fillings/filling3.jpg'
import filling4 from '../components/images/fillings/filling4.jpg'
import filling5 from '../components/images/fillings/filling5.jpg'
import filling6 from '../components/images/fillings/filling6.jpg'
import filling7 from '../components/images/fillings/filling7.jpg'
import filling8 from '../components/images/fillings/filling8.jpg'
import filling9 from '../components/images/fillings/filling9.jpg'
import filling10 from '../components/images/fillings/filling10.jpg'
import filling11 from '../components/images/fillings/filling11.jpg'
import filling12 from '../components/images/fillings/filling12.jpg'
import filling13 from '../components/images/fillings/filling13.jpg'
import filling14 from '../components/images/fillings/filling14.jpg'
import filling15 from '../components/images/fillings/filling15.jpg'
import filling16 from '../components/images/fillings/filling16.jpg'


const fillingsSlice = createSlice ({
  name: 'fillings',
  initialState: {
    data: [
      {
        id: 1,
        category: 'honneyCake',
        title: 'Бисквитный медовик',
        subtitle: 'с черной смородиной',
        text: 'Воздушные медовые бисквиты, конфи с чёрной смородиной, мягкий мармелад из чёрной смородины и сливочной смородиновый крем',
        weight: '2,0 кг',
        image: filling1,
      },
      {
        id: 2,
        category: 'honneyCake',
        title: 'Шоколадный медовик',
        subtitle: '"Спартак"',
        text: 'Песочное шоколадные медовые коржи плюс сметанно-сливочный крем',
        // realization: 'Изготовлю весом 1,6 кг, 2,0 кг и более',
        weight: '1,6 кг',
        image: filling9,
      },
      {
        id: 3,
        category: 'milk',
        title: 'Птичье молоко',
        text: 'Ванильный бисквит + воздушное суфле + ганаш на темном шоколаде ',
        weight: '0,8 кг',
        image: filling3,
      },
      {
        id: 4,
        category: 'honneyCake',
        title: 'Муссовый медовик',
        text: 'Медовые коржи, сметанно-сливочный крем, воздушный мусс на основе белого шоколада, покрыт глянцевой глазурью',
        weight: '0,9 кг',
        image: filling8,
      },
      {
        id: 5,
        category: 'carrot',
        title: 'Морковный тортик',
        subtitle: 'с апельсином/вишней',
        text: 'Морковные бисквиты с добавлением грецкого ореха, мака + крем чиз на сливках + апельсиновый курд/вишневое кули + апельсиновое/вишневое конфи',
        weight: '2,7 кг',
        image: filling6,
      },
      {
        id: 6,
        category: 'honneyCake',
        title: 'Классический медовик',
        text: 'Песочное медовые коржи + сметанно-сливочный крем. Возможно добавить ягодный наполнитель в виде вишни, смородины, клубники, клюквы',
        weight: '1,6 кг',
        // realization: 'Изготовлю весом 1,6 кг, 2,0 кг и более',
        image: filling7,
      },
      {
        id: 7,
        category: 'oreoPie',
        title: 'Чизкейк',
        subtitle: '"Oreo"',
        text: 'Контент надо добавить Контент надо добавить Контент надо добавить Контент надо добавить Контент надо добавить',
        weight: 'от 6-ти шт.',
        image: filling14,
      },
      {
        id: 8,
        category: 'potato',
        title: 'Эскимо',
        subtitle: '"Пирожное Картошка"',
        text: 'Контент надо добавить Контент надо добавить Контент надо добавить Контент надо добавить Контент надо добавить',
        weight: 'от 6-ти шт.',
        image: filling15,
      },
      {
        id: 9,
        category: 'oreoCake',
        title: 'Шоколадный',
        subtitle: 'c чизкейком oreo',
        text: 'Сочный шоколадный бисквит, мусс на молочном шоколаде, запечённый чизкейк с печеньем oreo и шоколадный крем',
        weight: '2,7 кг',
        image: filling4,
      },
      {
        id: 10,
        category: 'napoleon',
        title: 'Карамельный наполеон',
        text: 'Безумно слоеное тесто (по структуре напоминает пирожное из детства “Язычок”) + карамельный заварной крем + нежная карамель',
        // realization: 'Изготовлю весом 1,6 кг, ',
        weight: '1,6 кг',
        image: filling12,
      },
      {
        id: 11,
        category: 'napoleon',
        title: 'Наполеон',
        subtitle: 'c заварным кремом на белом шоколаде',
        text: 'Нежные слоистые коржи + заварной крем с добавлением белого шоколада',
        // realization: 'Изготовлю весом 1,6 кг, ',
        weight: '1,3 кг',
        image: filling11,
      },
      {
        id: 12,
        category: 'honneyCake',
        title: 'Классический медовик',
        text: 'Песочное медовые коржи + сметанно-сливочный крем. Возможно добавить ягодный наполнитель в виде вишни, смородины, клубники, клюквы',
        weight: '1,0 кг',
        image: filling2,
      },
      {
        id: 13,
        category: 'mousseCake',
        title: 'Муссовый торт',
        subtitle: '“Три шоколада”',
        text: 'Шоколадный брауни + три прослойки мусса с добавлением темного, молочного и белого шоколада',
        // realization: 'Изготовлю весом 1,6 кг, ',
        weight: '1,5 кг',
        image: filling5,
      },
      {
        id: 14,
        category: 'honneyCake',
        title: 'Бисквитный медовик',
        subtitle: 'c клюквой',
        text: 'Нежные медовые бисквиты + сметанно сливочный крем + кули из клюквы',
        // realization: 'Изготовлю весом 1,6 кг, 2,0 кг и более',
        weight: '1,5 кг',
        image: filling10,
      },
      {
        id: 15,
        category: 'meringueRoll',
        title: 'Меренговый рулет',
        text: 'Меренговое суфле + крем-чиз на сливках + ягодное кули ',
        weight: '1,0 кг',
        image: filling16,
      },
      {
        id: 16,
        category: 'honneyCake',
        title: 'Бисквитный медовик',
        subtitle: '"карамельная нежность"',
        text: 'Воздушные медовые бисквиты в прослойке сметанно-сливочный крем и нежная сливочная карамель',
        weight: '2,0 кг',
        image: filling13,
      },
    ]
  },
  reducers: {
    setFillings : (state, action) => {
      state.data = action.payload
    }
  }
})

export const { setFillings } = fillingsSlice.actions
export const fillingsReducer = fillingsSlice.reducer
