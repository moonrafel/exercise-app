import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function LearnForm() {

    const LoginSchema = Yup.object().shape({
        email: Yup.string()
            .email("Invalid email address format")
            .required("Email must not be empty"),
        password: Yup.string()
            .min(3, "Password must be at least 3 characters")
            .required("Password must not be empty")
    })

    return (
        <div>
            <div>LEARN FORM</div>

            <div>
                <Formik
                    initialValues={{ email: "", password: "" }}
                    validationSchema={LoginSchema}
                    onSubmit={(value) => {
                        console.log(value)
                    }}
                >
                    {(props) => {
                        return (
                            <Form className='grid place-items-center gap-3'>
                                <div className='flex flex-col gap-3'>
                                    <label htmlFor='email'>Email</label>
                                    <Field type="text" name="email" className="border-2" />
                                    <ErrorMessage component="div" name="email" style={{ color: "red" }} />
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <label htmlFor='password'>Password</label>
                                    <Field type="password" name="password" class="border-2" />
                                    <ErrorMessage component="div" name="password" style={{ color: "red" }} />
                                </div>

                            </Form>)
                    }}
                </Formik>
            </div>
        </div>
    )
}

export default LearnForm