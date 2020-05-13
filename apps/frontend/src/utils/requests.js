const API_URL = process.env.API_URL || "";

export const getData = async (path) => {
  const request = await fetch(`${API_URL}/${path}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const response = await request.json();
  return response;
};

export const postData = async (path, options) => {
  const request = await fetch(`${API_URL}/${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  });
  const response = await request.json();
  return response;
};
