import { client, checkError } from './client';

export async function getCrops(from = 0, to = 30) {
  const response = await client.from('Stardew_Valley_Crops_Trees').select().range(from, to);
  return checkError(response);
}

export async function getSingleCrop(id) {
  const response = await client.from('Stardew_Valley_Crops_Trees').select().match({ id }).single();
  return checkError(response);
}