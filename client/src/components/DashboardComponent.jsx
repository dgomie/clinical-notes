import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

const DashboardComponent = () => {
  const navigate = useNavigate();



  return (
    <Container sx={{ paddingBottom: '50px', display: "flex", justifyContent: 'center', alignItems: 'center'  }}>

     Dashboard

    </Container>
  );
};
export default DashboardComponent;