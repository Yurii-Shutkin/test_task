const API_URL = 'https://api.escuelajs.co/api/v1/products/5';

const get = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

export default get;
