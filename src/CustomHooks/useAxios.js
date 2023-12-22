import React from "react";
import axios from "axios";

const baseURL =
  "https://pixabay.com/api/?key=41123393-d488d28859f6869a5072a3240&q=mountain&orientation=horizontal&editors_choice=true";

const useAxios = axios.create({
  baseURL: baseURL,
});

export default useAxios;
