import { useFormik } from "formik";
import * as Yup from 'yup';


const InputYupComp = () => {
    const formikObj = useFormik({
        initialValues: {
            userId: '',
            pass: '',
        },
        validationSchema: Yup.object({
            userId: Yup.string()
            .required('Its required')
            .min(6, 'minimum 6 character is required')
            .max(12, 'maximium limit reached'),


            pass: Yup.string()
            .required('Its Required')
            .min(4, 'minimum 4 character is required')
            .max(8, 'mixmum limit reached')
            .matches(/[0-9]/,'atleast one number is required')
            .matches(/[A-Z]/,'required atleast one number is UpperCase')
            .matches(/[^\w]/,'required atleast one special character'),
        }),
        onSubmit: (values) => {
            console.log(values);
            document.getElementById('f1').value = values.userId;
            document.getElementById('f2').value = values.pass;
        }
    });

    const HandleSubmitHandler = (e) => {
        e.preventDefault();
        formikObj.handleSubmit();
    };

    return (
        <>
        <h1>This is Yup form Validation</h1>
        <form onSubmit={HandleSubmitHandler}>
            <h3>Input Data</h3>
            <table border={2}>
            <tr>
                <td>Username</td>
                <td>
                <input type="text" 
                    placeholder="Enter Your UserId"
                    name="userId"
                    onChange={formikObj.handleChange}
                    values={formikObj.values.userId}
                />
                {formikObj.touched.userId && formikObj.errors.userId ? (
                  <em>{formikObj.errors.userId}</em>
                ) : null}

                </td>
            </tr>
            <tr>
                <td>Password</td>
                <td>
                <input type="text"
                    placeholder="Enter Your Password"
                    name="pass" 
                    onChange={formikObj.handleChange}
                    values={formikObj.values.pass}
                />
                {formikObj.touched.pass && formikObj.errors.pass ? (
                  <em>{formikObj.errors.pass}</em>
                ) : null }
                </td>
            </tr>
            <tr>
                <td colSpan={2}>
                    <button type="submit">Submit</button>
                </td>
            </tr>
            </table>

            <h3>Output Data</h3>
            <table border={2}>
            <tr>
                <td>Username</td>
                <td>
                    <input type="text" id="f1"/>
                </td>
            </tr>
            <tr>
                <td>Password</td>
                <td>
                    <input type="text" id="f2"/>
                </td>
            </tr>
            </table>
        </form>
        </>
    );
};


export default InputYupComp;