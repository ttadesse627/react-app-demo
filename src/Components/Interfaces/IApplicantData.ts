import { UUID } from "crypto";

export default interface IApplicantData {
  isError?: any;
  errorsOrEmptyList?: any;
  errors?: any;
  applicantProps?: {
    id: UUID;
    name: string;
    shortName: string;
    numberOfSemisters: number;
    currentSemister: number;
    Courses: {}[];
  }[];
  firstError?: {
    code: string;
    description: string;
    type: number;
    numericType: number;
    metadata: {};
  };
}
