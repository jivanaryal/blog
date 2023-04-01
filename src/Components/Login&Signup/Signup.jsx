import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as yup from "yup";
import axios from "axios";
import { Link } from "react-router-dom";

// schema validation
const schema = yup.object().shape({
  Email: yup.string().required("Email is required"),
  Password: yup.string().required("Password is required"),
  confirm_Password: yup
    .string()
    .required("password is needed")
    .oneOf([yup.ref("Password"), null], "Password does not Match"),
});

const Register = () => {
  const postRegister = (val) => {
    try {
      axios
        .post("https://kalikablog.onrender.com/auth/register", val)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };
  const FormFields = [
    {
      name: "Email",
      type: "email",
    },
    {
      name: "Password",
      type: "password",
    },
    {
      name: "confirm_Password",
      type: "password",
    },
  ];
  return (
    <div className=" ">
      <div className="ml-[40%] mt-[10%]">
        <Formik
          initialValues={{
            Email: "",
            Password: "",
          }}
          validationSchema={schema}
          onSubmit={(val) => {
            console.log(val, "submittead");
            postRegister(val);
          }}>
          {({ handleSubmit, values }) => {
            return (
              <Form onSubmit={handleSubmit}>
                <div className=" bg-gray-300 w-fit p-4 shadow-lg">
                  <div className="text-center mb-2">Register Form</div>
                  {FormFields.map((val, i) => {
                    return (
                      <div className="grid grid-cols-1 w-fit ">
                        <label htmlFor={val.name}>{val.name}</label>
                        <Field
                          type={val.type}
                          name={val.name}
                          placceholder={`Enter ${val.name}`}
                          className="w-[23rem] p-1"
                        />
                        <ErrorMessage
                          name={val.name}
                          component="div"
                          className="text-red-500"
                        />
                      </div>
                    );
                  })}
                  <div className="mt-2 text-center text-white font-bold ">
                    <button
                      type="submit"
                      className="bg-mainColor rounded-sm p-1 text-center">
                      Submit
                    </button>
                  </div>
                  <div className="text-center">
                    <div>Already have an Account?</div>
                    <Link to="/login">Login</Link>
                  </div>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default Register;
