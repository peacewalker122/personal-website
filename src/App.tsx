import { ErrorBoundary } from "react-error-boundary";
import haikei from "./assets/layered-waves-haikei.svg";
import BlogCard from "./components/CardBlog/Card";
import Navbar from "./components/Navbar/Navbar";
import { getAllPosts } from "./lib/post";

function App() {
  const posts = getAllPosts();

  return (
    <ErrorBoundary fallback={<p>Something bad happened!</p>}>
      <img
        src={haikei}
        alt="Haikei Background"
        className="absolute inset-0 w-screen h-full object-cover -z-10"
      />
      <main className="relative text-white min-h-screen w-screen">
        <Navbar title={"Daniel Anugerah"} />
        <section className="flex flex-col items-center justify-center h-screen w-screen flow">
          <div className="flex items-center justify-center flex-col">
            <h1 className="text-xl sm:text-4xl font-bold text-black">
              Hi, I'm Daniel Anugerah
            </h1>
            <p className="text-md sm:text-lg text-black mt-4 mx-8 text-pretty items-center">
              A software engineer with a passion for building scalable and
              efficient systems. I specialize in backend development, DevOps,
              and creating developer-friendly experiences.
            </p>
            <button
              type="button"
              className="mt-6 px-6 py-2 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition-colors duration-300"
            >
              View My Work
            </button>
          </div>
        </section>

        <section className="flex flex-col justify-start py-6 px-6 bg-gray-100 text-black flow">
          <h1 className="text-3xl font-bold ">About me</h1>
          <p className="text-lg">
            I start my coding journey at primary school—a one page HTML to
            confess my feelings that actually won over my crush. Later on I'm
            not touching the keyboard anymore and made the keyboard coverup on
            pile of dust. The "serious" stuff started in high school—during a
            covid pandemic, where every activity was online and I don't know
            what I'm doing, I started to dive to this world of programming,
            world of stream of bits and bytes, word of 1s and 0s. The first
            "serious" project I remember was a social-media backend built in GO
            and with that project I started to kick off my career as a software
            engineer. I remember the feeling of getting my first interview &
            test task, the thrill of writing my first production code, and the
            satisfaction of seeing my work deployed live. It was a whirlwind of
            learning, debugging, and late-night coding sessions fueled by coffee
            and sheer determination.
          </p>

          <p className="text-lg mt-4">
            Fast-forward two-plus years as a professional software engineer and
            I’ve shipped production systems in Go, Rust, TypeScript, and even a
            touch of Zig. My happy place is the intersection of backend
            performance, DevOps automation, and developer-friendly DX. Recent
            playgrounds include Kubernetes chaos experiments, a token-bound NFT
            gallery, and a 32-bit x86 hobby OS (because sometimes{" "}
            <code>printf</code> at ring 0 is the only way to relax).
          </p>

          <p className="text-lg mt-4">
            I thrive in small, product-focused teams—start-ups, dev-tools, or
            Web3 infrastructure—where “just works” is a measurable SLO, not a
            wish. When problems get weird, I profile first, optimize second, and
            automate the fix so no one has to read the post-mortem twice.
          </p>

          <p className="text-lg mt-4">
            Outside the terminal you’ll find me running 5 km loops, hunting PRs
            in open-source repos, or demolishing a reading list that ranges from
            <em> Sapiens</em> to kernel design papers. I’m currently learning
            Japanese (JLPT N5/N4) and experimenting with test-driven development
            habits—​yes, I treat my life like one big CI/CD pipeline.
          </p>

          <p className="text-lg mt-4">
            If you need someone who can jump from Terraform plans to byte-level
            debuggers—​and explain the journey in a blog post—let’s talk.
            <a
              href="https://github.com/peacewalker122"
              className="text-primary underline"
            >
              GitHub
            </a>{" "}
            will do the trick.
          </p>
        </section>

        <section className="flex flex-col justify-start py-12 px-6 bg-gray-100 text-black flow">
          <h1 className="text-3xl font-bold">Recent Posts</h1>
          <div className="grid gap-6 md:grid-cols-2 gap">
            {posts.map((post) => (
              <BlogCard
                key={post.slug}
                title={post.title}
                description={post.excerpt}
                date={post.date}
                imageUrl={post.image_url || "https://via.placeholder.com/150"}
              />
            ))}
          </div>
        </section>
      </main>
    </ErrorBoundary>
  );
}

export default App;
