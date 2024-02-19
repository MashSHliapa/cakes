import { createSlice } from '@reduxjs/toolkit'
import cake1 from '../components/images/cakes/for_children/cake1.jpg'
import cake2 from '../components/images/cakes/for_children/cake2.jpg'
import cake3 from '../components/images/cakes/for_men/cake3.jpg'
import balls from '../components/images/cakes/for_children/balls.jpg'
import bear from '../components/images/cakes/for_children/bear.jpg'
import cherry from '../components/images/cakes/for_men/cherry.jpg'
import butterfly from '../components/images/cakes/for_children/butterfly.jpg'
import balls_black from '../components/images/cakes/for_men/balls_black.jpg'
import leopard_pink from '../components/images/cakes/for_women/leopard_pink.jpg'
import icecreame_cakes from '../components/images/cakes/pies/icecreame_cakes.jpg'
import pony4 from '../components/images/cakes/for_children/pony4.jpg'
import lol3 from '../components/images/cakes/for_children/lol3.jpg'
import for_boy from '../components/images/cakes/for_children/boy10.jpg'
import pies1 from '../components/images/cakes/pies/pies1.jpg'
import pies2 from '../components/images/cakes/pies/pies2.jpg'
import pies3 from '../components/images/cakes/pies/pies3.jpg'
import pies4 from '../components/images/cakes/pies/popsicle1.jpg'
import set1 from '../components/images/cakes/sets/set1.jpg'
import set2 from '../components/images/cakes/sets/set2.jpg'
import set3 from '../components/images/cakes/sets/set3.jpg'
import set5 from '../components/images/cakes/sets/set5.jpg'
import christening1 from '../components/images/cakes/for_christening/christening1.jpg'
import christening2 from '../components/images/cakes/for_christening/christening2.jpg'
import christening3 from '../components/images/cakes/for_christening/christening3.jpg'
import wedding1 from '../components/images/cakes/for_wedding/wedding1.jpg'
import wedding2 from '../components/images/cakes/for_wedding/wedding2.jpg'
import wedding3 from '../components/images/cakes/for_wedding/wedding3.jpg'
import wedding4 from '../components/images/cakes/for_wedding/wedding4.jpg'
import wedding5 from '../components/images/cakes/for_wedding/wedding5.jpg'
import wedding6 from '../components/images/cakes/for_wedding/wedding6.jpg'
import for_men1 from '../components/images/cakes/for_men/for_men1.jpg'
import for_men2 from '../components/images/cakes/for_men/for_men2.jpg'
import for_men3 from '../components/images/cakes/for_men/for_men3.jpg'
import for_men4 from '../components/images/cakes/for_men/boss43.jpg'
import for_women1 from '../components/images/cakes/for_women/carrot.jpg'
import for_women2 from '../components/images/cakes/for_women/chok3.jpg'
import for_women3 from '../components/images/cakes/for_women/pink.jpg'
import for_women4 from '../components/images/cakes/for_women/raspberries.jpg'
import for_women5 from '../components/images/cakes/for_women/strawberry.jpg'
import for_women6 from '../components/images/cakes/for_women/women2.jpg'
import for_women7 from '../components/images/cakes/for_women/women3.jpg'
import for_women8 from '../components/images/cakes/for_women/women4.jpg'
import for_women9 from '../components/images/cakes/for_women/yellow.jpg'
import open_heart3 from '../components/images/cakes/open/open_heart3.jpg'
import open_heart4 from '../components/images/cakes/open/open_heart4.jpg'
import open_heart5 from '../components/images/cakes/open/open_heart5.jpg'
import open_heart6 from '../components/images/cakes/open/open_star.jpg'
import open_heart1 from '../components/images/cakes/open/open_heart1.jpg'
import open_heart2 from '../components/images/cakes/open/open_heart2.jpg'



