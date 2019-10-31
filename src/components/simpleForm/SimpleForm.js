import React from "react";
import { Form, Field } from "react-final-form";
import { Input, Button, Select, Radio, Checkbox } from "antd";
import Styles from "./Style";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async values => {
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};

const InputAdapter = ({ input, meta, ...rest }) => (
  <Input
    {...rest}
    value={input.value}
    onChange={(event, value) => input.onChange(event, value)}
    allowClear
    // errorText={meta.touched ? meta.error : ""}
  />
);

const CheckboxAdapter = ({ input, meta, ...rest }) => (
  <Checkbox
    {...rest}
    checked={input.value}
    onChange={(event, value) => input.onChange(event, value)}
    allowClear
    // errorText={meta.touched ? meta.error : ""}
  />
);

const radioOptions = [
  { label: "Larry", value: "Larry" },
  { label: "Moe", value: "Moe" },
  { label: "Curly", value: "Curly" }
];

const initialRadioValue = radioOptions[2].value;

const RadioAdapter = ({ input, meta, ...rest }) => (
  <Radio.Group
    {...rest}
    options={radioOptions}
    onChange={(event, value) => input.onChange(event, value)}
    defaultValue={initialRadioValue}
    value={input.value}
    // errorText={meta.touched ? meta.error : ""}
  />
);

const SelectAdapterColors = ({ input, meta, ...rest }) => (
  <Select
    {...rest}
    value={input.value}
    onChange={(event, value) => input.onChange(event, value)}
    // errorText={meta.touched ? meta.error : ""}
  >
    <option value="#ff0000">
      <span role="img" aria-label="Red">
        ❤️
      </span>
      Red
    </option>
    <option value="#00ff00">
      <span role="img" aria-label="Green">
        💚
      </span>
      Green
    </option>
    <option value="#0000ff">
      <span role="img" aria-label="Blue">
        💙
      </span>
      Blue
    </option>
  </Select>
);

const SelectAdapterToppings = ({ input, meta, ...rest }) => (
  <Select
    {...rest}
    value={input.value}
    onChange={(event, value) => input.onChange(event, value)}
    // errorText={meta.touched ? meta.error : ""}
  >
    <option value="chicken">
      <span role="img" aria-label="Blue">
        🐓
      </span>
      Chicken
    </option>
    <option value="ham">
      <span role="img" aria-label="Blue">
        🐷
      </span>
      Ham
    </option>
    <option value="mushrooms">
      <span role="img" aria-label="Blue">
        🍄
      </span>
      Mushrooms
    </option>
    <option value="cheese">
      <span role="img" aria-label="Blue">
        🧀
      </span>
      Cheese
    </option>
    <option value="tuna">
      <span role="img" aria-label="Blue">
        🐟
      </span>
      Tuna
    </option>
    <option value="pineapple">
      <span role="img" aria-label="Blue">
        🍍
      </span>
      Pineapple
    </option>
  </Select>
);

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
            />
          </div>
          <div className="formRow">
            <label className="label">Favorite Color:</label>
            <Field
              name="favoriteColor"
              component={SelectAdapterColors}
              type="text"
              allowClear
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
          <div className="btnsRow">
            <Button onClick={form.reset} disabled={submitting || pristine}>
              clear
            </Button>
            <Button htmlType="submit">submit</Button>
          </div>
          <pre>{JSON.stringify(values, 0, 2)}</pre>
        </form>
      )}
    >
      <h1>SimpleForm</h1>
    </Form>
  </Styles>
);

export default SimpleForm;
