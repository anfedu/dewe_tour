import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useRouter } from "next/router";
import {
  IconButton,
  Collapse,
  Popper,
  Paper,
  MenuList,
  MenuItem,
  ClickAwayListener,
  Avatar,
  Divider,
  Box,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  },
  menuMobileWrapper: {
    background: "none",
    color: "#ccc",
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  },
  arrow: {
    width: 0,
    height: 0,
    borderLeft: "15px solid transparent",
    borderRight: "15px solid transparent",
    borderBottom: "17px solid white",
    position: "absolute",
    top: -7,
    right: theme.spacing(2),
  },
  menu: { marginLeft: 10, fontSize: 18, fontWeight: "bold" },
  icon: { marginLeft: 20 },
  menuItem: {
    "&:hover": {
      backgroundColor: "#444",
    },
  },
}));

export default function UserMenu({ user, logout }) {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const router = useRouter();

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const handleLogout = (event) => {
    logout();
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const classes = useStyles();
  function randomColor(string) {
    return "#f" + string.slice(1, 6);
  }

  return (
    <div className={classes.root}>
      <IconButton
        ref={anchorRef}
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <Avatar
          style={{
            backgroundColor: randomColor(user.phone ? user.phone : "pink"),
            fontWeight: "bold",
            fontSize: 25,
          }}
        >
          {user?.username?.slice(0, 1).toUpperCase()}
        </Avatar>
      </IconButton>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        placement="bottom-end"
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Collapse
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper
              style={{
                width: 220,
                height: 187,
              }}
            >
              <Box variant="div" className={classes.arrow} />
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="menu-list-grow"
                  onKeyDown={handleListKeyDown}
                  style={{ paddingTop: 20 }}
                >
                  <MenuItem onClick={handleClose}>
                    <img src="/user.png" className={classes.icon} alt="" />{" "}
                    <span className={classes.menu}>Profile</span>
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>
                    <img src="/bill.png" className={classes.icon} alt="" />{" "}
                    <span className={classes.menu}>Pay</span>
                  </MenuItem>
                  <Divider
                    style={{ height: 3, marginTop: 20, marginBottom: 10 }}
                  />
                  <MenuItem onClick={handleLogout}>
                    <img src="/logout.png" className={classes.icon} alt="" />{" "}
                    <span className={classes.menu}>Logout</span>
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Collapse>
        )}
      </Popper>
      <Paper className={classes.menuMobileWrapper}>
        <ClickAwayListener onClickAway={handleClose}>
          <MenuList
            autoFocusItem={open}
            id="menu-list-grow"
            onKeyDown={handleListKeyDown}
          >
            <MenuItem className={classes.menuItem} onClick={handleClose}>
              <img src="/user.png" alt="" />{" "}
              <span className={classes.menu}>Profile</span>
            </MenuItem>
            <MenuItem className={classes.menuItem} onClick={handleLogout}>
              <img src="/logout.png" alt="" />{" "}
              <span className={classes.menu}>Logout</span>
            </MenuItem>
          </MenuList>
        </ClickAwayListener>
      </Paper>
    </div>
  );
}
