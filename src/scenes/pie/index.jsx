import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";

const Pie = () => {
  return (
    <Box m="20px">
      <Box  sx={{direction:"rtl"}}>
       <Header title="نمودار پای" subtitle="نمودار پای وضعیت سلامت جو" />
      </Box>
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;
