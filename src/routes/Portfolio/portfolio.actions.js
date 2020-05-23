const API = window.API_URL;

export const fetchAllProjects = async () => {
  const request = await fetch(`${API}/projects`);
  const response = await request.json();
  return response;
};
