import { PostData } from '../types/interfaces';

export const cakeDistribution = (array: PostData[], start: number, end: number) => {
  return array.slice(start, end).map((item: PostData, index) => (
    <div key={item.id} className={`cakes__item ${[1, 4, 6, 8].includes(index) ? 'cakes__item-center' : ''}`}>
      <img src={item.image} alt="img"></img>
    </div>
  ));
};
