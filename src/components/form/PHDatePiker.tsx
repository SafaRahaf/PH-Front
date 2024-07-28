import { DatePicker, Form } from "antd";
import { Controller } from "react-hook-form";

export type TDatePickerProps = {
  name: string;
  label?: string;
};

const PHDatePiker = ({ name, label }: TDatePickerProps) => {
  return (
    <div>
      <Controller
        name={name}
        render={({ field }) => (
          <Form.Item label={label}>
            <DatePicker
              {...field}
              id={name}
              size="large"
              style={{ width: "100%" }}
            />
          </Form.Item>
        )}
      />
    </div>
  );
};

export default PHDatePiker;
