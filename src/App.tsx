import "./styles.css";
import { useEffect, useState } from "react";

interface TableData {
  name: string;
  gender: string;
  email: string;
  phone: string;
  location: string;
}

interface Header {
  value: string;
  sortedUp: boolean;
}

export default function App() {
  const [headers, setHeaders] = useState<Header[]>([
    { value: "name", sortedUp: true },
    { value: "gender", sortedUp: true },
    { value: "email", sortedUp: true },
    { value: "phone", sortedUp: true },
    { value: "location", sortedUp: true },
  ]);
  const [tableData, setTableData] = useState<TableData[]>([]);

  const getUserData = async () =>
    await fetch("https://randomuser.me/api/?results=30")
      .then((response) => response.json())
      .then((data) => data.results)
      .catch((error) => console.log(error));

  const mapDataToTable = (data: any[]) => {
    setTableData(
      data.map((element) => ({
        name: `${element.name.first} ${element.name.last}`,
        gender: element.gender,
        email: element.email,
        phone: element.phone,
        location: `${element.location.city}, ${element.location.country}`,
      }))
    );
  };

  const sortTableBy = (header: Header) => {
    const headerType = header.value as keyof TableData;
    setTableData(
      tableData.sort((a, b) =>
        header.sortedUp
          ? b[headerType].localeCompare(a[headerType])
          : a[headerType].localeCompare(b[headerType])
      )
    );
    setHeaders(
      headers.map((h) =>
        h.value === header.value
          ? { ...h, sortedUp: !header.sortedUp }
          : { ...h, sortedUp: true }
      )
    );
  };

  useEffect(() => {
    getUserData().then(mapDataToTable);
  }, []);

  return (
    <table>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index} className="table__header">
              {header.value}
              <button
                className={`table__header-button ${
                  !header.sortedUp ? "table__header-button--down" : ""
                }`}
                onClick={() => sortTableBy(header)}
              >
                ⬆️
              </button>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((row, index) => (
          <tr key={index}>
            {Object.values(row).map((col, index) => (
              <td className="table__data" key={index}>
                {col}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
