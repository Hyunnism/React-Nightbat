import { useState } from 'react';
import { exhibitionImages, boothImages, stageImages, wallImages, dimensionImages, eventImages } from '../../Data/Data';
import Title from '../Title';

const Album = () => {
  const [category, setCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(12);

  // Gabungkan semua gambar ke dalam satu array
  const allImages = [
    ...exhibitionImages,
    ...boothImages,
    ...stageImages,
    ...wallImages,
    ...dimensionImages,
    ...eventImages,
  ];

  // Filter gambar berdasarkan kategori yang dipilih
  const filteredImages = category === 'All' ? allImages : allImages.filter(image => image.title === category);

  // Ambil hanya gambar yang sesuai dengan jumlah yang terlihat
  const imagesToShow = filteredImages.slice(0, visibleCount);

  const loadMore = () => {
    setVisibleCount(prevCount => prevCount + 12);
  };

  return (
    <div className="py-8 px-4">
      <div className="text-center mb-8 text-2xl">
        <Title text1={'Album'} text2={'Gallery'}/>
      </div>
      <div className="flex flex-wrap justify-center mb-8 gap-2 sm:gap-4">
        <button onClick={() => setCategory('All')} className={`py-2 px-4 ${category === 'All' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'} transition duration-300 ease-in-out transform hover:scale-105`}>All</button>
        <button onClick={() => setCategory('Exhibition')} className={`py-2 px-4 ${category === 'Exhibition' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'} transition duration-300 ease-in-out transform hover:scale-105`}>Exhibition</button>
        <button onClick={() => setCategory('Booth')} className={`py-2 px-4 ${category === 'Booth' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'} transition duration-300 ease-in-out transform hover:scale-105`}>Booth</button>
        <button onClick={() => setCategory('Stage')} className={`py-2 px-4 ${category === 'Stage' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'} transition duration-300 ease-in-out transform hover:scale-105`}>Stage</button>
        <button onClick={() => setCategory('Backdrop & Wall')} className={`py-2 px-4 ${category === 'Backdrop & Wall' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'} transition duration-300 ease-in-out transform hover:scale-105`}>Backdrop & Wall</button>
        <button onClick={() => setCategory('Custom 3D Desain')} className={`py-2 px-4 ${category === 'Custom 3D Desain' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'} transition duration-300 ease-in-out transform hover:scale-105`}>Custom 3D</button>
        <button onClick={() => setCategory('Event Organizer')} className={`py-2 px-4 ${category === 'Event Organizer' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'} transition duration-300 ease-in-out transform hover:scale-105`}>Event Organizer</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8">
        {imagesToShow.map(image => (
          <div key={image.id} className="relative border rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl">
            <div className="relative overflow-hidden group">
              <img 
                src={image.src} 
                alt={image.title} 
                className="w-full h-64 object-cover transition duration-300 ease-in-out transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                <h3 className="text-white text-xl font-bold">{image.title}</h3>
              </div>
            </div>
            <div className="p-4">
              <p className="text-gray-700">{image.description}</p>
            </div>
          </div>
        ))}
      </div>

      {filteredImages.length > visibleCount && (
        <div className="text-center mt-8">
          <button onClick={loadMore} className="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105">
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Album;
