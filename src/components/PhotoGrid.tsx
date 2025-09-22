import React from 'react';
import './PhotoGrid.css';

interface Photo {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface PhotoGridProps {
  photos: Photo[];
}

const PhotoGrid: React.FC<PhotoGridProps> = ({ photos }) => {
  return (
    <div className="photo-grid">
      {photos.map((photo) => (
        <div key={photo.id} className="photo-item">
          <img src={photo.src} alt={photo.alt} />
        </div>
      ))}
    </div>
  );
};

export default PhotoGrid;
