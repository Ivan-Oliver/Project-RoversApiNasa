import { FC, useCallback, useEffect, useState } from "react";
import Card from "../../components/card/index";
import Navbar from "../../components/Navbar";
import { getMars, Mars } from "../../services/Api/mars"
import { App, Container } from "./styles";
//import Pagination from "@mui/material/Pagination";
const Home: FC = () => {
  const [marsList, setMarsList] = useState<Mars[]>([]);

  const getMarsList = useCallback(async () => {
    const mars = await getMars();
    setMarsList(mars);
  }, [])

  useEffect(() => {
    console.log('entramos')
    getMarsList();
  }, [getMarsList]);

  return (
    <App>
     <Navbar/>
      <Container>
        {marsList.map((mars, index) => (
          <Card
            key={index}
            nasaId={mars.nasaId}
            sol={mars.sol}
            image={mars.image}
          />
        ))}
      </Container>
    </App>
  );
};

export default Home;
