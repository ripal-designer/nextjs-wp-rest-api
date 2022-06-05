import Link from "next/link";

const Home = ({ posts }) => {
  console.log(posts);
  return (
    <div>
      <h1>Ripal</h1>
      <ul>
        {posts?.map((post) => {
          return (
            <li key={post.id}>
              <Link href={`/${post.id}`}>
                <a> {post.title.rendered} </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export async function getServerSideProps() {
  const result = await fetch(
    "http://localhost:8888/learning-wordpress/wp-json/wp/v2/posts"
  );
  const posts = await result.json();
  return { props: { posts } };
}
export default Home;
