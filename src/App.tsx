import React from 'react';
import PhotoGrid from './components/PhotoGrid';
import './App.css';

// Mock data for development
const mockPhotos = [
  { id: '1', src: 'https://picsum.photos/400/600?random=1', alt: 'Photo 1', width: 400, height: 600 },
  { id: '2', src: 'https://picsum.photos/400/400?random=2', alt: 'Photo 2', width: 400, height: 400 },
  { id: '3', src: 'https://picsum.photos/400/500?random=3', alt: 'Photo 3', width: 400, height: 500 },
  { id: '4', src: 'https://picsum.photos/400/700?random=4', alt: 'Photo 4', width: 400, height: 700 },
  { id: '5', src: 'https://picsum.photos/400/450?random=5', alt: 'Photo 5', width: 400, height: 450 },
  { id: '6', src: 'https://picsum.photos/400/550?random=6', alt: 'Photo 6', width: 400, height: 550 },
  { id: '7', src: 'https://picsum.photos/400/400?random=7', alt: 'Photo 7', width: 400, height: 400 },
  { id: '8', src: 'https://picsum.photos/400/650?random=8', alt: 'Photo 8', width: 400, height: 650 },
];

function App(): React.JSX.Element {
  return (
    <div className="app">
      <header className="app-header">
        <h1>IFT Images</h1>
        <p>Professional Photo Gallery</p>
      </header>
      <main>
        <PhotoGrid photos={mockPhotos} />
      </main>
    </div>
  );
}

export default App;
