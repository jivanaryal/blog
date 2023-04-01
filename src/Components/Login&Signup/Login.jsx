import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as yup from "yup";
import axios from "axios";
import UserAuthContextApi, {
  UserAuthContext,
} from "../../../Hoc/ContextApi/UserAuth";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../../loader/Loader";
// schema validation
const schema = yup.object().shape({
  Email: yup.string().required("Email is required"),
  Password: yup.string().required("Password is required"),
});

const Login = () => {
  const [Loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const postRegister = (val) => {
    try {
      setLoading(true);
      axios
        .post("https://kalikablog.onrender.com/auth/login", val)
        .then((res) => {
          localStorage.setItem("token", res.data.token);
          if (res.status === 200 || res.status === 201) {
            setLoading(false);
            navigate("/");
          }
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
  ];
  return (
    <div className="bg-gray-200 h-screen grid grid-cols-1">
      <UserAuthContextApi>
        {Loading ? (
          <Loader />
        ) : (
          <UserAuthContext.Consumer>
            {(context) => {
              console.log(context);
              return (
                <div className="mx-auto">
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
                          <div className=" w-fit justify-center items-center mt-[25%] bg-gray-300 p-4 shadow-lg">
                            {" "}
                            <div className="text-center mb-3">Login Form</div>
                            {FormFields.map((val, i) => {
                              return (
                                <div className="grid grid-cols-1 ">
                                  <label htmlFor={val.name}>{val.name}</label>
                                  <Field
                                    type={val.type}
                                    name={val.name}
                                    placceholder={`Enter ${val.name}`}
                                    className="w-[25rem] p-1"
                                  />
                                  <ErrorMessage
                                    name={val.name}
                                    component="div"
                                    className="text-red-500"
                                  />
                                </div>
                              );
                            })}
                            <div className="mt-3 flex items-center text-center rounded-md text-xl">
                              <button
                                type="submit"
                                className="bg-mainColor border-mainColor font-bold text-white  rounded-sm px-2 hover:bg-white hover:text-mainColor hover:border2  text-bold mx-auto h-8">
                                Submit
                              </button>
                            </div>
                            <div className="text-center pt-2">
                              <div>Don't Have an Account?</div>
                              <Link to="/register">Create New</Link>
                            </div>
                          </div>
                          <input type="text" />
                        </Form>
                      );
                    }}
                  </Formik>
                </div>
              );
            }}
          </UserAuthContext.Consumer>
        )}
      </UserAuthContextApi>
    </div>
  );
};

export default Login;
