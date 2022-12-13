import axios from "axios";
import { toast } from "react-toastify";

const API_BASE_URL = import.meta.env.VITE_API_URL;

let token = null

const setToken = newToken => {
  token = ` Bearer ${newToken}`
}

const getAll = async(path) => {
  const configHeader = {
    headers: {
      accept: "application/json",
      Authorization: token
    }
  }
  try {
    const res = await axios.get(`${API_BASE_URL}${path}`, configHeader)
    if (res.statusText === "OK") {
      toast.success("Successfully");
      return res.data
    }
  } catch (error) {
    if (error.response.status) {
      return toast.error(error.message);
    }
  }
}

const create = async(data, path) => {
  const configHeader = {
    headers: {
      accept: "application/json",
      Authorization: token
    }
  }
  try {
    const res = await axios.post(`${API_BASE_URL}${path}`, data, configHeader)
    if (res.statusText === "OK") {
      return res;
    }
  } catch (error) {
    if (error.response.status) {
      return toast.error(error.message);
    }
  }
}

const update = async(id, data, path) => {
  const configHeader = {
    headers: {
      accept: "application/json",
      Authorization: token
    }
  }
  try {
    const res = await axios.patch(`${API_BASE_URL}${path}${id}`, data, configHeader)
    if (res.statusText === "OK") {
      return toast.success("Payment Successfully");
    }
  } catch (error) {
    if (error.response.status) {
      return toast.error(error.message);
    }
  }
}

export {create, update,getAll, setToken}


