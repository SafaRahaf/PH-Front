import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../components/form/PHForm";
import PHInput from "../components/form/PHInput";
import { Button, Row } from "antd";
import { useChangePasswordMutation } from "../redux/features/admin/userManagement.api";

const NeedsPasswordChange = () => {
  const [changePassword] = useChangePasswordMutation(undefined);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const res = await changePassword(data);
    console.log(res);
  };

  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <PHForm onSubmit={onSubmit}>
        <PHInput type="text" name="oldPassword" label="Old Password" />
        <PHInput type="text" name="newPassword" label="New Password" />
        <Button htmlType="submit">Login</Button>
      </PHForm>
    </Row>
  );
};

export default NeedsPasswordChange;
