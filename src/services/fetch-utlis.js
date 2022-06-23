import { client, checkError } from './client';

export async function getCrops(from = 0, to = 30) {
  const response = await client.from('Stardew_Valley_Crops_Trees').select('*');
  return checkError(response);
}