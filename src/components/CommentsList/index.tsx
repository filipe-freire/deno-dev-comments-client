import CommentCard from "../CommentCard";
import { useFetchComments } from "./CommentsList.hook";

export function CommentsList() {
  const { comments, loading, error } = useFetchComments();

  if (loading) {
    return (
      <div className="loaderWrapper">
        <span className="loader" />
      </div>
    );
  }

  if (error)
    return (
      <p style={{ textAlign: "center" }}>
        Oops, there was an error fetching data! 👀
      </p>
    );

  return (
    <section style={{ marginBottom: "1rem" }}>
      {comments &&
        comments.map((el) => <CommentCard key={el._id} comment={el.comment} />)}
    </section>
  );
}
