export const Tags = ({ tags }: { tags: string[] }) => {
  return (
    <div className="🏷">
      {tags.map((tag, index) => (
        <span key={tag}>
          {index > 0 && <span>, </span>}
          <span className={tag} key={tag}>
            {tag}
          </span>
        </span>
      ))}
    </div>
  );
};
