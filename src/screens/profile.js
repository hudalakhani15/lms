import {
  Button,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import Avatar from "@mui/material/Avatar";

function StudentProfile() {
  return (
    <>
      <div
        style={{
          width: "100%",
          minHeight: "100vh",
          height: "100%",
          margin: 0,
        }}
        className="bgLight"
      >
        <Container>
          <Grid container>
            <Grid sx={{ padding: 1 }} md={3} item>
              <Paper sx={{ padding: 2, textAlign: "center" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Avatar
                    alt="Huda"
                    src=" /static/images/avatar/1.jpg" 
                    sx={{ width: 100, height: 100 }}
                  />
                </Box>
                <Box>
                  <Typography variant="h5">Huda Lakhani</Typography>

                  <Box sx={{ padding: 2 }}>
                    <Typography sx={{ fontWeight: "bold" }} variant="p">
                      Cource
                    </Typography>
                  </Box>
                  <Divider />
                  <Box sx={{ padding: 2 }}>
                    <Typography sx={{ fontWeight: "bold" }} variant="p">
                      Father Name
                    </Typography>
                  </Box>
                  <Divider />
                  <Box sx={{ padding: 2 }}>
                    <Typography sx={{ fontWeight: "bold" }} variant="p">
                      CNIC
                    </Typography>
                  </Box>
                  <Divider />
                  <Box sx={{ padding: 2 }}>
                    <Typography sx={{ fontWeight: "bold" }} variant="p">
                      Contact
                    </Typography>
                  </Box>
                  <Divider />
                  <Box sx={{ paddingY: 4 }}>
                    <Button variant="contained">Logout</Button>
                  </Box>
                </Box>
              </Paper>
            </Grid>
            <Grid sx={{ padding: 1 }} md={9} item>
              <Paper sx={{ padding: 2 }}>
                <Typography>Result</Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}

export default StudentProfile;