interface Variable {
  type: string;
  values?: number[];
  study_type?: string;
  parameter_name?: string;
  min_value?: number;
  max_value?: number;
  default_value?: number;
}

interface Criteria {
  type: string;
  text: string;
  variable: {
    [key: string]: Variable;
  };
}

interface Scan {
  id: 1;
  name: string;
  tag: string;
  color: string;
  criteria: Criteria[];
}