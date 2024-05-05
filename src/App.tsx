import { Grid } from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextField from "./components/formsui/textfieldwrapper";

function App() {
  const INITIAL_FORM_STATE = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    addressline1: "",
    addressline2: "",
    city: "",
    state: "",
    country: "",
  };
  const formValidationSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.number()
      .integer()
      .typeError("Please enter a valid phone number")
      .required("Phone is required"),
    addressline1: Yup.string().required("Address is required"),
    addressline2: Yup.string(),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    country: Yup.string().required("Country is required"),
  });

  return (
    <Grid container>
      <Grid item xs={12}>
        <Formik
          initialValues={{ ...INITIAL_FORM_STATE }}
          validationSchema={formValidationSchema}
          onSubmit={(values) => console.log(values)}
        >
          <Form>
            <Grid container spacing={2} sx={{ px: 2, py: 2 }}>
              <Grid item xs={12}>
                your details
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
                <TextField name="firstName" label={"First Name"} />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
                <TextField name="lastName" label={"Last Name"} />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
                <TextField name="email" label={"Email"} />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
                <TextField name="phone" label={"Phone"} />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
                <TextField name="addressline1" label={"Address line 1"} />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
                <TextField name="addressline2" label={"Address line 2"} />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
                <TextField name="city" label={"City"} />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
                <TextField name="state" label={"State"} />
              </Grid>
            </Grid>
          </Form>
        </Formik>
      </Grid>
    </Grid>
  );
}

export default App;
