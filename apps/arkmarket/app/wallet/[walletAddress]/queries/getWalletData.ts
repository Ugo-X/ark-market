import { env } from "~/env";

const itemsPerPage = 50;

export interface Metadata {
  image: string;
  name: string;
}
export interface WalletToken {
  best_offer: number | null;
  contract: string;
  floor: number | null;
  list_price: number | null;
  owner: string;
  received_at: null | string;
  token_id: string;
  metadata: Metadata | null;
}
export interface WalletTokensApiResponse {
  data: WalletToken[];
  next_page: number | null;
}
interface GetWalletTokensParams {
  page?: number;
  walletAddress: string;
}
export async function getWalletTokens({
  page,
  walletAddress,
}: GetWalletTokensParams) {
  const queryParams = [`items_per_page=${itemsPerPage}`];

  if (page !== undefined) {
    queryParams.push(`page=${page}`);
  }

  const url = `${env.NEXT_PUBLIC_MARKETPLACE_API_URL}/portfolio/${walletAddress}?${queryParams.join("&")}`;

  const response = await fetch(url);
  if (!response.ok) {
    console.error(url, response.status);
    return { data: [], next_page: null } as WalletTokensApiResponse;
  }

  return response.json() as Promise<WalletTokensApiResponse>;
}

export interface WalletCollectionsApiResponse {
  data: WalletToken[];
  next_page: number | null;
}
interface GetWalletCollectionsParams {
  page?: number;
  walletAddress: string;
}
export async function getWalletCollections({
  page,
  walletAddress,
}: GetWalletCollectionsParams) {
  const queryParams = [`items_per_page=${itemsPerPage}`];

  if (page !== undefined) {
    queryParams.push(`page=${page}`);
  }

  const url = `${env.NEXT_PUBLIC_MARKETPLACE_API_URL}/portfolio/${walletAddress}/collections?${queryParams.join("&")}`;

  const response = await fetch(url);
  if (!response.ok) {
    console.error(url, response.status);
    return { data: [], next_page: null } as WalletTokensApiResponse;
  }

  return response.json() as Promise<WalletTokensApiResponse>;
}
