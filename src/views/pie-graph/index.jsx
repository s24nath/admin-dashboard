/* Import MUI component starts */
import { Box } from "@mui/material";
/* Import MUI component ends */

/* Import local pages and component starts */
import PageHeader from "../../components/PageHeader";
import Pie from "../../components/charts/Pie";
/* Import local pages and component ends */

const PieGraph = () => {
  /* ************* Component rendering. JSX code ************* */

  return (
    <Box m="20px">
      <PageHeader title="Pie Chart" subtitle="Simple Pie Chart" />
      <Box height="75vh">
        <Pie />
      </Box>
    </Box>
  );
};

export default PieGraph;
