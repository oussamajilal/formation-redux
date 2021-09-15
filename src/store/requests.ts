import axios from "axios";
const BASE_URL = "http://localhost:3001";

const fetchProfile = async () => {
  const { data } = await axios.get(`${BASE_URL}/profile`);
  return data;
};

const fetchClients = async () => {
  const { data } = await axios.get(`${BASE_URL}/clients`);
  return data;
};

const requests = { fetchProfile, fetchClients };

export default requests;
