/* Import MUI component starts */
import { Box } from "@mui/material";
/* Import MUI component ends */

/* Import local pages and component starts */
import PageHeader from "../../components/PageHeader";
import Line from "../../components/charts/Line";
/* Import local pages and component ends */

const LineGraph = () => {
  /* ************* Component rendering. JSX code ************* */

  return (
    <Box m="20px">
      <PageHeader title="Line Chart" subtitle="Simple Line Chart" />
      <Box height="75vh">
        <Line />
      </Box>
    </Box>
  );
};

export default LineGraph;
