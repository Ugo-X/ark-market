"use client";

import * as React from "react";
import { useFulfillAuction, useFulfillOffer } from "@ark-project/react";
import { useAccount } from "@starknet-react/core";
import { formatEther } from "viem";

import { areAddressesEqual, cn } from "@ark-market/ui";
import { Button } from "@ark-market/ui/button";
import { LoaderCircle, Tag } from "@ark-market/ui/icons";
import { Separator } from "@ark-market/ui/separator";

import type { Token, TokenMarketData } from "~/types";
import { env } from "~/env";
import AcceptOfferDialog from "./accept-offer-dialog";

interface TokenActionsAcceptBestOfferProps {
  token: Token;
  tokenMarketData: TokenMarketData | undefined;
  isAuction: boolean;
  small?: boolean;
}

export default function TokenActionsAcceptBestOffer({
  token,
  tokenMarketData,
  isAuction,
  small,
}: TokenActionsAcceptBestOfferProps) {
  if (!tokenMarketData?.has_offer) {
    return null;
  }

  return (
    <AcceptOfferDialog
      token={token}
      tokenMarketData={tokenMarketData}
      isAuction={isAuction}
    >
      <Button
        className={cn(small ?? "relative w-full lg:max-w-[50%]")}
        size={small ? "xl" : "xxl"}
      >
        <Tag
          className={cn(small ?? "absolute left-4")}
          size={small ? 20 : 24}
        />
        Accept offer
        <Separator
          orientation="vertical"
          className={cn("h-5", small ? "mx-1" : "mx-2")}
        />
        {formatEther(BigInt(tokenMarketData.top_offer.amount))} ETH
      </Button>
    </AcceptOfferDialog>
  );
}
