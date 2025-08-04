export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  content: string;
}

export function getPostMetadata(slug: string, content: string): Omit<Post, 'content'> {
  // Convert slug to title (e.g., "hello-world" -> "Hello World")
  const title = slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  // Extract excerpt from first paragraph
  const firstParagraph = content.split('\n').find(line => 
    line.trim() && !line.startsWith('#') && !line.startsWith('```')
  ) || '';
  
  const excerpt = firstParagraph.length > 150 
    ? firstParagraph.substring(0, 150) + '...'
    : firstParagraph;

  // Calculate reading time (average 200 words per minute)
  const wordCount = content.split(/\s+/).length;
  const readingTime = `${Math.max(1, Math.round(wordCount / 200))} min`;

  // For demo purposes, use current date - in real app, could use file stats
  const date = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return {
    slug,
    title,
    excerpt,
    date,
    readingTime
  };
}

export async function getAllPosts(): Promise<Post[]> {
  // Use import.meta.glob to get all markdown files
  const modules = import.meta.glob('/post/*.md', { query: '?raw', import: 'default' });
  const posts: Post[] = [];

  for (const path in modules) {
    const content = await modules[path]() as string;
    const slug = path.replace('/post/', '').replace('.md', '');
    const metadata = getPostMetadata(slug, content);
    
    posts.push({
      ...metadata,
      content
    });
  }

  // Sort by title for demo (in real app, could sort by date)
  return posts.sort((a, b) => a.title.localeCompare(b.title));
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    // For dynamic imports, we'll use fetch instead since Vite doesn't support variable dynamic imports
    const response = await fetch(`/post/${slug}.md`);
    if (!response.ok) {
      return null;
    }
    const content = await response.text();
    const metadata = getPostMetadata(slug, content);
    
    return {
      ...metadata,
      content
    };
  } catch {
    return null;
  }
}