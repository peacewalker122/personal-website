import Navbar from "./components/Navbar/Navbar";
import haikei from "./assets/layered-waves-haikei.svg";
import { getAllPosts } from "./lib/post";
import { ErrorBoundary } from "react-error-boundary";
import BlogCard from "./components/CardBlog/Card";

function App() {
  const posts = getAllPosts();

  console.log("posts: ", posts);

  return (
    <ErrorBoundary fallback={<p>Something bad happened!</p>}>
      <main className="relative text-white min-h-screen w-screen">
        <Navbar title={"Daniel Anugerah"} />
        <section className="container flex flex-col items-center justify-center h-screen flow">
          <img
            src={haikei}
            alt="Haikei Background"
            className="absolute inset-0 w-full h-full object-cover -z-10"
          />
          <div className="flex items-center justify-center flex-col">
            <h1 className="text-xl sm:text-4xl font-bold text-black">
              Hi, I'm Daniel Anugerah
            </h1>
            <p className="text-md sm:text-lg text-black mt-8 ">
              I'm no one, man and I don't know what I'm doing.
            </p>
            <button
              type="button"
              className="mt-6 px-6 py-2 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition-colors duration-300"
            >
              View My Work
            </button>
          </div>
        </section>

        <section className="flex flex-col justify-start py-12 px-6 bg-white text-black flow">
          <h1 className="text-3xl font-bold mb-12">Recent Posts</h1>

          <div className="grid gap-6 md:grid-cols-2 gap">
            {posts.map((post) =>
              BlogCard({
                title: post.title,
                description: post.excerpt,
                date: post.date,
                imageUrl: post.image_url || "https://via.placeholder.com/150",
              }),
            )}
          </div>
        </section>
      </main>
    </ErrorBoundary>
  );
}

export default App;
