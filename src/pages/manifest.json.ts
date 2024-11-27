import type { APIRoute } from 'astro';
import { globalSiteDescription, globalSiteTitle } from '../consts';
import { getImage } from 'astro:assets';
import faviconSrc from '../../public/favicon.png';

const faviconPngSizes = [96, 192, 512];

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
    name: `${globalSiteTitle}`,
    description: `${globalSiteDescription}`,
    short_name: `${globalSiteTitle}`,
    start_url: '/',
    display: 'standalone',
    id: 'some-unique-id',
    background_color: '#171717',
    theme_color: '#d4d4d4',
    icons,
  };

  return new Response(JSON.stringify(manifest));

};