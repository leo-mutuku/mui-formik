import { Grid } from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextField from "./components/formsui/textfieldwrapper";
import SelectField from "./components/formsui/selectWrapper";
import DateTimePicker from "./components/formsui/dateTimePicker/DateTimePicker";
import countries from "./data/countries.json";

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
    arrival_date: "",
    depture_date: "",
    message: "",
  };
  const formValidationSchema = Yup.object().shape({
    firstName: Yup.string()
      .test("len", "Must be e 5 characters and above", (val) => val.length > 5)
      .required("First name is required"),
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
    arrival_date: Yup.date().required("Arrival date is required"),
    depture_date: Yup.date().required("Depture date is required"),
    message: Yup.string(),
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
              <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
                <SelectField
                  name="country"
                  options={countries}
                  label="Country"
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
                <DateTimePicker name="arrival_date" label={"Arrival Date"} />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
                <DateTimePicker name="depture_date" label="Depture Date" />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
                <TextField name="message" label="Message" multiline rows={4} />
              </Grid>
            </Grid>
          </Form>
        </Formik>
      </Grid>
    </Grid>
  );
}

export default App;
