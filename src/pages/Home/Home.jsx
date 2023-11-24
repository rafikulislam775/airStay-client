
import { Helmet } from "react-helmet";
import Categories from "../../components/Categories/Categories";
import Rooms from "../../components/Rooms/Rooms";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>{"Air Stay | Vacation Homes & Condo Rentals"}</title>
      </Helmet>
      <Categories></Categories>
      <Rooms></Rooms>
    </div>
  );
};

export default Home;
