import { successHandler, errorHandler } from "../utils";
import endPoint from "./endpoint";
import axios from "axios";

export const getGameDataService = () => {
  return axios
    .get(endPoint.getGameData())
    .then(response => {
      return successHandler(response).then(data => {
        return data;
      });
    })
    .catch(error => {
      return errorHandler(error);
    });
};