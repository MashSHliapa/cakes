import { createSlice } from '@reduxjs/toolkit'
import cake1 from '../components/images/cakes/cake1.jpg'
import cake2 from '../components/images/cakes/cake2.jpg'
import cake3 from '../components/images/cakes/cake3.jpg'
import balls from '../components/images/cakes/balls.jpg'
import bear from '../components/images/cakes/bear.jpg'
import cherry from '../components/images/cakes/cherry.jpg'
import butterfly from '../components/images/cakes/butterfly.jpg'
import balls_black from '../components/images/cakes/balls_black.jpg'
import leopard_pink from '../components/images/cakes/leopard_pink.jpg'
import icecreame_cakes from '../components/images/cakes/icecreame_cakes.jpg'
import open_heart1 from '../components/images/cakes/open_heart1.jpg'
import open_heart5 from '../components/images/cakes/open_heart5.jpg'
import pies1 from '../components/images/cakes/pies1.jpg'
import set1 from '../components/images/cakes/set1.jpg'
import christening1 from '../components/images/cakes/christening1.jpg'
import wedding2 from '../components/images/cakes/wedding2.jpg'

export const cakesSlice = createSlice({
  name: 'cakes',
  initialState: {
    data: [
      {
        id: 1,
        category: 'children',
        title: 'Торт котик',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        weight: '500 г',
        image: cake1,
      },
      {
        id: 2,
        category: 'children',
        title: 'Торт 1 годик',
        subtitle: 'Десерт lorem ipsum Десерт lorem ipsumДесерт lorem ipsumДесерт lorem ipsumДесерт lorem ipsumДесерт lorem ipsumДесерт lorem ipsumДесерт lorem ipsumДесерт lorem ipsumДесерт lorem ipsum',
        weight: '1000 г',
        image: cake2,
      },
      {
        id: 3,
        category: 'for_men',
        title: 'Торт день рождение',
        subtitle: 'Десерт lorem ipsum Десерт lorem ipsumДесерт lorem ipsumДесерт lorem ipsumДесерт',
        weight: '1300 г',
        image: cake3,
      },
      {
        id: 4,
        category: 'children',
        title: 'Торт день рождение',
        subtitle: 'Десерт lorem ipsum Десерт lorem ipsumДесерт lorem ipsumДесерт lorem ipsumДесерт',
        weight: '1300 г',
        image: balls,
      },
      {
        id: 5,
        category: 'children',
        title: 'Торт день рождение',
        subtitle: 'Десерт ',
        weight: '1300 г',
        image: bear,
      },
      {
        id: 6,
        category: 'for_men',
        title: 'Торт день рождение',
        subtitle: 'Десерт ',
        weight: '1300 г',
        image: cherry,
      },
      {
        id: 7,
        category: 'children',
        title: 'Торт день рождение',
        subtitle: 'Десерт ',
        weight: '1300 г',
        image: butterfly,
      },
      {
        id: 8,
        category: 'for_men',
        title: 'Торт денб рождение',
        subtitle: 'Десерт ',
        weight: '1300 г',
        image: balls_black,
      },
      {
        id: 9,
        category: 'for_women',
        title: 'Торт денб рождение',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        weight: '1300 г',
        image: leopard_pink,
      },
      {
        id: 10,
        category: 'pie',
        title: 'Торт денб рождение',
        subtitle: 'Десерт ',
        weight: '1300 г',
        image: icecreame_cakes,
      },
      {
        id: 11,
        category: 'open',
        title: 'Торт денб рождение',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        weight: '1300 г',
        image: open_heart1,
      },
      {
        id: 12,
        category: 'open',
        title: 'Торт денб рождение',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        image: open_heart5,
      },
      {
        id: 13,
        category: 'pie',
        title: 'Торт денб рождение',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        image: pies1,
      },
      {
        id: 14,
        category: 'set',
        title: 'Торт денб рождение',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        image: set1,
      },
      {
        id: 15,
        category: 'christening',
        title: 'Торт на Крещение',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        image: christening1,
      },
      {
        id: 16,
        category: 'wedding',
        title: 'Торт для свадьбы',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        image: wedding2,
      },
    ]
  },
  reducers: {
    setCakes: (state, action) => {
      state.data = action.payload
    }
  }
})

export const { setCakes } = cakesSlice.actions
export const cakesReducer = cakesSlice.reducer
