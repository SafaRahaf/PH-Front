import {
  AcademicDepartment,
  AcademicFaculty,
  AcademicSemester,
  CreateAcademicDepartment,
  CreateAcademicFaculty,
  CreateAcademicSemester,
} from "../pages/admin/academicManagement";
import AdminDashboard from "../pages/admin/AdminDashboard";
import {
  Course,
  CreateCourse,
  OfferCourse,
  OfferedCourses,
  RegesteredSemsters,
  SemesterRegestration,
} from "../pages/admin/courseManagement";
import {
  CreateAdmin,
  CreateFaculty,
  CreateStudent,
  StudentData,
  StudentDetails,
} from "../pages/admin/userManagement";

export const adminPaths: any = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "Academic Management",
    children: [
      {
        name: "Create A. Semester",
        path: "create-academic-semester",
        element: <CreateAcademicSemester />,
      },
      {
        name: "Academic Semester",
        path: "academic-semester",
        element: <AcademicSemester />,
      },
      {
        name: "Create A. Faculty",
        path: "create-academic-faculty",
        element: <CreateAcademicFaculty />,
      },
      {
        name: "Academic Faculty",
        path: "academic-faculty",
        element: <AcademicFaculty />,
      },
      {
        name: "Create A. Department",
        path: "create-academic-department",
        element: <CreateAcademicDepartment />,
      },
      {
        name: "Academic Department",
        path: "academic-department",
        element: <AcademicDepartment />,
      },
    ],
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin />,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <CreateFaculty />,
      },
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateStudent />,
      },
      {
        name: "Student Data",
        path: "students-data",
        element: <StudentData />,
      },
      {
        path: "student-data/:studentId",
        element: <StudentDetails />,
      },
    ],
  },
  {
    name: "Course Management",
    children: [
      {
        name: "Semester Regestration",
        path: "semester-regestration",
        element: <SemesterRegestration />,
      },
      {
        name: "Regestered Semester",
        path: "regestered-semester",
        element: <RegesteredSemsters />,
      },
      {
        name: "Create Course",
        path: "create-course",
        element: <CreateCourse />,
      },
      {
        name: "Course",
        path: "course",
        element: <Course />,
      },
      {
        name: "Offer Course",
        path: "offer-course",
        element: <OfferCourse />,
      },
      {
        name: "Offered Courses",
        path: "offered-courses",
        element: <OfferedCourses />,
      },
    ],
  },
];
