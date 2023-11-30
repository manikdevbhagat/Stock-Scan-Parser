import { useParams } from "react-router-dom";
import NameTag from "../components/NameTag";
import PlainCriteria from "../components/criteria/PlainCriteria";
import VariableCriteria from "../components/criteria/VariableCriteria";
import { useAppSelector } from "../hooks/reduxhooks";

const Criterias = () => {
  const { data } = useAppSelector((state) => state.data);
  const { criteriaId } = useParams();

  const currentScan = data.filter((el) => el.id === Number(criteriaId))[0];

  if (!currentScan) {
    return <div>Error: Criteria not found</div>;
  }

  return (
    <>
      <div className="header-section">
        <NameTag
          name={currentScan.name}
          tag={currentScan.tag}
          color={currentScan.color}
        />
      </div>
      <div className="body-section">
        {currentScan.criteria.map((criteria: Criteria, index: number) => {
          if (criteria.type === "plain_text") {
            return (
              <PlainCriteria key={index} criteria={criteria} index={index} />
            );
          } else if (criteria.type === "variable") {
            return (
              <VariableCriteria key={index} criteria={criteria} index={index} />
            );
          }
        })}
      </div>
    </>
  );
};

export default Criterias;