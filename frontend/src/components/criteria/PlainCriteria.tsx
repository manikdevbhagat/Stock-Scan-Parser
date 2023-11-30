interface Props {
  criteria: Criteria;
  index: number;
}
const PlainCriteria = ({ criteria, index }: Props) => {
  return (
    <>
      {index > 0 && <p className="subtext">and</p>}

      <p className="text">{criteria.text}</p>
    </>
  );
};

export default PlainCriteria;