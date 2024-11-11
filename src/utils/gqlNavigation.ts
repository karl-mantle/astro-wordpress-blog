import { wpQuery } from './wpQuery';
import type { menuItems } from '../types';

export async function getNavigation(): Promise<menuItems> {
  const res = await wpQuery({
    query: `query getNavigation {
      menuItems(where: {location: PRIMARY}) {
        nodes {
          id
          parentId
          uri
          label
        }
      }
    }`
  });

  return res.menuItems;
}