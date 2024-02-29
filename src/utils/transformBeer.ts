import { Beer, TransformedBeer } from '../types/Beer';

export function transformBeer(beer: Beer[]): TransformedBeer[] {
  const res = [];
  for (let i = 0; i < beer.length; i += 1) {
    res.push({
      name: beer[i].name,
      description: beer[i].description,
      id: beer[i].id,
      imageUrl: beer[i].image_url,
    });
  }
  return res;
}
