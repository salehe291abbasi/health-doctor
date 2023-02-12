import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";

const Bar = () => {
  return (
    <Box m="20px">
      <Box sx={{direction:"rtl"}}>
         <Header title="نمودار بار" subtitle="نمودار بار وضعیت سلامت جو" />
      </Box>
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
