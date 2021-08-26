import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";

// const columns = [
//   {
//     dataIndex: "title",
//   },
//   {
//     dataIndex: "reward",
//   },
//   {
//     dataIndex: "fee",
//   },
//   {
//     dataIndex: "balance",
//   },
//   {
//     dataIndex: "apy",
//   },
//   {
//     dataIndex: "tvl",
//   },
//   {
//     render: () => (
//       <>
//         <RiArrowRightSLine />
//       </>
//     ),
//   },
// ];

const Table = () => {
  return (
    <div className="table__cover">
      <table className="table">
        <tbody>
          {Array(10)
            .fill(0)
            .map((_, index) => (
              <tr key={index}>
                <td>GFI-USDC</td>
                <td>GGFI</td>
                <td>2%</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>
                  <RiArrowRightSLine />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