export const cakesSlice = createSlice({
  name: 'cakes',
  initialState: {
    data: [
      {
        id: 1,
        category: 'for_women',
        title: 'Торт день рождение',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        weight: '1300 г',
        image: for_women6,
      },
      {
        id: 2,
        category: 'for_christening',
        title: 'Торт на Крещение',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        image: christening2,
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
        category: 'for_children',
        title: 'Торт день рождение',
        subtitle: 'Десерт lorem ipsum Десерт lorem ipsumДесерт lorem ipsumДесерт lorem ipsumДесерт',
        weight: '1300 г',
        image: balls,
      },
      {
        id: 5,
        category: 'for_wedding',
        title: 'Торт для свадьбы',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        image: wedding2,
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
        id: 8,
        category: 'for_men',
        title: 'Торт день рождение',
        subtitle: 'Десерт ',
        weight: '1300 г',
        image: balls_black,
      },
      {
        id: 9,
        category: 'for_children',
        title: 'Торт 1 годик',
        subtitle: 'Десерт lorem ipsum Десерт lorem ipsumДесерт lorem ipsumДесерт lorem ipsumДесерт lorem ipsumДесерт lorem ipsumДесерт lorem ipsumДесерт lorem ipsumДесерт lorem ipsumДесерт lorem ipsum',
        weight: '1000 г',
        image: lol3,
      },
      {
        id: 10,
        category: 'pie',
        title: 'Торт день рождение',
        subtitle: 'Десерт ',
        weight: '1300 г',
        image: icecreame_cakes,
      },
      {
        id: 11,
        category: 'open_cakes',
        title: 'Торт день рождение',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        weight: '1300 г',
        image: open_heart1,
      },
      {
        id: 12,
        category: 'open_cakes',
        title: 'Торт день рождение',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        image: open_heart5,
      },
      {
        id: 13,
        category: 'pie',
        title: 'Торт день рождение',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        image: pies1,
      },
      {
        id: 14,
        category: 'set',
        title: 'Торт день рождение',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        image: set1,
      },
      {
        id: 15,
        category: 'for_christening',
        title: 'Торт на Крещение',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        image: christening1,
      },
      {
        id: 16,
        category: 'for_wedding',
        title: 'Торт для свадьбы',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        image: wedding1,
      },
      {
        id: 17,
        category: 'for_children',
        title: 'Торт день рождение',
        subtitle: 'Десерт ',
        weight: '1300 г',
        image: bear,
      },
      {
        id: 18,
        category: 'for_wedding',
        title: 'Торт для свадьбы',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        image: wedding3,
      },
      {
        id: 19,
        category: 'for_men',
        title: 'Торт день рождение',
        subtitle: 'Десерт ',
        weight: '1300 г',
        image: for_men4,
      },
      {
        id: 20,
        category: 'for_wedding',
        title: 'Торт для свадьбы',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        image: wedding5,
      },
      {
        id: 21,
        category: 'pie',
        title: 'Торт день рождение',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        image: pies4,
      },
      {
        id: 22,
        category: 'for_women',
        title: 'Торт день рождение',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        weight: '1300 г',
        image: for_women8,
      },
      {
        id: 23,
        category: 'for_men',
        title: 'Торт день рождение',
        subtitle: 'Десерт ',
        weight: '1300 г',
        image: for_men3,
      },
      {
        id: 24,
        category: 'for_men',
        title: 'Торт день рождение',
        subtitle: 'Десерт ',
        weight: '1300 г',
        image: for_men2,
      },
      {
        id: 25,
        category: 'for_wedding',
        title: 'Торт для свадьбы',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        image: wedding4,
      },
      {
        id: 26,
        category: 'for_women',
        title: 'Торт день рождение',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        weight: '1300 г',
        image: leopard_pink,
      },
      {
        id: 27,
        category: 'open_cakes',
        title: 'Торт день рождение',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        image: open_heart6,
      },
      {
        id: 28,
        category: 'for_women',
        title: 'Торт день рождение',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        weight: '1300 г',
        image: for_women1,
      },
      {
        id: 29,
        category: 'set',
        title: 'Торт день рождение',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        image: set2,
      },
      {
        id: 30,
        category: 'for_wedding',
        title: 'Торт для свадьбы',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        image: wedding6,
      },
      {
        id: 31,
        category: 'for_women',
        title: 'Торт день рождение',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        weight: '1300 г',
        image: for_women5,
      },
      {
        id: 32,
        category: 'for_children',
        title: 'Торт котик',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        weight: '500 г',
        image: cake1,
      },
      {
        id: 33,
        category: 'for_women',
        title: 'Торт день рождение',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        weight: '1300 г',
        image: for_women7,
      },
      {
        id: 34,
        category: 'for_men',
        title: 'Торт день рождение',
        subtitle: 'Десерт ',
        weight: '1300 г',
        image: for_men1,
      },
      {
        id: 35,
        category: 'for_women',
        title: 'Торт день рождение',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        weight: '1300 г',
        image: for_women9,
      },
      {
        id: 36,
        category: 'open_cakes',
        title: 'Торт день рождение',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        image: open_heart2,
      },
      {
        id: 37,
        category: 'pie',
        title: 'Торт день рождение',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        image: pies2,
      },
      {
        id: 38,
        category: 'open_cakes',
        title: 'Торт день рождение',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        image: open_heart3,
      },
      {
        id: 39,
        category: 'for_children',
        title: 'Торт 1 годик',
        subtitle: 'Десерт lorem ipsum Десерт lorem ipsumДесерт lorem ipsumДесерт lorem ipsumДесерт lorem ipsumДесерт lorem ipsumДесерт lorem ipsumДесерт lorem ipsumДесерт lorem ipsumДесерт lorem ipsum',
        weight: '1000 г',
        image: pony4,
      },
      {
        id: 40,
        category: 'pie',
        title: 'Торт день рождение',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        image: pies3,
      },
      {
        id: 41,
        category: 'for_women',
        title: 'Торт день рождение',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        weight: '1300 г',
        image: for_women3,
      },
      {
        id: 42,
        category: 'for_women',
        title: 'Торт день рождение',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        weight: '1300 г',
        image: for_women2,
      },
      {
        id: 43,
        category: 'set',
        title: 'Торт день рождение',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        image: set3,
      },
      {
        id: 44,
        category: 'set',
        title: 'Торт день рождение',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        image: set5,
      },
      {
        id: 45,
        category: 'for_children',
        title: 'Торт 1 годик',
        subtitle: 'Десерт lorem ipsum Десерт lorem ipsumДесерт lorem ipsumДесерт lorem ipsumДесерт lorem ipsumДесерт lorem ipsumДесерт lorem ipsumДесерт lorem ipsumДесерт lorem ipsumДесерт lorem ipsum',
        weight: '1000 г',
        image: cake2,
      },
      {
        id: 46,
        category: 'for_christening',
        title: 'Торт на Крещение',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        image: christening3,
      },
      {
        id: 47,
        category: 'for_children',
        title: 'Торт день рождение',
        subtitle: 'Десерт lorem ipsum Десерт lorem ipsumДесерт lorem ipsumДесерт lorem ipsumДесерт',
        weight: '1300 г',
        image: butterfly,
      },
      {
        id: 48,
        category: 'for_women',
        title: 'Торт день рождение',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        weight: '1300 г',
        image: for_women4,
      },
      {
        id: 49,
        category: 'open_cakes',
        title: 'Торт день рождение',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        image: open_heart4,
      },
      {
        id: 50,
        category: 'for_children',
        title: 'Торт 1 годик',
        subtitle: 'Десерт lorem ipsum Десерт lorem ipsumДесерт lorem ipsumДесерт lorem ipsumДесерт lorem ipsumДесерт lorem ipsumДесерт lorem ipsumДесерт lorem ipsumДесерт lorem ipsumДесерт lorem ipsum',
        weight: '1000 г',
        image: for_boy,
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
