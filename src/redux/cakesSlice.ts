import { createSlice } from '@reduxjs/toolkit';
import cake3 from '../components/images/cakes/for_men/cake3.jpg';
import balls from '../components/images/cakes/for_children/balls.jpg';
import cherry from '../components/images/cakes/for_men/cherry.jpg';
import butterfly from '../components/images/cakes/for_children/butterfly.jpg';
import balls_black from '../components/images/cakes/for_men/balls_black.jpg';
import leopard_pink from '../components/images/cakes/for_women/leopard_pink.jpg';
import pony4 from '../components/images/cakes/for_children/pony4.jpg';
import pies1 from '../components/images/cakes/pies/pies1.jpg';
import pies2 from '../components/images/cakes/pies/pies2.jpg';
import pies3 from '../components/images/cakes/pies/pies3.jpg';
import pies4 from '../components/images/cakes/pies/pies4.jpg';
import pies5 from '../components/images/cakes/pies/pies5.jpg';
import pies6 from '../components/images/cakes/pies/pies6.jpg';
import pies7 from '../components/images/cakes/pies/pies7.jpg';
import set1 from '../components/images/cakes/sets/set1.jpg';
import set2 from '../components/images/cakes/sets/set2.jpg';
import set3 from '../components/images/cakes/sets/set3.jpg';
import set4 from '../components/images/cakes/sets/set4.jpg';
import set5 from '../components/images/cakes/sets/set5.jpg';
import set6 from '../components/images/cakes/sets/set6.jpg';
import set7 from '../components/images/cakes/sets/set7.jpg';
import christening1 from '../components/images/cakes/for_christening/christening1.jpg';
import christening2 from '../components/images/cakes/for_christening/christening2.jpg';
import christening3 from '../components/images/cakes/for_christening/christening3.jpg';
import christening4 from '../components/images/cakes/for_christening/christening4.jpg';
import christening5 from '../components/images/cakes/for_christening/christening5.jpg';
import christening6 from '../components/images/cakes/for_christening/christening6.jpg';
import christening7 from '../components/images/cakes/for_christening/christening7.jpg';
import wedding1 from '../components/images/cakes/for_wedding/wedding1.jpg';
import wedding2 from '../components/images/cakes/for_wedding/wedding2.jpg';
import wedding3 from '../components/images/cakes/for_wedding/wedding3.jpg';
import wedding4 from '../components/images/cakes/for_wedding/wedding4.jpg';
import wedding5 from '../components/images/cakes/for_wedding/wedding5.jpg';
import wedding9 from '../components/images/cakes/for_wedding/wedding9.jpg';
import wedding8 from '../components/images/cakes/for_wedding/wedding8.jpg';
import for_men1 from '../components/images/cakes/for_men/for_men1.jpg';
import for_men2 from '../components/images/cakes/for_men/for_men2.jpg';
import for_men3 from '../components/images/cakes/for_men/for_men3.jpg';
import for_men4 from '../components/images/cakes/for_men/for_men4.jpg';
import for_men5 from '../components/images/cakes/for_men/for_men5.jpg';
import for_men7 from '../components/images/cakes/for_men/for_men7.jpg';
import boss43 from '../components/images/cakes/for_men/boss43.jpg';
import for_women1 from '../components/images/cakes/for_women/carrot.jpg';
import for_women2 from '../components/images/cakes/for_women/chok3.jpg';
import for_women3 from '../components/images/cakes/for_women/pink.jpg';
import for_women5 from '../components/images/cakes/for_women/raspberries.jpg';
import for_women4 from '../components/images/cakes/for_women/for_women4.jpg';
import for_women6 from '../components/images/cakes/for_women/women2.jpg';
import for_women7 from '../components/images/cakes/for_women/women3.jpg';
import for_women8 from '../components/images/cakes/for_women/women4.jpg';
import for_women9 from '../components/images/cakes/for_women/yellow.jpg';
import for_women11 from '../components/images/cakes/for_women/for_women11.jpg';
import for_women12 from '../components/images/cakes/for_women/for_women12.jpg';
import for_women13 from '../components/images/cakes/for_women/for_women13.jpg';
import for_women14 from '../components/images/cakes/for_women/for_women14.jpg';
import for_women15 from '../components/images/cakes/for_women/for_women15.jpg';
import for_women16 from '../components/images/cakes/for_women/for_women16.jpg';
import open7 from '../components/images/cakes/open/open7.jpg';
import open1 from '../components/images/cakes/open/open1.jpg';
import open4 from '../components/images/cakes/open/open4.jpg';
import open2 from '../components/images/cakes/open/open2.jpg';
import open5 from '../components/images/cakes/open//open5.jpg';
import open3 from '../components/images/cakes/open/open3.jpg';
import open6 from '../components/images/cakes/open/open6.jpg';
import butterfly2 from '../components/images/cakes/for_children/butterfly2.jpg';
import cube8 from '../components/images/cakes/for_children/cube8.jpg';
import football from '../components/images/cakes/for_children/football.jpg';
import minion from '../components/images/cakes/for_children/minion.jpg';
import pony5 from '../components/images/cakes/for_children/pony5.jpg';
import ocean from '../components/images/cakes/for_children/ocean.jpg';
import icecream from '../components/images/cakes/for_children/icecream2.jpg';
import cat from '../components/images/cakes/for_children/cat.jpg';
import doggy from '../components/images/cakes/for_children/doggy.jpg';
import mikki from '../components/images/cakes/for_children/mikki.jpg';
import maincraft from '../components/images/cakes/for_children/maincraft.jpg';
import elsa from '../components/images/cakes/for_children/elsa.jpg';
import rabbit from '../components/images/cakes/for_children/rabbit.jpg';
import toca from '../components/images/cakes/for_children/toca.jpg';
import bear1 from '../components/images/cakes/for_children/bear1.jpg';
import bear4 from '../components/images/cakes/for_children/bear4.jpg';
import sonic from '../components/images/cakes/for_children/sonic.jpg';
import kitty from '../components/images/cakes/for_children/kitty.jpg';
import ralli from '../components/images/cakes/for_children/ralli.jpg';
import two_tier1 from '../components/images/cakes/two_tier/two_tier1.jpg';
import two_tier2 from '../components/images/cakes/two_tier/two_tier2.jpg';
import two_tier3 from '../components/images/cakes/two_tier/two_tier3.jpg';
import two_tier4 from '../components/images/cakes/two_tier/two_tier4.jpg';
import two_tier5 from '../components/images/cakes/two_tier/two_tier5.jpg';
import two_tier6 from '../components/images/cakes/two_tier/two_tier6.jpg';
import two_tier7 from '../components/images/cakes/two_tier/two_tier7.jpg';
import sphere1 from '../components/images/cakes/sphere/sphere1.jpg';
import sphere2 from '../components/images/cakes/sphere/sphere2.jpg';
import sphere3 from '../components/images/cakes/sphere/sphere3.jpg';
import sphere4 from '../components/images/cakes/sphere/sphere4.jpg';
import sphere5 from '../components/images/cakes/sphere/sphere5.jpg';
import sphere6 from '../components/images/cakes/sphere/sphere6.jpg';
import sphere7 from '../components/images/cakes/sphere/sphere7.jpg';
import sphere8 from '../components/images/cakes/sphere/sphere8.jpg';
import sphere9 from '../components/images/cakes/sphere/sphere9.jpg';
import sphere10 from '../components/images/cakes/sphere/sphere10.jpg';

