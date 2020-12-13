import React from "react";
import {
  Button,
  Box,
  Paper,
  Grid,
  InputAdornment,
  IconButton,
  FormControl,
  OutlinedInput,
  InputLabel,
  LinearProgress,
  Avatar,
  TextField,
  Container,
  ButtonGroup,
  Checkbox,
  Typography,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";

export default function AddPersonalSkill() {
  return (
    <Container>
      <Paper>
        <Container>
          <Grid
            container
            spacing={4}
            alignItems="center"
            justify="center"
            style={{textAlign: "center"}}
          >
            <Grid item xs={12}>
              <h2>Add Personal Skill</h2>
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="filled-basic"
                label="Skill"
                variant="filled"
                placeholder="eg.Microsoft Word"
                style={{width: "100%"}}
              />
            </Grid>
            <Grid item xs={12}>
              <Box component="fieldset" mb={3} borderColor="transparent">
                <Rating name="customized-10" defaultValue={2} max={10} />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="secondary"
                style={{marginLeft: "10px", float: "right"}}
              >
                cancel
              </Button>
              <Button
                variant="contained"
                color="primary"
                style={{float: "right"}}
              >
                save
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </Container>
  );
}
