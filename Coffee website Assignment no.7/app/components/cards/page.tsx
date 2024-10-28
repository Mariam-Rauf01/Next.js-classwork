import React from 'react';


interface CardProps {
  title: string[];
  description: string;
  imageUrl: string;
}

function Card({ title, description, imageUrl }: CardProps) {

  return (
    <div className="relative w-96 h-auto overflow-hidden rounded-lg shadow-lg hover:text-red-600 transition-colors duration-200 ease-in-out hover:bg-red-600 hover:text-white">
  {/* Card content here */}
      <img src={imageUrl} alt={title.join(' ')} className="object-cover w-full h-64 rounded-t-lg" />

      {/* Title and description in a transparent box below the card */}
      <div className="bg-black bg-opacity-60 h-auto p-4 text-white">
        <h3 className="text-lg font-outfit font-semibold">
          {title.map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </h3>
        <p className="text-sm font-outfit mt-2">{description}</p>
      </div>
    </div>
  );
}

export default Card;



