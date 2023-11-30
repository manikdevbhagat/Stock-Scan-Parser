interface Props {
  name: string;
  tag: string;
  color: string;
}

const NameTag = ({ name, tag, color }: Props) => {
  return (
    <>
      <h1 className="header">{name}</h1>
      <p className="tag" style={{ color: color }}>
        {tag}
      </p>
    </>
  );
};

export default NameTag;