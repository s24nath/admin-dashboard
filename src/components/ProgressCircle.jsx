import { shades } from "../theme";

/* Import MUI component starts */
import { Box, useTheme } from "@mui/material";
/* Import MUI component ends */

const ProgressCircle = ({ progress = "0.75", size = "40" }) => {
  /* Other hooks declaration starts */
  const theme = useTheme();
  /* Other hooks declaration ends */

  /* Component variable declaration / object destructure starts */
  const colors = shades(theme.palette.mode);
  const angle = parseFloat(progress) * 360;
  /* Component variable declaration / object destructure ends */

  /* ************* Component rendering. JSX code ************* */

  return (
    <Box
      sx={{
        background: `radial-gradient(${colors.primary[400]} 55%, transparent 56%), conic-gradient(transparent 0deg ${angle}deg, ${colors.blueAccent[500]} ${angle}deg 360deg), ${colors.greenAccent[500]}`,
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
      }}
    ></Box>
  );
};

export default ProgressCircle;
