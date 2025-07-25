// Load all Markdown files as modules, eager to include metadata
// const postFiles = import.meta.glob("../posts/**/*.md", { eager: true });

// Load the necessary information about the posts with json
import postFiles from "../../posts.json";

// to store the information it's much more better to store it on json rather than parsing it every time on each markdown file
// This allows us to easily access metadata and content without additional processing.

export interface Post {
	title: string;
	slug: string;
	date: string;
	excerpt: string;
	path: string;
	image_url?: string;
}

// export function getAllPosts() {
// 	const posts = Object.entries(postFiles).map(([path, module]) => {
// 		const fullSlug = path.split("/posts/")[1].replace(/\.md$/, "");
// 		const { metadata } = module;
// 		const rawContent =
// 			typeof module.default === "string" ? module.default : module.default(); // MDX modules

// 		return {
// 			slug: fullSlug,
// 			content: rawContent,
// 			...metadata,
// 		};
// 	});

// 	return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
// }

export function getAllPosts(): Post[] {
	return postFiles.map((post) => ({
		slug: "",
		title: post.title,
		date: post.date,
		excerpt: post.excerpt,
		path: post.path,
		image_url: post.image_url || undefined, // Optional image URL
	}));
}

export function getPostBySlug(slug: string): Post | undefined {
	const posts = getAllPosts();
	return posts.find((p) => p.slug === slug);
}

