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
			{comments?.map((el, i) => (
				// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
				<CommentCard key={i} comment={el.text} />
			))}
		</section>
	);
}
