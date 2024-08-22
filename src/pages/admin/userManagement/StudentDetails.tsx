import { useParams } from "react-router-dom";

const StudentDetails = () => {
  // const { studentId } = useParams();
  const { studentId } = useParams();

  console.log(studentId);

  return <div>StudentDetails: {studentId}</div>;
};

export default StudentDetails;
