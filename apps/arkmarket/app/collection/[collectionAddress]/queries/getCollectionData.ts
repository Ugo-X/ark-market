import type {
  CollectionSortBy,
  CollectionSortDirection,
} from "../../search-params";
import { env } from "~/env";

export interface CollectionInfosApiResponse {
  collection_name: string;
  floor: null | number;
  floor_7d_percentage: number;
  image: string;
  listed_items: number;
  listed_percentage: number;
  marketcap: number;
  sales_7d: number;
  top_offer: null | number;
  volume_7d_eth: number;
}
interface GetCollectionInfosParams {
  collectionAddress: string;
}
export async function getCollectionInfos({
  collectionAddress,
}: GetCollectionInfosParams) {
  const url = `${env.NEXT_PUBLIC_MARKETPLACE_API_URL}/collections/${collectionAddress}/SN_MAIN`;

  const response = await fetch(url);
  if (!response.ok) {
    return undefined;
  }

  return response.json() as Promise<CollectionInfosApiResponse>;
}

const itemsPerPage = 50;
export interface CollectionToken {
  contract: string;
  token_id: string;
  owner: string;
  minted_at: number;
  updated_at: number;
  price: null | number;
}
export interface CollectionTokensApiResponse {
  data: CollectionToken[];
  next_page: number;
}
interface GetCollectionTokensParams {
  collectionAddress: string;
  page?: number;
  sortDirection: CollectionSortDirection;
  sortBy: CollectionSortBy;
}
export async function getCollectionTokens({
  collectionAddress,
  page,
  sortDirection,
  sortBy,
}: GetCollectionTokensParams) {
  const queryParams = [
    `items_per_page=${itemsPerPage}`,
    `sort=${sortBy}`,
    `direction=${sortDirection}`,
  ];

  if (page !== undefined) {
    queryParams.push(`page=${page}`);
  }

  const url = `${env.NEXT_PUBLIC_MARKETPLACE_API_URL}/collections/${collectionAddress}/SN_MAIN/tokens?${queryParams.join("&")}`;

  const response = await fetch(url);
  if (!response.ok) {
    return undefined;
  }

  return response.json() as Promise<CollectionTokensApiResponse>;
}
