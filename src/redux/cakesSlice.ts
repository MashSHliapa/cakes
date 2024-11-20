import { createSlice } from '@reduxjs/toolkit';
import cake3 from '../components/images/cakes/for_men/cake3.jpg';
import balls from '../components/images/cakes/for_children/balls.jpg';
import bear from '../components/images/cakes/for_children/bear.jpg';
import cherry from '../components/images/cakes/for_men/cherry.jpg';
import butterfly from '../components/images/cakes/for_children/butterfly.jpg';
import balls_black from '../components/images/cakes/for_men/balls_black.jpg';
import leopard_pink from '../components/images/cakes/for_women/leopard_pink.jpg';
import icecreame_cakes from '../components/images/cakes/pies/icecreame_cakes.jpg';
import pony4 from '../components/images/cakes/for_children/pony4.jpg';
import pies1 from '../components/images/cakes/pies/pies1.jpg';
import pies2 from '../components/images/cakes/pies/pies2.jpg';
import pies3 from '../components/images/cakes/pies/pies3.jpg';
import pies4 from '../components/images/cakes/pies/popsicle1.jpg';
import set1 from '../components/images/cakes/sets/set1.jpg';
import set2 from '../components/images/cakes/sets/set2.jpg';
import set3 from '../components/images/cakes/sets/set3.jpg';
import set5 from '../components/images/cakes/sets/set5.jpg';
import christening1 from '../components/images/cakes/for_christening/christening1.jpg';
import christening2 from '../components/images/cakes/for_christening/christening2.jpg';
import christening3 from '../components/images/cakes/for_christening/christening3.jpg';
import christening4 from '../components/images/cakes/for_christening/christening4.jpg';
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
import for_women4 from '../components/images/cakes/for_women/raspberries.jpg';
import for_women5 from '../components/images/cakes/for_women/strawberry.jpg';
import for_women6 from '../components/images/cakes/for_women/women2.jpg';
import for_women7 from '../components/images/cakes/for_women/women3.jpg';
import for_women8 from '../components/images/cakes/for_women/women4.jpg';
import for_women9 from '../components/images/cakes/for_women/yellow.jpg';
import open_heart3 from '../components/images/cakes/open/open_heart3.jpg';
import open_heart4 from '../components/images/cakes/open/open_heart4.jpg';
import open_heart5 from '../components/images/cakes/open/open_heart5.jpg';
import open_heart6 from '../components/images/cakes/open/open_star.jpg';
import open_heart1 from '../components/images/cakes/open/open_heart1.jpg';
import open_heart2 from '../components/images/cakes/open/open_heart2.jpg';
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
      {
        id: 12,
        category: 'for_women',
        image: for_women6,
      },
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
      {
        id: 18,
        category: 'pie',
        image: icecreame_cakes,
      },
      {
        id: 19,
        category: 'open_cakes',
        image: open_heart1,
      },
      {
        id: 20,
        category: 'open_cakes',
        image: open_heart5,
      },
      {
        id: 21,
        category: 'pie',
        image: pies1,
      },
      {
        id: 22,
        category: 'set',
        image: set1,
      },
      {
        id: 23,
        category: 'open_cakes',
        image: bear,
      },

      {
        id: 25,
        category: 'pie',
        image: pies4,
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
        id: 30,
        category: 'open_cakes',
        image: open_heart6,
      },
      {
        id: 31,
        category: 'for_women',
        image: for_women1,
      },
      {
        id: 32,
        category: 'set',
        image: set2,
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
        id: 38,
        category: 'open_cakes',
        image: open_heart2,
      },
      {
        id: 39,
        category: 'pie',
        image: pies2,
      },
      {
        id: 40,
        category: 'open_cakes',
        image: open_heart3,
      },
      {
        id: 42,
        category: 'pie',
        image: pies3,
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
        id: 45,
        category: 'set',
        image: set3,
      },
      {
        id: 46,
        category: 'set',
        image: set5,
      },

      {
        id: 49,
        category: 'for_women',
        image: for_women4,
      },
      {
        id: 50,
        category: 'open_cakes',
        image: open_heart4,
      },
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
