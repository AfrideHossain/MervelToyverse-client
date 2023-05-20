const PhotoGallery = () => {
  const photos = [
    "https://i.ibb.co/88xMhbd/star-lord-peter-jason-quill-4340716-960-720.jpg",
    "https://i.ibb.co/2ZS189r/black-widow-6208007-960-720.jpg",
    "https://i.ibb.co/kqqtr9j/toy-3930018-960-720.jpg",
    "https://i.ibb.co/y47dSkG/spiderman-3093340-960-720.jpg",
    "https://i.ibb.co/WFjkMdK/groot-super-hero-4340715-960-720.jpg",
    "https://i.ibb.co/QbvrfYv/action-figures-7243788-960-720.jpg",
    "https://i.ibb.co/hWYJ9yj/younglions-1525439-960-720.jpg",
    "https://i.ibb.co/0s97gzz/marvel-5364165-960-720.jpg",
  ];
  return (
    <div className="mt-20 mb-8 p-7 mx-auto bg-black bg-opacity-90 rounded-lg">
      <h1 className="text-3xl pt-4 font-bold text-[#ed1d24] text-center">
        Photos of Our Legendary Toys
      </h1>
      <p className="font-medium text-center text-white">
        Marvelous Figures on Display
      </p>
      <div className="grid md:grid-cols-4 mt-4 p-4 gap-3">
        {photos.map((photo, indx) => (
          <>
            <div key={indx} className="h-auto flex items-center">
              <img className="h-full rounded-lg" src={photo} />
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
