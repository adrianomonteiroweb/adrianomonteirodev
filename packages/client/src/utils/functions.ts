import axios from 'axios';

export default async function axiosFunction(
  alias: string,
  baseURL = 'https://adrianomonteirodev-server-2ulhxmpt0-adrianomonteiroweb.vercel.app'
) {
  try {
    const response = await axios.get(`${baseURL}/${alias}`);

    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
}

export const statusProjectFunction = (index: number) =>
  ['Coming soon', 'Under development'][index];
