import React, { useState } from "react";
import axios from "axios";
import { v1 as uuid } from "uuid";

export const useFlip = () => {
  const [isFacingUp, setIsFacingUp] = useState(true);
  const flipCard = () => {
    setIsFacingUp((isUp) => !isUp);
  };
  return [isFacingUp, flipCard];
};

export const useAxios = (api) => {
  const [data, setData] = useState([]);
  const addData = async (endpoint) => {
    const response = await axios.get(api + endpoint);
    setData((data) => [...data, { ...response.data, id: uuid() }]);
  };
  return [data, addData];
};
