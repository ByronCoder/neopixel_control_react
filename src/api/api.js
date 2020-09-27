import useAxios from "axios-hooks";

export default async function SendRquest({ pattern }) {
  const data = useAxios(`http://192.168.1.144:3001/${pattern}`);

  return JSON.stringify(data);
}
