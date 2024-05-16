import * as React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import "./Menu.css";

export default function Menu() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{
        width: "25vw",
        height: "180vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#faf8eb",
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List>
        {[<Link to="/">Home</Link>, <Link to="/about">About</Link>].map(
          (text) => (
            <ListItem key={text} disablePadding>
              <ListItemText primary={text} />
            </ListItem>
          )
        )}
      </List>
      <Divider />
    </Box>
  );
  return (
    <>
      <Button id="burger" onClick={toggleDrawer(true)}>
        &#9776;
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
        {DrawerList}
      </Drawer>
      <div className="desktop">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    </>
  );
}
