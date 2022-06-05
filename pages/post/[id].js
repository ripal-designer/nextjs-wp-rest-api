import Link from "next/link";

const Post = ({ post }) => {
  return (
    <div>
      <h1>Ripal</h1>

      <h2> {post.title.rendered} </h2>
      <div dangerouslySetInnerHTML={{ __html: post?.content.rendered }}></div>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const result = await fetch(
    `http://localhost:8888/learning-wordpress/wp-json/wp/v2/posts/${params.id}`
  );
  const post = await result.json();
  return { props: { post } };
}
export default Post;
