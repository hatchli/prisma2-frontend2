import React, { useState, useEffect, useMemo } from "react";
import { gql, useMutation, useQuery, useLazyQuery } from "@apollo/client";
import { GET_REQUESTS, IS_CURRENTLY_LOGGED_IN } from "../../MutationsQueries";
import Table from "../Table";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import useWindowSize from "common/src/hooks/useWindowSize";
import moment from "moment";
import Wrapper from "./requests.style";
import { rgba } from "polished";
import upperScoreReplace from "common/src/utils/UpperScoreReplace";
export default function Requests() {
  const [q, setQ] = useState("");
  const [total, setTotal] = useState(999);
  const [currentPage, setCurrentPage] = useState(0);
  const [currentPageSize, setCurrentPageSize] = useState(5);
  const [currentSortField, setCurrentSortField] = useState("created_at");
  const [currentSortOrder, setCurrentSortOrder] = useState("desc");
  const [currentPagination, setCurrentPagination] = useState({
    page: currentPage,
    pageSize: currentPageSize,
  });
  const [currentSorting, setCurrentSorting] = useState({
    field: currentSortField,
    order: currentSortOrder,
  });
  const [currentFilter, setCurrentFilter] = useState(undefined);

  useEffect(() => {
    if (currentPage !== undefined && currentPageSize !== undefined) {
      setCurrentPagination({
        page: currentPage,
        pageSize: currentPageSize,
      });
    } else {
      setCurrentPagination(undefined);
    }
  }, [currentPage, currentPageSize, setCurrentPagination]);

  useEffect(() => {
    if (q !== undefined && q !== "") {
      setCurrentFilter({
        q,
      });
    } else {
      setCurrentFilter(undefined);
    }
  }, [q, setCurrentFilter]);
  console.log("currentFilter", currentFilter);
  useEffect(() => {
    if (currentSortField !== undefined && currentSortOrder !== undefined) {
      setCurrentSorting({
        field: currentSortField,
        order: currentSortOrder,
      });
    } else {
      setCurrentSorting({
        field: "created_at",
        order: "desc",
      });
    }
    console.log(currentSorting);
  }, [currentSortField, currentSortOrder, setCurrentSorting]);

  const { error, data, loading, refetch } = useQuery(GET_REQUESTS, {
    variables: {
      orderBy: { [currentSorting.field]: currentSorting.order },
      first: currentPagination.pageSize,
      skip: currentPagination.page * currentPagination.pageSize,
      where: {
        OR: [
          {
            email: {
              contains: q,
            },
          },
          {
            name: {
              contains: q,
            },
          },
          {
            phone: {
              contains: q,
            },
          },
        ],
      },
    },
    onError: () => {
      try {
        new Error("Invalid Auth");
      } catch (err) {
        console.error(err.message);
      }
    },
  });

  let today = new Date().toLocaleDateString();

  const title = `Myodesign`;

  const mappedData = useMemo(() => {
    if (data) {
      const mycopy = data.requests.map(
        ({
          __typename,
          created_at,
          newsletter,
          pdf,
          coaching,
          emailConfirmed,
          ...request
        }) => ({
          ...request,
          created_at: moment.utc(created_at).format("L"),
          newsletter: newsletter ? "Yes" : null,
          pdf: pdf ? "Yes" : null,
          emailConfirmed: emailConfirmed ? "Yes" : null,
          coaching: coaching
            ? request.Type.map((a, i) => (
                <div key={i}>{upperScoreReplace(a.name)}</div>
              ))
            : null,
        })
      );
      return mycopy;
    }
    return [];
  }, [data]);

  const withSortOrder = (columns, { sortField, sortOrder }) =>
    columns.map((column) => ({
      ...column,
      defaultSort: sortField === column.field ? sortOrder : undefined,
    }));

  if (error) {
    return <div>Error! {error.message}</div>;
  }
  const fields = [
    `created_at`,
    "email",
    "coaching",
    "name",
    "phone",
    "contact",
    "pdf",
    "newsletter",
    "emailConfirmed",
  ];
  const columns = [
    { title: "Date", field: "created_at" },
    { title: "Email", field: "email" },
    { title: "Coaching", field: "coaching" },
    { title: "Name", field: "name", grouping: false },
    { title: "Phone", field: "phone" },
    { title: "Method", field: "contact" },
    { title: "PDF", field: "pdf" },
    { title: "Newsletter", field: "newsletter" },
    { title: "Confirmed", field: "emailConfirmed" },

    // { title: "Valid", field: "emailConfirmed" },
  ];
  const sortedColumns = useMemo(
    () =>
      withSortOrder(columns, {
        sortField: currentSortField,
        sortOrder: currentSortOrder,
      }),
    [currentSortField, currentSortOrder, columns]
  );

  const { width } = useWindowSize();

  return (
    <Wrapper>
      {!error && (
        <Table
          options={{
            pageSize: currentPageSize,
            showSelectAllCheckbox: false,
            exportButton: true,
            exportAllData: true,
            debounceInterval: 500,
            pageSizeOptions: [5, 10, 50, 100, 200, 999],
            doubleHorizontalScroll: true,
            grouping: true,
            // columnsButton: true,
            tableLayout: "auto",
            exportFileName: `Myodesign Data ${today}`,
            headerStyle: {
              backgroundColor: "#3C3C46",
              color: rgba(255, 255, 255, 0.6),
            },
            cellStyle: {
              color: "#FFFFFF",
            },
            rowStyle: {
              borderBottom: `1px solid ${rgba(255, 255, 255, 0.12)}`,
              color: `${rgba(255, 255, 255, 0.12)}`,
            },
            actionsCellStyle: {
              color: "#FFFFFF",
              backgroundColor: "#FFFFFF",
            },
            filterCellStyle: {
              color: rgba(255, 255, 255, 0.6),
              backgroundColor: "#3C3C46",
            },
            searchFieldStyle: {
              color: rgba(255, 255, 255, 0.6),
              borderBottom: `2px solid ${rgba(255, 255, 255, 0.6)}`,
            },
          }}
          title={width <= 768 ? null : title}
          style={{
            backgroundColor: "#030b16",
            color: "#FFFFFF",
            maxWidth: "100%",
          }}
          columns={sortedColumns}
          isLoading={loading}
          totalCount={total}
          page={currentPage}
          onSearchChange={(result) => {
            setQ(result);
          }}
          onChangePage={(nextPage) => {
            console.log("currentPage", currentPage);
            console.log("nextPage", nextPage);
            setCurrentPage(nextPage);
          }}
          onChangeRowsPerPage={(nextPerPage) => {
            setCurrentPageSize(nextPerPage);
            setCurrentPage(0);
          }}
          onOrderChange={(newSortFieldIndex, newSortOrder) => {
            const newSortField = fields[newSortFieldIndex];
            setCurrentSortField(newSortField);
            setCurrentSortOrder(newSortOrder);
          }}
          data={mappedData}
          actions={[
            {
              icon: () => <AutorenewIcon style={{ color: "#FFFFFF" }} />,
              tooltip: "Refresh",
              isFreeAction: true,
              onClick: () => {
                setCurrentPage(0);
                refetch();
              },
            },
          ]}
          detailPanel={[
            {
              tooltip: "Coaching Details",
              iconProps: {
                color: "secondary",
              },
              render: (rowData) => {
                console.log("rowData", rowData);
                const info = rowData.Type.map((a) => a);

                console.log("info", info);
                return (
                  <div
                    style={{
                      fontSize: 12,
                      textAlign: "center",
                      padding: "10px 30px",
                      color: "white",
                      // backgroundColor: "white",
                      textAlign: "left",
                    }}
                  >
                    {info.map((a, i) => (
                      <div key={i}>{a.description}</div>
                    ))}
                  </div>
                );
              },
            },
          ]}
        />
      )}
    </Wrapper>
  );
}
