import type { APIRoute } from 'astro';
import type { NodeByUri } from '../types';
import { getImage } from 'astro:assets';
import { getNodeByURI } from '../utils/gqlRoutes';
import faviconSrc from '../../public/favicon.png';

const node: NodeByUri = await getNodeByURI("/");

const manifestTitle = node?.seo?.title || 'Error: No title set.';
const manifestDesc = node?.seo?.metaDesc || 'Error: No meta description set.';

const faviconPngSizes = [192, 256, 512];

export const GET: APIRoute = async () => {
  const icons = await Promise.all(
    faviconPngSizes.map(async (size) => {
      const image = await getImage({
        src: faviconSrc,
        width: size,
        height: size,
        format: 'png'
      });
      return {
        src: image.src,
        type: `image/${image.options.format}`,
        sizes: `${image.options.width}x${image.options.height}`
      };
    })
  );

  const manifest = {
    name: `${manifestTitle}`,
    description: `${manifestDesc}`,
    start_url: '/',
    display: 'standalone',
    id: 'some-unique-id',
    icons,
  };

  return new Response(JSON.stringify(manifest));

};