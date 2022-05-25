import * as Yup from "yup";

const ValidationControl = (validation) => {
  switch (validation) {
    case "login":
      return Yup.object({
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string()
          .max(15, "Must be 15 characters or less")
          .min(6, "Must be 6 characters or greater")
          .required("Required"),
      });

    case "register":
      return Yup.object({
        user: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string()
          .max(15, "Must be 15 characters or less")
          .min(6, "Must be 6 characters or greater")
          .required("Required"),
        repeatpassword: Yup.string()
          .oneOf([Yup.ref("password"), null], "Passwords must match")
          .required("Required"),
      });
    default:
      return null;
  }
};

export default ValidationControl;
