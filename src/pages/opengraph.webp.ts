import type { APIRoute } from 'astro';
import sharp from 'sharp';
import { getOpenGraph } from '../utils/gqlYoastSeo.ts';

const openGraphData = await getOpenGraph();
const defaultImage = openGraphData.sourceUrl;

export const GET: APIRoute = async () => {

  const response = await fetch(defaultImage);
  const arrayBuffer = await response.arrayBuffer();
  const imageBuffer = Buffer.from(arrayBuffer);

  const ogImageBuffer = await sharp(imageBuffer).resize(1200, 630).toFormat('webp').toBuffer();

  return new Response(ogImageBuffer, {
    headers: { 'Content-Type': 'image/webp' }
  });
};