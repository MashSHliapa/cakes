import { createSlice } from '@reduxjs/toolkit'
import cake1 from '../components/images/cakes/cake1.jpg'
import cake2 from '../components/images/cakes/cake2.jpg'
import cake3 from '../components/images/cakes/cake3.jpg'

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
        title: 'Торт котик',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        weight: '500 г',
        image: cake1,
      },
      {
        id: 5,
        category: 'children',
        title: 'Торт 1 годик',
        subtitle: 'Десерт lorem ipsum Десерт lorem ipsumДесерт lorem ipsumДесерт lorem ipsumДесерт lorem ipsumДесерт lorem ipsumДесерт lorem ipsumДесерт lorem ipsumДесерт lorem ipsumДесерт lorem ipsum',
        weight: '1000 г',
        image: cake2,
      },
      {
        id: 6,
        category: 'for_men',
        title: 'Торт день рождение',
        subtitle: 'Десерт lorem ipsum Десерт lorem ipsumДесерт lorem ipsumДесерт lorem ipsumДесерт',
        weight: '1300 г',
        image: cake3,
      }
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
