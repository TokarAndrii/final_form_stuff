import React from "react";
import { Input, Select, Radio, Checkbox } from "antd";

export const InputAdapter = ({ input, meta, ...rest }) => (
  <div style={{ position: "relative" }}>
    <Input
      {...rest}
      value={input.value}
      onChange={(event, value) => input.onChange(event, value)}
      allowClear
      // errorText={meta.touched ? meta.error : ""}
    />
    {meta.touched && meta.error && <span className="error">{meta.error}</span>}
  </div>
);

const { TextArea } = Input;
export const TextAreaAdapter = ({ input, meta, ...rest }) => (
  <div style={{ position: "relative" }}>
    <TextArea
      {...rest}
      value={input.value}
      onChange={(event, value) => input.onChange(event, value)}
      rows={4}
    />
    {meta.touched && meta.error && <span className="error">{meta.error}</span>}
  </div>
);

export const CheckboxAdapter = ({ input, meta, ...rest }) => (
  <Checkbox
    {...rest}
    checked={input.value}
    onChange={(event, value) => input.onChange(event, value)}
    allowClear
  />
);

export const CheckboxAdapter2 = ({ input, meta, ...rest }) => (
  <Checkbox
    {...rest}
    checked={input.value.includes("ketchup")}
    onChange={(event, value) => input.onChange(event, value)}
  />
);

//mayonnaise ketchup
export const CheckboxAdapter3 = ({ input, meta, ...rest }) => (
  <Checkbox
    {...rest}
    checked={input.value.includes("mayonnaise")}
    onChange={(event, value) => input.onChange(event, value)}
  />
);

export const SelectAdapterToppings = ({ input, meta, ...rest }) => (
  <div style={{ position: "relative" }}>
    <Select
      {...rest}
      value={input.value}
      onChange={(event, value) => input.onChange(event, value)}
    >
      <Select.Option value="chicken">
        <span role="img" aria-label="Blue">
          🐓
        </span>
        Chicken
      </Select.Option>
      <Select.Option value="ham">
        <span role="img" aria-label="Blue">
          🐷
        </span>
        Ham
      </Select.Option>
      <Select.Option value="mushrooms">
        <span role="img" aria-label="Blue">
          🍄
        </span>
        Mushrooms
      </Select.Option>
      <Select.Option value="cheese">
        <span role="img" aria-label="Blue">
          🧀
        </span>
        Cheese
      </Select.Option>
      <Select.Option value="tuna">
        <span role="img" aria-label="Blue">
          🐟
        </span>
        Tuna
      </Select.Option>
      <Select.Option value="pineapple">
        <span role="img" aria-label="Blue">
          🍍
        </span>
        Pineapple
      </Select.Option>
    </Select>
    {meta.touched && meta.error && <span className="error">{meta.error}</span>}
  </div>
);

export const SelectAdapterColors = ({ input, meta, ...rest }) => (
  <div style={{ position: "relative" }}>
    <Select
      {...rest}
      value={input.value}
      onChange={(event, value) => input.onChange(event, value)}
    >
      <Select.Option value="#ff0000">
        <span role="img" aria-label="Red">
          ❤️
        </span>
        Red
      </Select.Option>
      <Select.Option value="#00ff00">
        <span role="img" aria-label="Green">
          💚
        </span>
        Green
      </Select.Option>
      <Select.Option value="#0000ff">
        <span role="img" aria-label="Blue">
          💙
        </span>
        Blue
      </Select.Option>
    </Select>
    {meta.touched && meta.error && <span className="error">{meta.error}</span>}
  </div>
);

const radioOptions = [
  { label: "Larry", value: "Larry" },
  { label: "Moe", value: "Moe" },
  { label: "Curly", value: "Curly" }
];

export const initialRadioValue = radioOptions[2].value;

export const RadioAdapter = ({ input, meta, ...rest }) => (
  <div style={{ position: "relative" }}>
    <Radio.Group
      {...rest}
      options={radioOptions}
      onChange={(event, value) => input.onChange(event, value)}
      defaultValue={initialRadioValue}
      value={input.value}
    />
  </div>
);
