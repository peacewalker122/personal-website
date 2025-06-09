function BlogCard({ title, description, imageUrl, author, date }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="text-sm text-gray-500">
          <p>By {author}</p>
          <p>{new Date(date).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
