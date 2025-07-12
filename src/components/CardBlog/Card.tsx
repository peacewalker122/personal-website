interface BlogCardProps {
  title: string;
  description: string;
  imageUrl: string;
  author?: string;
  date: string;
}

function BlogCard({
  title,
  description,
  imageUrl,
  author,
  date,
}: BlogCardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover hover:scale-105"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="text-sm text-gray-500">
          {author && <p>By {author}</p>}
          <p>{new Date(date).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;

