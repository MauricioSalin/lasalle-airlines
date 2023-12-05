import axios from "axios";

const baseURL = "localhost:8080";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

const config = {
  headers: {
    Authorization: token,
  },
};

// Clients
export const getClient = (id) =>
  axios.get(`${baseURL}/lasalleair/members/${id}`, config);

export const getAllClients = () =>
  axios.get(`${baseURL}/lasalleair/members`, config);

export const insertClient = (payload) =>
  axios.post(
    `${baseURL}/lasalleair/members`,
    { ...payload, status: true },
    config
  );

export const updateClient = (payload) =>
  axios.put(
    `${baseURL}/lasalleair/members`,
    { ...payload, status: true },
    config
  );

export const deleteClient = (id) =>
  axios.delete(`${baseURL}/lasalleair/instructors/${id}`, config);

// Instructor
export const getInstructor = (id) =>
  axios.get(`${baseURL}/lasalleair/instructors/${id}`, config);

export const getAllInstructors = () =>
  axios.get(`${baseURL}/lasalleair/instructors`, config);

export const insertInstructor = (payload) =>
  axios.post(
    `${baseURL}/lasalleair/instructors`,
    { ...payload, status: true },
    config
  );

export const updateInstructor = (payload) =>
  axios.put(
    `${baseURL}/lasalleair/instructors`,
    { ...payload, status: true },
    config
  );

export const deleteInstructor = (id) =>
  axios.delete(`${baseURL}/lasalleair/instructors/${id}`, config);

// Hours
export const insertHours = (payload) =>
  axios.post(
    `${baseURL}/lasalleair/members/hours`,
    { ...payload, status: true },
    config
  );

// License
export const emitLicense = (payload) =>
  axios.post(
    `${baseURL}/lasalleair/members/${payload.id}/license`,
    { ...payload, status: true },
    config
  );
