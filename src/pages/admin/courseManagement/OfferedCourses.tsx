import { useState } from "react";
import { Button, Col, Flex } from "antd";
import PHForm from "../../../components/form/PHForm";
import PHSelect from "../../../components/form/PHSelect";
import PHTimePicker from "../../../components/form/PHTimePicker";

import {
  useCreateOfferedCourseMutation,
  useGetAllCoursesQuery,
  useGetAllRegisteredSemestersQuery,
  useGetCourseFacultiesQuery,
} from "../../../redux/features/admin/courseManagement";
import {
  useGetAcademicDepartmentsQuery,
  useGetAcademicFacultiesQuery,
} from "../../../redux/features/admin/academicManagement.api";
import PHSelectWithWatch from "../../../components/form/PHSelectWithWatch";
import PHInput from "../../../components/form/PHInput";

const OfferedCourses = () => {
  const [courseId, setCourseId] = useState("");

  const onSubmit = (data: any) => {
    console.log(data);
  };

  console.log(courseId);

  const [addOfferedCourse] = useCreateOfferedCourseMutation();
  const { data: semesterRegistrationData } = useGetAllRegisteredSemestersQuery([
    { name: "sort", value: "year" },
    { name: "status", value: "UPCOMING" },
  ]);
  const { data: academicDepartment } =
    useGetAcademicDepartmentsQuery(undefined);
  const { data: academicFaculty } = useGetAcademicFacultiesQuery(undefined);
  const { data: coursesData } = useGetAllCoursesQuery(undefined);
  const { data: facultiesData, isFetching: fetchingFaculties } =
    useGetCourseFacultiesQuery(courseId, { skip: !courseId });

  const smesterRegistrationOptions = semesterRegistrationData?.data?.map(
    (item) => ({
      value: item._id,
      label: `${item.academicSemester.name} ${item.academicSemester.year}`,
    })
  );

  const facultyOptions = facultiesData?.data?.map((item: any) => ({
    value: item._id,
    label: item.name,
  }));

  const academicFacultyOptions = academicFaculty?.data?.map((item) => ({
    value: item._id,
    label: item.name,
  }));

  const academicDepartmentOptions = academicDepartment?.data?.map((item) => ({
    value: item._id,
    label: item.name,
  }));

  const courseOptions = coursesData?.data?.map((item) => ({
    value: item._id,
    label: item.title,
  }));

  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PHForm onSubmit={onSubmit}>
          <PHSelect
            label="Semester Registration"
            name="semesteRegistration"
            options={smesterRegistrationOptions}
          />
          <PHSelect
            label="Academic Faculty"
            name="academicFaculty"
            options={academicFacultyOptions}
          />
          <PHSelect
            label="Academic Department"
            name="academicDepartment"
            options={academicDepartmentOptions}
          />
          <PHSelectWithWatch
            onValueChange={setCourseId}
            label="Course"
            name="course"
            options={courseOptions}
          />
          <PHSelect
            disabled={!courseId || fetchingFaculties}
            label="Faculty"
            name="faculty"
            options={facultyOptions}
          />
          <PHInput type="text" label="Section" name="section" />
          <PHInput type="text" label="Max Capacity" name="maxCapacity" />

          {/* <PHSelect label="Days" name="days" mode="multiple" options={weekDaysOptions} /> */}

          <PHTimePicker label="Start Time" name="startTime" />
          <PHTimePicker label="End Time" name="endTime" />

          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default OfferedCourses;
