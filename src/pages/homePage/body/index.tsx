import { Avatar, Box, Chip, Divider, Grid, Toolbar, Typography } from '@material-ui/core';
import { dbvideos } from '../../../components/db'


export default function BodyMain() {
  return (
    <>

      <Box p={0} sx={{ flexGrow: 1, background: '#181818' }}>
        <Toolbar />
        <Box width="100%" >
          <Divider />
          <Box sx={{ paddingY: 1, background: '#202020' }} >
            <Chip label="All" variant="outlined" sx={{ marginLeft: 1, marginRight: 1 }} />
            <Chip label="Playlists" variant="outlined" sx={{ marginRight: 1 }} />
            <Chip label="Soft Rock" variant="outlined" sx={{ marginRight: 1 }} />
            <Chip label="Albums" variant="outlined" sx={{ marginRight: 1 }} />
            <Chip label="All" variant="outlined" sx={{ marginRight: 1 }} />
            <Chip label="Chants" variant="outlined" sx={{ marginRight: 1 }} />
            <Chip label="Soul Music" variant="outlined" sx={{ marginRight: 1 }} />
            <Chip label="Jazz" variant="outlined" sx={{ marginRight: 1 }} />
            <Chip label="Music" variant="outlined" sx={{ marginRight: 1 }} />
            <Chip label="Live" variant="outlined" sx={{ marginRight: 1 }} />
            <Chip label="Electronic dance music" variant="outlined" sx={{ marginRight: 1 }} />
            <Chip label="Samba" variant="outlined" sx={{ marginRight: 1 }} />
            <Chip label="Samba" variant="outlined" sx={{ marginRight: 1 }} />
            <Chip label="Samba" variant="outlined" sx={{ marginRight: 1 }} />
            <Chip label="Samba" variant="outlined" sx={{ marginRight: 1 }} />
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