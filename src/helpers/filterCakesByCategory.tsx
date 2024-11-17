import { PostData } from '../types/interfaces';

export function filterCakesByCategory(category: string, array: PostData[]) {
  const filterCakes = array.filter((item: PostData) => item.category === category);
  return filterCakes;
}
