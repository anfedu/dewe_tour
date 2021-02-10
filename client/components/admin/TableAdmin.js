import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { formatString } from "../../src/formatter";
import ModalApprove from "./ModalApprove";
import Link from "../../src/Link";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.white,
    color: theme.palette.common.black,
    fontWeight: "bold",
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables({ rows, dispatch }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [item, setItem] = React.useState({});

  const handleOpen = (row) => {
    setOpen(true);
    setItem(row);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">No</StyledTableCell>
              <StyledTableCell>Users</StyledTableCell>
              <StyledTableCell align="left">Trip</StyledTableCell>
              <StyledTableCell align="left">Proof Payment</StyledTableCell>
              <StyledTableCell align="left">Status</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, i) => (
              <StyledTableRow key={i}>
                <StyledTableCell align="left">{i + 1}</StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {formatString(row.user.username, 25)}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {formatString(row.trip.title, 25)}
                </StyledTableCell>
                <StyledTableCell align="left">
                  <Link
                    href={`${process.env.server}/images/${row.trip.image}`}
                    target="_blank"
                  >
                    {formatString(row.trip.image, 25)}
                  </Link>
                </StyledTableCell>
                <StyledTableCell
                  align="left"
                  style={{
                    color:
                      row.status === "approve"
                        ? "#0ACF83"
                        : row.status === "cancel"
                        ? "#FF0742"
                        : "#F7941E",
                  }}
                >
                  {row.status.toLowerCase() === "waiting payment"
                    ? "pending"
                    : row.status}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <IconButton onClick={() => handleOpen(row)}>
                    <SearchIcon style={{ color: "#2FC5F7" }} />
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ModalApprove
        open={open}
        setOpen={setOpen}
        item={item}
        dispatch={dispatch}
        rows={rows}
      />
    </>
  );
}
