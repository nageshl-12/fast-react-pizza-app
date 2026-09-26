export async function getLocationData({ latitude, logitude }) {
  const res = await fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${logitude}&localityLanguage=en`,
  );
  const data = await res.json();
  return data;
}

export default getLocationData;
