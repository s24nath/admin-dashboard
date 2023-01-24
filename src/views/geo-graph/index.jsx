import { shades } from "../../theme";

/* Import MUI component starts */
import { Box } from "@mui/material";
import { useTheme } from "@mui/material";
/* Import MUI component ends */

/* Import local pages and component starts */
import PageHeader from "../../components/PageHeader";
import Geo from "../../components/charts/Geo";
/* Import local pages and component ends */

const GeographyGraph = () => {
  /* Other hooks declaration starts */
  const theme = useTheme();
  /* Other hooks declaration ends */

  /* Component variable declaration / object destructure starts */
  const colors = shades(theme.palette.mode);
  /* Component variable declaration / object destructure ends */

  /* ************* Component rendering. JSX code ************* */

  return (
    <Box m="20px">
      <PageHeader title="Geography Chart" subtitle="Simple Geography Chart" />
      <Box
        height="75vh"
        border={`1px solid ${colors.grey[100]}`}
        borderRadius="4px"
      >
        <Geo />
      </Box>
    </Box>
  );
};

export default GeographyGraph;
