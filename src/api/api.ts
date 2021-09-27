export const BASE_URL = 'https://bloggy-api.herokuapp.com';

export const request = async (url:string, item = {}) => {
  const response = await fetch(`${BASE_URL}/${url}`, item);

  return response.json();
};
