import {
  makeStyles,
  Drawer,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  AppBar,
  Toolbar,
  Avatar,
} from "@material-ui/core";
import { AddCircleOutlineOutlined, SubjectOutlined } from "@material-ui/icons";
import { useNavigate, useLocation } from "react-router-dom";

const drawerWidth = 240;

const menuItems = [
  {
    text: "Notes",
    icon: <SubjectOutlined />,
    color: "secondary",
    path: "/newpage",
  },
  {
    text: "Create",
    icon: <AddCircleOutlineOutlined />,
    color: "primary",
    path: "/create",
  },
];

const useStyles = makeStyles((theme) => {
  return {
    page: {
      backgroundColor: "#fafafa",
      width: "100%",
      padding: theme.spacing(3),
    },
    title: {
      fontSize: 25,
      padding: theme.spacing(3),
    },
    root: {
      display: "flex",
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    active: {
      backgroundColor: "#ffc0cb",
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
    avatar: {
      marginLeft: theme.spacing(2),
    },
  };
});

const Layout = ({ children }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className={classes.root}>
      <AppBar
        className={classes.appBar}
        color="secondary"
        position="fixed"
        elevation={0}
      >
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Notes App
          </Typography>
          <Avatar className={classes.avatar} variant="circle">
            <Typography>Hodo</Typography>
          </Avatar>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{ paper: classes.drawerPaper }}
        anchor="left"
      >
        <div>
          <Typography variant="h6">Programming Notes</Typography>
        </div>
        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={() => navigate(item.path)}
              className={location.pathname === item.path ? classes.active : ""}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </div>
  );
};

export default Layout;
