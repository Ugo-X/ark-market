import { getRoundedRemainingTime, shortAddress } from "@ark-market/ui";
import { PriceTag } from "@ark-market/ui/price-tag";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@ark-market/ui/table";

import type { TokenOffer } from "../queries/getTokenData";
import type { TokenMarketData } from "~/types";
import TokenOffersTableAction from "./token-offers-table-action";

interface TokenOffersTableProps {
  tokenOffers: TokenOffer[];
  tokenContractAdress: string;
  tokenId: string;
  owner: string;
  tokenMarketData: TokenMarketData | null;
}

export default function TokenOffersTable({
  tokenOffers,
  owner,
  tokenContractAdress,
  tokenId,
  tokenMarketData,
}: TokenOffersTableProps) {
  return (
    <div className="hidden lg:block">
      <Table>
        <TableHeader className="hover:bg-background">
          <TableRow className="grid w-full grid-cols-5 items-center">
            <TableHead className="sticky top-0 flex items-center">
              Price
            </TableHead>
            <TableHead className="sticky top-0 flex items-center">
              Floor difference
            </TableHead>
            <TableHead className="sticky top-0 flex items-center">
              From
            </TableHead>
            <TableHead className="sticky top-0 flex items-center">
              Expiration
            </TableHead>
            <TableHead className="sticky top-0 flex items-center">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="block overflow-auto text-sm font-semibold">
          {tokenOffers.map((offer) => {
            return (
              <TableRow
                key={offer.offer_id}
                className="grid h-[4.625rem] w-full grid-cols-5 items-center"
              >
                <TableCell>
                  <PriceTag price={offer.price} />
                </TableCell>
                {/* TODO @YohanTz: Check how this one looks */}
                <TableCell>{offer.floor_difference ?? "_"}</TableCell>
                <TableCell>
                  {offer.source ? shortAddress(offer.source) : "_"}
                </TableCell>
                <TableCell>
                  In {getRoundedRemainingTime(offer.expire_at)}
                </TableCell>
                <TableCell>
                  <TokenOffersTableAction
                    owner={owner}
                    offerSourceAddress={offer.source}
                    offerOrderHash={offer.hash}
                    tokenContractAddress={tokenContractAdress}
                    tokenId={tokenId}
                    offerAmount={offer.price}
                    tokenIsListed={tokenMarketData?.is_listed ?? false}
                    tokenListingOrderHash={tokenMarketData?.order_hash ?? null}
                  />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
