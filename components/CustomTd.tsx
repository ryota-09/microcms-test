export const CustomTd = ({ colSpan, rowSpan, children }) => {
  return (
    <td
      style={{ backgroundColor: "white", border: "solid lightgray 1px" }}
      colSpan={colSpan}
      rowSpan={rowSpan}
    >
      {children}
    </td>
  );
};
