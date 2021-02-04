import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  IconButton,
  Grow,
  Popper,
  Paper,
  MenuList,
  MenuItem,
  ClickAwayListener,
  Avatar,
} from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

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
}));

export default function UserMenu({ user, logout }) {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

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

  return (
    <div className={classes.root}>
      <IconButton
        ref={anchorRef}
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <Avatar
          style={{ backgroundColor: randomColor(user.id), fontWeight: "bold" }}
        >
          {user.username.slice(0, 1).toUpperCase()}
        </Avatar>
      </IconButton>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="menu-list-grow"
                  onKeyDown={handleListKeyDown}
                >
                  <MenuItem onClick={handleClose}>
                    <AccountCircleIcon />{" "}
                    <span style={{ marginLeft: 5 }}>Profile</span>
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>
                    <ExitToAppIcon />{" "}
                    <span style={{ marginLeft: 5 }}>Logout</span>
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
      <Paper className={classes.menuMobileWrapper}>
        <ClickAwayListener onClickAway={handleClose}>
          <MenuList
            autoFocusItem={open}
            id="menu-list-grow"
            onKeyDown={handleListKeyDown}
          >
            <MenuItem onClick={handleClose}>
              <AccountCircleIcon />{" "}
              <span style={{ marginLeft: 5 }}>Profile</span>
            </MenuItem>
            <MenuItem onClick={handleLogout}>
              <ExitToAppIcon /> <span style={{ marginLeft: 5 }}>Logout</span>
            </MenuItem>
          </MenuList>
        </ClickAwayListener>
      </Paper>
    </div>
  );
}
