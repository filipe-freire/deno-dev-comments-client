interface ICommentCardProps {
  comment: string;
}

export default function CommentCard({ comment }: ICommentCardProps) {
  return (
    <div className="dev-comment">
      <p>{comment}</p>
      <br />
    </div>
  );
}
