import { Link } from "react-router-dom";

interface Props {
  criteria: Criteria;
  index: number;
}
const VariableCriteria = ({ criteria, index }: Props) => {
  const renderTextWithLinks = (text: string, variables: any) => {
    const parts = text.split(/(\$[0-9]+)/);

    return parts.map((part, index) => {
      if (part.startsWith("$")) {
        const variableKey = part;
        const variable = variables[variableKey];

        if (variable) {
          if (variable.type === "value") {
            return (
              <Link key={index} to={variableKey}>
                {"("}
                {variable.values[0]}
                {")"}
              </Link>
            );
          } else if (variable.type === "indicator") {
            return (
              <Link key={index} to={variableKey}>
                {"("}
                {variable.default_value}
                {")"}
              </Link>
            );
          }
        }
      }

      return part;
    });
  };
  return (
    <>
      {index > 0 && <p className="subtext">and</p>}
      <p className="text">
        {renderTextWithLinks(criteria.text, criteria.variable)}
      </p>
    </>
  );
};

export default VariableCriteria;