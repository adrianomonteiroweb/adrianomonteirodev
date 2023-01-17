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
  ['Coming Soon', 'Under Development'][index];

export function filterProjectsBySkills(
  projects: Array<any>,
  arrayOfStrings: Array<string>
) {
  const isFilter = projects.filter((project) => {
    const src = arrayOfStrings.map((skill) =>
      project.tags.includes(skill.toLowerCase())
    );

    return src.includes(true) && true;
  });

  return isFilter.length > 0 ? isFilter : projects;
}
