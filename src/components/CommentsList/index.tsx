import CommentCard from "../CommentCard";
import { useFetchComments } from "./CommentsList.hook";
import { Oval } from "react-loader-spinner";

export function CommentsList() {
  const { comments, loading, error } = useFetchComments();

  if (loading) {
    return (
      <div className="loader">
        <Oval
          ariaLabel="loading-indicator"
          height={100}
          width={100}
          strokeWidth={5}
          strokeWidthSecondary={5}
          color="blue"
          secondaryColor="white"
        />
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
