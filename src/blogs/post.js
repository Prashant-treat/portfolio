import matter from "gray-matter";

// Raw import (Vite / CRA supports this)
import firstPost from "./first-post.mdx?raw";
import reactLove from "./react-love.mdx?raw";

function parsePost(raw, slug) {
  const { data, content } = matter(raw);
  return {
    slug,
    meta: data,
    content
  };
}

const posts = [
  parsePost(firstPost, "first-post"),
  parsePost(reactLove, "react-love")
];

export default posts;
