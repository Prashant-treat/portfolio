import posts from "../blogs/posts";

export default function BlogList({ setActivePost }) {
  return (
    <section>
      <h1>Blog</h1>

      {posts.map(post => (
        <div
          key={post.slug}
          onClick={() => setActivePost(post)}
          style={{ cursor: "pointer", marginBottom: 20 }}
        >
          <h2>{post.meta.title}</h2>
          <p>{post.meta.date}</p>
        </div>
      ))}
    </section>
  );
}
