import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../hooks/reduxhooks";

const CriteriaDetails = () => {
  const { data } = useAppSelector((state) => state.data);
  const { criteriaId, variableId } = useParams();
  const currentScan = data.find((el) => el.id === Number(criteriaId));
  const [currentVariable, setCurrentVariable] = useState<Variable | null>(null);
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    if (currentScan && variableId) {
      const currentCriteria = currentScan.criteria.find(
        (el) => variableId in el.variable
      );

      if (currentCriteria) {
        setCurrentVariable(currentCriteria.variable[variableId]);
      }
    }
  }, [currentScan, variableId]);

  useEffect(() => {
    if (currentVariable?.default_value !== undefined) {
      setInputValue(currentVariable.default_value.toString());
    }
  }, [currentVariable]);

  let sortedValues = currentVariable?.values?.slice();
  if (sortedValues) {
    if (sortedValues.every((value) => value < 0)) {
      sortedValues.sort((a, b) => b - a); // Sort in descending order if all elements are negative
    } else {
      sortedValues.sort((a, b) => a - b); // Sort in ascending order otherwise
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  if (!currentVariable) {
    return <div>Error: Variable not found</div>;
  }

  return (
    <>
      {currentVariable.type === "value" && (
        <ul>
          {sortedValues?.map((value: number, index: number) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
      )}
      {currentVariable.type === "indicator" && (
        <>
          <h1 className="text">{currentVariable.study_type?.toUpperCase()}</h1>
          <p className="text">Set Parameters</p>
          <div className="indicator-section">
            <p className="parameter">{currentVariable.parameter_name}</p>
            <input type="text" value={inputValue} onChange={handleChange} />
          </div>
        </>
      )}
    </>
  );
};

export default CriteriaDetails;