var FormData = {
  StudentData: {
    isError: false,
    errorsOrEmptyList: [""],
    errors: [""],
    value: [
      {
        Id: "00000000-0000-0000-0000-000000000000",
        firstName: "",
        middleName: "",
        lastName: "",
        birthDate: "2000-03-19 09:54 PM",
      },
    ],
    firstError: {
      code: "",
      description: "",
      type: 0,
      numericType: 0,
      metadata: {},
    },
  },
  DepartmentData: {
    isError: false,
    errorsOrEmptyList: [""],
    errors: [""],
    data: [
      {
        Id: "00000000-0000-0000-0000-000000000000",
        name: "",
        shortName: "",
        numberOfSemisters: 0,
        currentSemister: 0,
        Courses: [{}],
      },
    ],
    firstError: {
      code: "",
      description: "",
      type: 0,
      numericType: 0,
      metadata: {},
    },
  },
};

export default FormData;
