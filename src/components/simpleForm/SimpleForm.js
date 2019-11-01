import React from "react";
import { Form, Field } from "react-final-form";
import { Input, Button } from "antd";
import Styles from "./Style";
import { required } from "../../utils/formValidators";
import {
  InputAdapter,
  TextAreaAdapter,
  CheckboxAdapter,
  CheckboxAdapter2,
  CheckboxAdapter3,
  SelectAdapterToppings,
  SelectAdapterColors,
  RadioAdapter,
  initialRadioValue
} from "./adapters/";

// some kind of submit stuff
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const onSubmit = async values => {
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};

const SimpleForm = () => (
  <Styles>
    <h2>SimpleForm</h2>
    <Form
      onSubmit={onSubmit}
      initialValues={{ stooge: initialRadioValue, employed: false }}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form className="form" onSubmit={handleSubmit}>
          <div className="formRow">
            <label className="label">FirstName:</label>
            <Field
              name="firstName"
              component={InputAdapter}
              type="text"
              placeholder="First Name"
              validate={required}
            />
          </div>
          {/* exapmple different way of rendering from previus one */}
          <div className="formRow">
            <label className="label">LastName:</label>
            <Field
              name="lastName"
              type="text"
              placeholder="Last Name"
              validate={required}
            >
              {({ input, meta, ...rest }) => (
                <div style={{ position: "relative" }}>
                  <Input
                    {...rest}
                    value={input.value}
                    onChange={(event, value) => input.onChange(event, value)}
                    allowClear
                    errorText={meta.touched ? meta.error : ""}
                  />
                  {meta.touched && meta.error && (
                    <span className="error">{meta.error}</span>
                  )}
                </div>
              )}
            </Field>
          </div>
          <div className="formRow">
            <label className="label">Favorite Color:</label>
            <Field
              name="favoriteColor"
              component={SelectAdapterColors}
              type="text"
              allowClear
              validate={required}
            />
          </div>
          <div className="formRow">
            <label className="label">Employed:</label>
            <Field name="employed" component={CheckboxAdapter} />
          </div>
          <div className="formRow">
            <label className="label">Toppings:</label>
            <Field
              name="toppings"
              component={SelectAdapterToppings}
              type="text"
              allowClear
            />
          </div>
          <div className="formRow">
            <label className="label">Best Stooge:</label>
            <Field name="stooge" component={RadioAdapter} />
          </div>
          <div className="formRow">
            <label className="label">Notes</label>
            <Field
              name="notes"
              component={TextAreaAdapter}
              placeholder="Notes"
              validate={required}
            />
          </div>
          <div className="formRow">
            <label className="label">Sauces:</label>
            <span className="sauceName">Ketchup</span>
            <Field name="sauces" component={CheckboxAdapter2} value="ketchup" />
            <span className="sauceName">Mayonnaise</span>
            <Field
              name="sauces"
              component={CheckboxAdapter3}
              value="mayonnaise"
            />
          </div>
          <div className="btnsRow">
            <Button onClick={form.reset} disabled={submitting || pristine}>
              clear
            </Button>
            <Button htmlType="submit">submit</Button>
          </div>
          {/* simple output all the values of form. Just remove it at real project*/}
          <pre>{JSON.stringify(values, 0, 2)}</pre>
        </form>
      )}
    >
      <h1>SimpleForm</h1>
    </Form>
  </Styles>
);

export default SimpleForm;
