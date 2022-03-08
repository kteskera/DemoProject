import React, { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useTable } from "react-table/dist/react-table.development";
import axios from "axios";
import "bootstrap";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { IconContext } from "react-icons";
const Users = () => {
  const [data, setData] = useState([]);
  async function getData() {
    await axios
      .get(process.env.REACT_APP_API_USERS + 1)
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    getData();
  }, []);

  const columns = useMemo(
    () => [
      {
        Header: "#",
        accessor: "id",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "First name",
        accessor: "first_name",
      },
      {
        Header: "Last name",
        accessor: "last_name",
      },
      {
        Header: "Picture",
        accessor: "avatar",
        Cell: (tableProps) => {
          return (
            <img
              alt={tableProps.row.original.first_name}
              src={tableProps.row.original.avatar}
              width="50"
              height="50"
            />
          );
        },
      },
      {
        Header: "Details",
        Cell: (tableProps) => {
          return (
            <Link
              to={"/detail"}
              state={tableProps.row.original}
              style={{ textAlign: "center", textDecoration: "none" }}
            >
              <IconContext.Provider
                value={{ color: "#212529", className: "global-class-name" }}
              >
                <BsFillArrowUpRightCircleFill />
              </IconContext.Provider>
            </Link>
          );
        },
      },
    ],
    []
  );

  const tableInstance = useTable({ columns, data });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <div>
      <table
        className="table table-hover table-responsive"
        {...getTableProps()}
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  style={{ textAlign: "center" }}
                  scope="col"
                  {...column.getHeaderProps()}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      style={{ textAlign: "center" }}
                      {...cell.getCellProps()}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Users;
