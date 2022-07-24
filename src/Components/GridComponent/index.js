import React from 'react';
import { nanoid } from 'nanoid';
import './index.css';

const GridLayout = ({ data, onRemoveClick }) => {
  return (
    <div className="container-grid">
      {data.map((img, i) => {
        return (
          <div
            key={nanoid()}
            className={`div${i + 1}`}
            onClick={() => onRemoveClick(img.id)}
          >
            <img src={img.image.url} alt="favourites img" />
          </div>
        );
      })}
    </div>
  );
};
export default GridLayout;
