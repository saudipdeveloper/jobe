import { useFormik } from "formik";


const validate = (values) => {
    const errors = {}

    if(!values.email) {
        errors.email = 'Email Id is required';
    } else if (!/^[a-z0-9 .]+@[A-Z0-9]/i.test(values.email)) {
        errors.email = 'Invalid Email';
    }


    if(!values.pass) {
        errors.pass = 'required';
    } else if (values.pass.length < 4) {
        errors.pass = 'password should not less than 4 character';
    } else if (values.pass.length > 12) {
      errors.pass = 'character limit crossed';
    }
    return errors;
    
}


const InputFormComp = () => {

      const InputFormVal = useFormik({
        initialValues: {
            email: '',
            pass:'',
        },

        validate,
        onSubmit: (values) => {
          document.getElementById('f1').value = values.email;
          document.getElementById('f2').value = values.pass;
        }
      });

      const handlesubmitHandler = (e) => {
        e.preventDefault();
        InputFormVal.handleSubmit();
      };


    return (
       <>
          <h1>This is raect Formik Validation Component</h1>
          <form onSubmit={handlesubmitHandler}>
              <fieldset>
                <legend>Formik Validation</legend>
                <label>Email :-</label>
                <input type="text"
                   value={InputFormVal.values.email}
                   name="email"
                   onChange={InputFormVal.handleChange} />
                   {InputFormVal.errors.email ? (
                    <em>{InputFormVal.errors.email}</em>
                   ) : null}
                <br />
                <br />
                <label>Password</label>
                <input type="password"
                 value={InputFormVal.values.pass}
                 name="pass"
                 onChange={InputFormVal.handleChange}  />
                 {InputFormVal.errors.pass ? <em>{InputFormVal.errors.pass}</em> : null}
                 <button type="submit">Submit</button>
            </fieldset>      
          </form>

          <fieldset>
                <legend>Formik Validation</legend>
                <label>Email :-</label>
                <input type="text" id="f1" />
                <br />
                <br />
                <label>Password</label>
                <input type="password" id="f2" />
            </fieldset>  
       </>
        )
}


export default InputFormComp;