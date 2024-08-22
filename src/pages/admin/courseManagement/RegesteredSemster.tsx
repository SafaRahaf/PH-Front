import { useState } from "react";
import { Button, Dropdown, MenuProps, Table, Tag } from "antd";
import { TQueryParam } from "../../../types";
import {
  useGetAllRegisteredSemesterQuery,
  useUpdateStatusSemesterMutation,
} from "../../../redux/features/admin/courseManagement.api";
import moment from "moment";

export type TTableData = "name" | "status" | "startData" | "endData";

const items: MenuProps["items"] = [
  {
    label: "Upcoming",
    key: "UPCOMING",
  },
  {
    label: "Ongoing",
    key: "ONGOING",
  },
  {
    label: "Ended",
    key: "ENDED",
  },
];

const RegesteredSemsters = () => {
  const [semesterId, setSemesterId] = useState("");

  const [updateStatusSemester] = useUpdateStatusSemesterMutation();

  const [params, setParams] = useState<TQueryParam[] | undefined>(undefined);
  // const {
  //   data: semesterData,
  //   // isLoading,
  //   isFetching,
  // } = useGetAllSemestersQuery(params);

  const { data: getAllRegisteredSemester, isFetching } =
    useGetAllRegisteredSemesterQuery(undefined);

  const tableData = getAllRegisteredSemester?.data?.map(
    ({ _id, academicSemester, status, startDate, endDate }) => ({
      key: _id,
      name: `${academicSemester.name} ${academicSemester.year}`,
      status,
      startDate: moment(new Date(startDate)).format("MMMM"),
      endDate: moment(new Date(endDate)).format("MMMM"),
    })
  );

  const handleStatusDropdown = (data) => {
    const updateStatus = {
      id: semesterId,
      data: {
        status: data.key,
      },
    };

    updateStatusSemester(updateStatus);
  };

  const menuProp = {
    items,
    onClick: handleStatusDropdown,
  };

  const columns: any = [
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: (item) => {
        let color;
        if (item === "UPCOMING") {
          color = "blue";
        } else if (item === "ONGOING") {
          color = "green";
        } else {
          color = "red";
        }
        return <Tag color={color}>{item}</Tag>;
      },
    },
    {
      title: "Start Date",
      key: "startDate",
      dataIndex: "startDate",
    },
    {
      title: "End Date",
      key: "endDate",
      dataIndex: "endDate",
    },
    {
      title: "Action",
      key: "x",
      render: (item) => {
        console.log(semesterId);
        return (
          <Dropdown trigger={["click"]} menu={menuProp}>
            <Button onClick={() => setSemesterId(item.key)}>Update</Button>
          </Dropdown>
        );
      },
    },
  ];

  // const onChange: TableProps<TTableData>["onChange"] = (
  //   _pagination,
  //   filters,
  //   _sorter,
  //   extra
  // ) => {
  //   if (extra.action === "filter") {
  //     const queryParams: TQueryParam[] = [];

  //     setParams(queryParams);
  //   }
  // };

  return (
    <Table
      loading={isFetching}
      columns={columns}
      dataSource={tableData}
      // onChange={onChange}
    />
  );
};

export default RegesteredSemsters;
