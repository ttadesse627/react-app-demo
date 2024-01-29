import { UUID } from "crypto";

export default interface IDepartmentData {
  isError: any;
  errorsOrEmptyList: any;
  errors: any;
  deptProps: {
    id: UUID;
    name: string;
    shortName: string;
    numberOfSemisters: number;
    currentSemister: number;
    Courses: {}[];
  }[];
  firstError: {
    code: string;
    description: string;
    type: number;
    numericType: number;
    metadata: {};
  };
}
