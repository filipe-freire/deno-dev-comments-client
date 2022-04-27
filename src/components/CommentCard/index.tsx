import { parseData, useFetchComments } from "./CommentCard.hook";

export function CommentCard() {
  const { comments, loading, error } = useFetchComments();

  if (loading) <p>Loading...</p>;
  if (error) <p>Oops, looks like we have an error fetching data!</p>;

  return (
    <>
      <h1>Top Dev Comments</h1>
      <div>
        {comments &&
          comments.map((comment) => (
            <div className="dev-comment">
              <p key={comment._id}>{comment.comment}</p>
              <br />
            </div>
          ))}
      </div>
    </>
  );
}
