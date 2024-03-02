export interface Beer {
  name: string;
  description: string;
  id: number;
  image_url: string;
}

export interface TransformedBeer {
  name: string;
  description: string;
  id: number;
  imageUrl: string;
  key: number;
}
