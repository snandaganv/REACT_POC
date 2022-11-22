import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { PropTypes } from "prop-types";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

export const PapersBasic = (props) => {
  const { elevation, variant, square, width, height } = props;
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: { width },
          height: { height },
        },
      }}
    >
      <Paper elevation={elevation} variant={variant} square={square} />
    </Box>
  );
};

PapersBasic.propTypes = {
  variant: PropTypes.oneOf(["elevation", "outlined"]),
  elevation: PropTypes.number,
  square: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
};

PapersBasic.defaultProps = {
  variant: "elevation",
  elevation: 2,
  square: false,
  width: 128,
  height: 128,
};

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: "60px",
}));

const darkTheme = createTheme({ palette: { mode: "dark" } });
const lightTheme = createTheme({ palette: { mode: "light" } });

export const Elevations = (props) => {
  return (
    <Grid container spacing={2}>
      {[lightTheme, darkTheme].map((theme, index) => (
        <Grid item xs={6} key={index}>
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                p: 2,
                bgcolor: "background.default",
                display: "grid",
                gridTemplateColumns: { md: "1fr 1fr" },
                gap: 2,
              }}
            >
              {[0, 1, 2, 3, 4, 6, 8, 12, 16, 24].map((elevation) => (
                <Item key={elevation} elevation={elevation}>
                  {`elevation=${elevation}`}
                </Item>
              ))}
            </Box>
          </ThemeProvider>
        </Grid>
      ))}
    </Grid>
  );
};

Elevations.propTypes = {};
Elevations.defaultProps = {};
