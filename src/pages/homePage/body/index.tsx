import { useState } from 'react';
import { Avatar, Box, Divider, Grid, Tab, Tabs, Toolbar, Typography, tabsClasses } from '@material-ui/core';
import { dbvideos, dbTabs } from '../../../components/db';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles((theme) => ({
  tabRoot: {
    minHeight: "32px !important",
    fontSize: "14px !important",
    padding: "7px 16px !important",
  },
}));

export default function BodyMain() {

  const classes = useStyles();
  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  }

  return (
    <>
      <Box p={0} sx={{ flexGrow: 1, background: '#181818' }}>
        <Toolbar />
        <Box>
          <Divider />
          <Box sx={{ paddingY: 1, background: '#202020' }} >
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              aria-label="visible arrows tabs example"
              classes={{ root: classes.tabRoot }}
              sx={{
                [`& .${tabsClasses.scrollButtons}`]: {
                  '&.Mui-disabled': { opacity: 0.3 },
                  color: "#fff"
                },
                [`& .${tabsClasses.indicator}`]: {
                  '&.MuiTabs-indicator': {
                    display: "none",
                  },
                },
              }}>
              {
                dbTabs.map((items, index) => (
                  <Tab key={index} sx={{
                    background: 'rgba(255,255,255, 0.1)',
                    borderRadius: "35px",
                    fontSize: "14px",
                    textTransform: "none",
                    border: '1px solid rgba(255,255,255, 0.1)',
                    marginLeft: "10px !important"
                  }}
                    classes={{ root: classes.tabRoot }}
                    label={items.title} />
                ))}
            </Tabs>
          </Box>
          <Divider />
        </Box>

        <Box sx={{ p: 2, }}>
          <Grid container spacing={2}>
            {
              dbvideos.map((items: any, inddex: any) => (
                <Grid item lg={3} md={4} sm={6} xs={12} key={inddex}>
                  <Box>
                    <img
                      style={{ width: '100%' }}
                      alt={items.title}
                      src={items.thumb} />
                    <Box sx={{ display: "flex" }}>
                      <Box>
                        <Avatar alt="F" src={items.avatar} />
                      </Box>
                      <Box sx={{ width: 245, height: 112, marginLeft: "5px" }}>

                        <Typography
                          style={{ fontWeight: 600, fontSize: "14px" }}
                          gutterBottom
                          variant="body1"
                          color="textPrimary">
                          {items.title}
                        </Typography>

                        <Typography
                          display="block"
                          variant="body2"
                          color="textSecondary">
                          {items.channel}
                        </Typography>

                        <Typography
                          variant="body2"
                          color="textPrimary">
                          {`${items.views} • ${items.date}`}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              ))
            }
          </Grid>
        </Box>
      </Box>
    </>
  )
}