function Card({ image, title, description, genre, rating }) {
  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 ease-in-out overflow-hidden">
      <img className="w-full h-48 object-cover" src={image} alt={title} />

      <div className="p-4 space-y-2">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-600">{description}</p>
        <div className="flex justify-between items-center text-sm text-gray-500 mt-2">
          <span className="bg-gray-100 px-2 py-1 rounded-full">{genre}</span>
          <span className="text-yellow-500 font-medium">⭐{rating}</span>
        </div>
      </div>
    </div>
  );
}

export default  Card