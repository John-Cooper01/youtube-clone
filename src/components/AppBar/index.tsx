import { makeStyles } from '@material-ui/styles';
import { AppBar, Box, Button, Divider, Drawer, Hidden, IconButton, InputBase, List, ListItem, ListItemIcon, ListItemText, ListSubheader, Paper, Toolbar, Typography, useTheme } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AppsIcon from '@material-ui/icons/Apps';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import AddCircle from '@material-ui/icons/AddCircle';
import AccountCircle from '@material-ui/icons/AccountCircle';
import BodyMain from '../../pages/homePage/body';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';


const useStyles = makeStyles((theme) => ({
  appBar: {
    boxShadow: 'none !important',
  },
  logo: {
    height: '27px',
  },
  grow: {
    flexGrow: 1
  },
  listItemText: {
    fontSize: '14px !important',
  },
  subheader: {
    textTransform: 'uppercase',
  },
}));

const drawerWidth = 240;

export default function TopBar() {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <>
      <Box sx={{ flexGrow: 1, background: '#181818', height: '100%' }} >
        <AppBar color="inherit"
          className={classes.appBar}
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, background: '#202020' }} >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <img src={theme.palette.mode === 'dark' ? '/images/branco.png' : '/images/preto.png'} alt='logo' className={classes.logo} />

            <div className={classes.grow} />
            <Box sx={{ position: "absolute", left: "25%", display: "flex", alignItems: "center" }}>
              <Paper sx={{ height: "35px" }} >
                <InputBase
                  sx={{ height: "40px", width: "562px", ml: 1, flex: 1 }}
                  placeholder="Search"
                  inputProps={{ "aria-label": "search" }}
                  size="small" />
              </Paper>
              <Button
                sx={{ height: "36px", background: "#313131", color: "#515151" }}
                variant="contained"
                color="inherit">
                <SearchIcon />
              </Button>

              <IconButton color="inherit">
                <MicIcon sx={{ width: "33px", height: "33px" }} />
              </IconButton>
            </Box>

            <IconButton color="inherit">
              <AppsIcon />
            </IconButton>

            <IconButton color="inherit">
              <MoreVertIcon />
            </IconButton>
            <Button
              startIcon={<AccountCircleIcon />}
              variant="outlined"
              color="secondary">
              Login
            </Button>
          </Toolbar>
        </AppBar>
        <Box display="flex">

          <Hidden mdDown>
            <Drawer
              variant="permanent"
              sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box", borderRight: "none" },
              }}
            >
              <Toolbar />
              <Box sx={{ overflow: "auto" }}>
                <List>
                  <ListItem button>
                    <ListItemIcon sx={{ color: "#aaa" }}>
                      {<HomeIcon />}
                    </ListItemIcon>
                    <ListItemText
                      classes={{
                        primary: classes.listItemText
                      }}
                      primary={"Home"} />
                  </ListItem>
                  <ListItem button >
                    <ListItemIcon sx={{ color: "#aaa" }}>
                      {<ExploreIcon />}
                    </ListItemIcon>
                    <ListItemText
                      classes={{ primary: classes.listItemText }}
                      primary={'Explore'} />
                  </ListItem>
                  <ListItem button >
                    <ListItemIcon sx={{ color: "#aaa" }}>
                      {<SubscriptionsIcon />}
                    </ListItemIcon>
                    <ListItemText
                      classes={{ primary: classes.listItemText }}
                      primary={'Subscriptions'} />
                  </ListItem>

                </List>
                <Divider />
                <List>
                  <ListItem button >
                    <ListItemIcon sx={{ color: "#aaa" }}>
                      {<VideoLibraryIcon />}
                    </ListItemIcon>
                    <ListItemText
                      classes={{ primary: classes.listItemText }}
                      primary={'Libray'} />
                  </ListItem>
                  <ListItem button >
                    <ListItemIcon sx={{ color: "#aaa" }}>
                      {<HistoryIcon />}
                    </ListItemIcon>
                    <ListItemText
                      classes={{ primary: classes.listItemText }}
                      primary={'History'} />
                  </ListItem>
                </List>
                <Divider />
                <Box p={3}>
                  <Typography variant='body2'>
                    Sign in to like videos, comment, and subscribe.
                  </Typography>
                  <Box mt={2}>
                    <Button
                      variant='outlined'
                      color='secondary'
                      startIcon={<AccountCircle />}
                    >
                      SIGN IN
                    </Button>
                  </Box>
                </Box>
                <Divider />
                <List
                  component='nav'
                  aria-labelledby='nested-list-subheader'
                  subheader={
                    <ListSubheader
                      component='div'
                      id='nested-list-subheader'
                      sx={{
                        textTransform: 'uppercase',
                      }}>
                      Best of Youtube
                    </ListSubheader>}>
                  <ListItem button>
                    <ListItemIcon sx={{ color: "#aaa" }}>
                      {<AddCircle />}
                    </ListItemIcon>
                    <ListItemText
                      classes={{ primary: classes.listItemText }}
                      primary={'Music'} />
                  </ListItem>

                  <ListItem button >
                    <ListItemIcon sx={{ color: "#aaa" }}>
                      {<AddCircle />}
                    </ListItemIcon>
                    <ListItemText
                      classes={{ primary: classes.listItemText }}
                      primary={'Sports'} />
                  </ListItem>

                  <ListItem button >
                    <ListItemIcon sx={{ color: "#aaa" }}>
                      {<AddCircle />}
                    </ListItemIcon>
                    <ListItemText
                      classes={{ primary: classes.listItemText }}
                      primary={'Gaming'} />
                  </ListItem>

                  <ListItem button >
                    <ListItemIcon sx={{ color: "#aaa" }}>
                      {<AddCircle />}
                    </ListItemIcon>
                    <ListItemText
                      classes={{ primary: classes.listItemText }}
                      primary={'Movies'} />
                  </ListItem>

                  <ListItem button >
                    <ListItemIcon sx={{ color: "#aaa" }}>
                      {<AddCircle />}
                    </ListItemIcon>
                    <ListItemText
                      classes={{ primary: classes.listItemText }}
                      primary={'News'} />
                  </ListItem>

                  <ListItem button >
                    <ListItemIcon sx={{ color: "#aaa" }}>
                      {<AddCircle />}
                    </ListItemIcon>
                    <ListItemText
                      classes={{ primary: classes.listItemText }}
                      primary={'Live'} />
                  </ListItem>

                  <ListItem button >
                    <ListItemIcon sx={{ color: "#aaa" }}>
                      {<AddCircle />}
                    </ListItemIcon>
                    <ListItemText
                      classes={{ primary: classes.listItemText }}
                      primary={'Learning'} />
                  </ListItem>

                  <ListItem button >
                    <ListItemIcon sx={{ color: "#aaa" }}>
                      {<AddCircle />}
                    </ListItemIcon>
                    <ListItemText
                      classes={{ primary: classes.listItemText }}
                      primary={'Spotlight'} />
                  </ListItem>

                  <ListItem button >
                    <ListItemIcon sx={{ color: "#aaa" }}>
                      {<AddCircle />}
                    </ListItemIcon>
                    <ListItemText
                      classes={{ primary: classes.listItemText }}
                      primary={'360° Video'} />
                  </ListItem>
                </List>
                <Divider />
                <List>
                  <ListItem button >
                    <ListItemIcon sx={{ color: "#aaa" }}>
                      {<AddCircle />}
                    </ListItemIcon>
                    <ListItemText
                      classes={{ primary: classes.listItemText }}
                      primary={'Browse channels'} />
                  </ListItem>
                </List>


                <Divider />
                <List
                  component='nav'
                  aria-labelledby='nested-list-subheader'
                  subheader={
                    <ListSubheader
                      component='div'
                      id='nested-list-subheader'
                      sx={{ textTransform: 'uppercase' }}>
                      MORE FROM YOUTUBE
                    </ListSubheader>}>
                  <ListItem button >
                    <ListItemIcon sx={{ color: "#aaa" }}>
                      {<AddCircle />}
                    </ListItemIcon>
                    <ListItemText
                      classes={{ primary: classes.listItemText }}
                      primary={'YouTube Premium'} />
                  </ListItem>

                  <ListItem button >
                    <ListItemIcon sx={{ color: "#aaa" }}>
                      {<AddCircle />}
                    </ListItemIcon>
                    <ListItemText
                      classes={{ primary: classes.listItemText }}
                      primary={'Live'} />
                  </ListItem>
                  <Divider />
                  <ListItem button>
                    <ListItemIcon sx={{ color: "#aaa" }}>
                      {<AddCircle />}
                    </ListItemIcon>
                    <ListItemText
                      classes={{ primary: classes.listItemText }}
                      primary={'Settings'} />
                  </ListItem>

                  <ListItem button >
                    <ListItemIcon sx={{ color: "#aaa" }}>
                      {<AddCircle />}
                    </ListItemIcon>
                    <ListItemText
                      classes={{ primary: classes.listItemText }}
                      primary={'Report history'} />
                  </ListItem>

                  <ListItem button >
                    <ListItemIcon sx={{ color: "#aaa" }}>
                      {<AddCircle />}
                    </ListItemIcon>
                    <ListItemText
                      classes={{ primary: classes.listItemText }}
                      primary={'Help'} />
                  </ListItem>

                  <ListItem button >
                    <ListItemIcon sx={{ color: "#aaa" }}>
                      {<AddCircle />}
                    </ListItemIcon>
                    <ListItemText
                      classes={{ primary: classes.listItemText }}
                      primary={'Send feedback'} />
                  </ListItem>
                </List>
                <Divider />
                <Box sx={{ padding: "15px", display: "flex", justifyContent: "center", color: "#aaa", flexDirection: "column" }}>
                  <Box sx={{ width: "200px", fontSize: "13px", textAlign: "left" }}>
                    About Press Copyright Contact us Creators Advertise Developers
                    <br />
                    <br />
                    Terms Privacy Policy & Safety How YouTube works Test new features
                    <br />
                    <br />
                  </Box>
                  <Box sx={{ fontSize: "13px", color: "#717171" }}>
                    © 2021 Google LLC
                  </Box>
                </Box>
              </Box>
            </Drawer>
          </Hidden>

          <BodyMain />
        </Box>
      </Box>
    </>
  )
}