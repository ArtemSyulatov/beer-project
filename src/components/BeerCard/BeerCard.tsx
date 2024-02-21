interface Props {
  name: string;
  description: string;
  image_url: string;
}

export const BeerCard = ({ name, description, image_url }: Props) => (
  <div>
    <p>{name}</p>
    <p>{description}</p>
    <img src={image_url} alt="" />
  </div>
);
