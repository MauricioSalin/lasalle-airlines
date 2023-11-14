import axios from "axios";

const baseURL = "https://tuareg-api-production.up.railway.app";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

const config = {
  headers: {
    Authorization: token,
  },
};

// Clients
export const getAllClients = () => axios.get(`${baseURL}/clients`, config);

export const updateClient = (id, payload) =>
  axios.put(`${baseURL}/clients/${id}`, { ...payload, status: true }, config);

export const insertClient = (payload) =>
  axios.post(`${baseURL}/clients`, { ...payload, status: true }, config);

export const deleteClient = (id) =>
  axios.delete(`${baseURL}/clients/${id}`, config);

// Schedules
export const getAllSchedules = () =>
  axios.get(`${baseURL}/schedulings`, config);

export const updateSchedule = (id, payload) =>
  axios.put(
    `${baseURL}/schedulings/${id}`,
    { ...payload, status: true },
    config
  );

export const insertSchedule = (payload) =>
  axios.post(`${baseURL}/schedulings`, { ...payload, status: true }, config);

export const deleteSchedule = (id) =>
  axios.delete(`${baseURL}/schedulings/${id}`, config);

// Monthly
export const getAllMonthly = () => axios.get(`${baseURL}/payments`, config);

export const updateMonthly = (id, payload) =>
  axios.put(`${baseURL}/payments/${id}`, { ...payload, status: true }, config);

export const insertMonthly = (payload) =>
  axios.post(`${baseURL}/payments`, { ...payload, status: true }, config);

export const deleteMonthly = (id) =>
  axios.delete(`${baseURL}/payments/${id}`, config);

// Responsibles
export const getAllResponsibles = () =>
  axios.get(`${baseURL}/responsibles`, config);

export const updateResponsible = (id, payload) =>
  axios.put(
    `${baseURL}/responsibles/${id}`,
    { ...payload, status: true },
    config
  );

export const insertResponsible = (payload) =>
  axios.post(`${baseURL}/responsibles`, { ...payload, status: true }, config);

export const deleteResponsible = (id) =>
  axios.delete(`${baseURL}/responsibles/${id}`, config);

// Tasks
export const getAllTasks = () => axios.get(`${baseURL}/todos`, config);

export const updateTask = (id, payload) =>
  axios.put(`${baseURL}/todos/${id}`, { ...payload, status: true }, config);

export const insertTask = (payload) =>
  axios.post(`${baseURL}/todos`, { ...payload, status: true }, config);

export const deleteTask = (id) =>
  axios.delete(`${baseURL}/todos/${id}`, config);
