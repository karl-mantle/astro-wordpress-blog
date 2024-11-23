import { wpQuery } from './wpQuery';
import type { menuItemsType } from '../types';

export async function getNavigation(): Promise<menuItemsType> {
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