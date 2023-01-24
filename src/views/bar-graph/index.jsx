/* Import MUI component starts */
import { Box } from "@mui/material";
/* Import MUI component ends */

/* Import local pages and component starts */
import PageHeader from "../../components/PageHeader";
import Bar from "../../components/charts/Bar";
/* Import local pages and component ends */

const BarGraph = () => {
  /* ************* Component rendering. JSX code ************* */

  return (
    <Box m="20px">
      <PageHeader title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="75vh">
        <Bar />
      </Box>
    </Box>
  );
};

export default BarGraph;
