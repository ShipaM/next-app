import CommentSelector from "../_components/CommentSelector";

export default async function CommentPage({
  params,
}: {
  params: Promise<{ postId: string; commentId: string }>;
}) {
  const { postId, commentId } = await params;

  const comment = await fetch(
    `https://jsonplaceholder.typicode.com/comments/${commentId}?postId=${postId}`
  ).then((res) => res.json());

  return (
    <div>
      <h2 className="text-2xl">Comment #{comment.id}</h2>
      <p>{comment.body}</p>
      <p className="text-amber-600">Author: {comment.email}</p>
      <CommentSelector />
    </div>
  );
}
