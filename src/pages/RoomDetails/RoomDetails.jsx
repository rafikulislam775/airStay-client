import { useParams } from "react-router-dom";
import Container from "../../components/Shared/Container";
import Loader from "../../components/Shared/Loader";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/RoomDetails/Header";

const RoomDetails = () => {
  const { id } = useParams();
  const [room, setRoom] = useState({});

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://raw.githubusercontent.com/shakilahmedatik/stay-vista-part1/main/client/public/rooms.json"
    )
      .then((res) => res.json())
      .then((data) => {
        const singleRoom = data?.find((room) => room._id === id);
        setRoom(singleRoom);
        setLoading(false);
      });
  }, [id]);
  // console.log(rooms);
  if (loading) {
    return <Loader></Loader>;
  }
  return (
    <Container>
      <Helmet>
        <title>{room?.title}</title>
      </Helmet>
      {room && (
        <div className="flex flex-col gap-6">
          <Header room={room} />
        </div>
      )}
    </Container>
  );
};

export default RoomDetails;
