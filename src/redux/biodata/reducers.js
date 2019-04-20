import moment from "moment";

import type from "./types";

const initialState = {
  role: { id: 2, name: "student" },
  name: "",
  password: "",
  email: "",
  isAggree: true,
  university: "",
  yearOfEntry: "",
  department: "",
  studentID: "",
  cardPhoto: { name: "" },
  verificationCode: "",
  profilePhoto: { name: "" },
  topic: "",
  estGraduationDate: moment()
    .add(6, "months")
    .format("YYYY-MM-DD"),
  isLoading: false
};

export default (state = { ...initialState }, action) => {
  switch (action.type) {
    case type.onChange: {
      return action.payload.name === "email"
        ? {
            ...state,
            [action.payload.name]: action.payload.value,
            verificationCode: ""
          }
        : {
            ...state,
            [action.payload.name]: action.payload.value
          };
    }
    case type.zero: {
      return {
        ...state,
        verificationCode: action.payload.verificationCode
      };
    }
    case type.firstButton: {
      return {
        ...state
      };
    }
    case type.seconButton: {
      return {
        ...state
      };
    }

    default: {
      return {
        ...state
      };
    }
  }
};
