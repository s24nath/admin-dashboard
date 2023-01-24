import { shades } from "../theme.js";

/* Import MUI component starts */
import { Typography, Box, useTheme } from "@mui/material";
/* Import MUI component ends */

const PageHeader = ({ title, subtitle }) => {
  /* Other hooks declaration starts */
  const theme = useTheme();
  /* Other hooks declaration ends */

  /* Component variable declaration / object destructure starts */
  const colors = shades(theme.palette.mode);
  /* Component variable declaration / object destructure ends */

  /* ************* Component rendering. JSX code ************* */

  return (
    <Box mb="30px">
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ m: "0 0 5px 0" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[400]}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default PageHeader;
