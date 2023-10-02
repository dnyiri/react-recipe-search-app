import axios from "axios";
import { API_URL } from "../constants/constant";
import staticDataMulti from './staticDataMulti.json'; 
import staticDataSingle from './staticDataSingle.json'; 

export const getRecipes = async (searchedQuery) => {
  try {
    let response = await axios.get(`${API_URL}/search?q=${searchedQuery}`);

    console.log("Fetched Recipes: ", response);

    return response.data;
    //return staticDataMulti.data;

  } catch (error) {
    console.log("Error while calling the api ", error.message);
    return error.response;
  }
};



export const getRecipe = async (searchedQuery) => {
  try {
    let response = await axios.get(`${API_URL}/get?rId=${searchedQuery}`);

    console.log("Fetched Single Recipe: ", response);

    return response.data;
    //return staticDataSingle.data;

  } catch (error) {
    console.log("Error while calling the api ", error.message);
    return error.response;
  }
};
