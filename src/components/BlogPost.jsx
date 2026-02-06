import { MDXProvider } from "@mdx-js/react";
import { MDXRuntime } from "@mdx-js/runtime";

export default function BlogPost({ post }) {
  return (
    <article>
      <h1>{post.meta.title}</h1>
      <p>{post.meta.date}</p>

      <MDXProvider>
        <MDXRuntime>{post.content}</MDXRuntime>
      </MDXProvider>
    </article>
  );
}