export const cakesSlice = createSlice({
  name: 'cakes',
  initialState: {
    data: [
      {
        id: 1,
        category: 'for_wedding',
        image: wedding1,
      },
      {
        id: 2,
        category: 'for_wedding',
        image: wedding5,
      },
      {
        id: 3,
        category: 'for_wedding',
        image: wedding3,
      },
      {
        id: 4,
        category: 'for_wedding',
        image: wedding2,
      },
      {
        id: 5,
        category: 'for_wedding',
        image: wedding8,
      },
      {
        id: 6,
        category: 'for_wedding',
        image: wedding4,
      },
      {
        id: 7,
        category: 'for_wedding',
        image: wedding9,
      },
      //////////////////////// for_christening
      {
        id: 8,
        category: 'for_christening',
        image: christening4,
      },
      {
        id: 9,
        category: 'for_christening',
        image: christening1,
      },
      {
        id: 10,
        category: 'for_christening',
        image: christening2,
      },
      {
        id: 11,
        category: 'for_christening',
        image: christening3,
      },
      {
        id: 129,
        category: 'for_christening',
        image: christening5,
      },
      {
        id: 130,
        category: 'for_christening',
        image: christening6,
      },
      {
        id: 131,
        category: 'for_christening',
        image: christening7,
      },
      /////////////////////////// two_tier
      {
        id: 52,
        category: 'two_tier',
        image: two_tier1,
      },
      {
        id: 74,
        category: 'two_tier',
        image: two_tier2,
      },
      {
        id: 75,
        category: 'two_tier',
        image: two_tier3,
      },
      {
        id: 76,
        category: 'two_tier',
        image: two_tier4,
      },
      {
        id: 77,
        category: 'two_tier',
        image: two_tier7,
      },
      {
        id: 78,
        category: 'two_tier',
        image: two_tier6,
      },
      {
        id: 80,
        category: 'two_tier',
        image: two_tier5,
      },
      ///////////////////////// open_cakes
      {
        id: 19,
        category: 'open_cakes',
        image: open1,
      },
      {
        id: 20,
        category: 'open_cakes',
        image: open2,
      },
      {
        id: 23,
        category: 'open_cakes',
        image: open3,
      },
      {
        id: 30,
        category: 'open_cakes',
        image: open4,
      },
      {
        id: 38,
        category: 'open_cakes',
        image: open5,
      },
      {
        id: 40,
        category: 'open_cakes',
        image: open6,
      },
      {
        id: 50,
        category: 'open_cakes',
        image: open7,
      },
      //////////////////// for_men
      {
        id: 13,
        category: 'for_men',
        image: boss43,
      },
      {
        id: 15,
        category: 'for_men',
        image: cherry,
      },
      {
        id: 16,
        category: 'for_men',
        image: cake3,
      },
      {
        id: 24,
        category: 'for_men',
        image: for_men4,
      },
      {
        id: 27,
        category: 'for_men',
        image: for_men3,
      },
      {
        id: 28,
        category: 'for_men',
        image: for_men2,
      },
      {
        id: 36,
        category: 'for_men',
        image: for_men1,
      },
      {
        id: 70,
        category: 'for_men',
        image: for_men5,
      },
      {
        id: 72,
        category: 'for_men',
        image: for_men7,
      },
      {
        id: 71,
        category: 'for_men',
        image: balls_black,
      },
      /////////////////////////////// for_women
      {
        id: 12,
        category: 'for_women',
        image: for_women6,
      },
      {
        id: 26,
        category: 'for_women',
        image: for_women8,
      },
      {
        id: 29,
        category: 'for_women',
        image: leopard_pink,
      },
      {
        id: 31,
        category: 'for_women',
        image: for_women1,
      },
      {
        id: 33,
        category: 'for_women',
        image: for_women5,
      },
      {
        id: 35,
        category: 'for_women',
        image: for_women7,
      },
      {
        id: 37,
        category: 'for_women',
        image: for_women9,
      },
      {
        id: 43,
        category: 'for_women',
        image: for_women3,
      },
      {
        id: 44,
        category: 'for_women',
        image: for_women2,
      },
      {
        id: 49,
        category: 'for_women',
        image: for_women4,
      },
      {
        id: 99,
        category: 'for_women',
        image: for_women11,
      },
      {
        id: 100,
        category: 'for_women',
        image: for_women12,
      },
      {
        id: 101,
        category: 'for_women',
        image: for_women13,
      },
      {
        id: 102,
        category: 'for_women',
        image: for_women16,
      },
      {
        id: 103,
        category: 'for_women',
        image: for_women15,
      },
      {
        id: 104,
        category: 'for_women',
        image: for_women14,
      },
      ///////////////////////// sphere
      {
        id: 90,
        category: 'sphere',
        image: sphere2,
      },
      {
        id: 91,
        category: 'sphere',
        image: sphere1,
      },
      {
        id: 92,
        category: 'sphere',
        image: sphere3,
      },
      {
        id: 93,
        category: 'sphere',
        image: sphere4,
      },
      {
        id: 94,
        category: 'sphere',
        image: sphere6,
      },
      {
        id: 95,
        category: 'sphere',
        image: sphere5,
      },
      {
        id: 96,
        category: 'sphere',
        image: sphere7,
      },
      {
        id: 97,
        category: 'sphere',
        image: sphere9,
      },
      {
        id: 98,
        category: 'sphere',
        image: sphere8,
      },
      {
        id: 99,
        category: 'sphere',
        image: sphere10,
      },
      ////////////////////////// pies
      {
        id: 18,
        category: 'pie',
        image: pies1,
      },
      {
        id: 25,
        category: 'pie',
        image: pies2,
      },
      {
        id: 21,
        category: 'pie',
        image: pies3,
      },
      {
        id: 39,
        category: 'pie',
        image: pies4,
      },
      {
        id: 42,
        category: 'pie',
        image: pies5,
      },
      {
        id: 120,
        category: 'pie',
        image: pies6,
      },
      {
        id: 128,
        category: 'pie',
        image: pies7,
      },

      ////////////////////////// sets
      {
        id: 22,
        category: 'set',
        image: set1,
      },
      {
        id: 32,
        category: 'set',
        image: set2,
      },
      {
        id: 45,
        category: 'set',
        image: set3,
      },
      {
        id: 126,
        category: 'set',
        image: set4,
      },
      {
        id: 46,
        category: 'set',
        image: set5,
      },
      {
        id: 125,
        category: 'set',
        image: set6,
      },
      {
        id: 121,
        category: 'set',
        image: set7,
      },
      /////////////////////////// for_children
      {
        id: 14,
        category: 'for_children',
        image: balls,
      },
      {
        id: 17,
        category: 'for_children',
        image: football,
      },
      {
        id: 34,
        category: 'for_children',
        image: cube8,
      },
      {
        id: 41,
        category: 'for_children',
        image: cat,
      },
      {
        id: 47,
        category: 'for_children',
        image: sonic,
      },
      {
        id: 48,
        category: 'for_children',
        image: butterfly,
      },
      {
        id: 51,
        category: 'for_children',
        image: pony4,
      },

      {
        id: 53,
        category: 'for_children',
        image: butterfly2,
      },
      {
        id: 54,
        category: 'for_children',
        image: kitty,
      },
      {
        id: 55,
        category: 'for_children',
        image: pony5,
      },
      {
        id: 56,
        category: 'for_children',
        image: minion,
      },
      {
        id: 57,
        category: 'for_children',
        image: ocean,
      },
      {
        id: 58,
        category: 'for_children',
        image: bear4,
      },
      {
        id: 59,
        category: 'for_children',
        image: mikki,
      },
      {
        id: 60,
        category: 'for_children',
        image: ralli,
      },
      {
        id: 61,
        category: 'for_children',
        image: icecream,
      },
      {
        id: 62,
        category: 'for_children',
        image: maincraft,
      },
      {
        id: 63,
        category: 'for_children',
        image: doggy,
      },
      {
        id: 64,
        category: 'for_children',
        image: elsa,
      },
      {
        id: 65,
        category: 'for_children',
        image: rabbit,
      },
      {
        id: 66,
        category: 'for_children',
        image: toca,
      },
      {
        id: 67,
        category: 'for_children',
        image: bear1,
      },
      {
        id: 68,
        category: 'for_children',
        image: bear4,
      },
    ],
  },
  reducers: {
    setCakes: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setCakes } = cakesSlice.actions;
export const cakesReducer = cakesSlice.reducer;
