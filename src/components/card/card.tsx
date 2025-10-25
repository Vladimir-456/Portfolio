import { type JSX } from 'react';

type CardProps = {
  readonly imageURL: string;
  readonly title: string;
  readonly description: string;
};

const Card = ({ imageURL, title, description }: CardProps): JSX.Element => {
  return (
    <article className="max-w-sm mx-auto mt-8 rounded-xl bg-white shadow-md overflow-hidden 
        hover:shadow-2xl hover:scale-105 hover:bg-blue-500 transition duration-300 ease-in-out cursor-pointer">
      <div className="flex items-center gap-4 p-4">
        <div className="flex-shrink-0">
          <img
            src={imageURL}
            alt={title}
            className="w-12 h-12 rounded-md object-cover"
          />
        </div>

        <div>
          <h3 className="text-xl font-medium text-black hover:text-white">{title}</h3>
          <p className="text-gray-500 hover:text-white">{description}</p>
        </div>
      </div>
    </article>
  );
};

export default Card;