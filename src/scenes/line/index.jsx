import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";

const Line = () => {
  return (
    <Box m="20px">
      <Box  sx={{direction:"rtl"}}>
        <Header title="نمودار خطی" subtitle="نمودار خطی وضعیت سلامت جو" />
      </Box>
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;
