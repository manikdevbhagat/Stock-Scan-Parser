import axios from "axios";
import { useEffect } from "react";
import { BASE_URL } from "../config";
import { Link } from "react-router-dom";
import NameTag from "../components/NameTag";
import { useAppDispatch, useAppSelector } from "../hooks/reduxhooks";
import { setData } from "../features/dataSlice";

const Home = () => {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.data);
  const fetchData = async () => {
    const response = await axios.get(BASE_URL);
    dispatch(setData(response.data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ul>
      {data.map((el: Scan) => (
        <li key={el.id}>
          <Link
            className="home-link"
            to={"/" + el.id}
          >
            <NameTag name={el.name} tag={el.tag} color={el.color} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Home;