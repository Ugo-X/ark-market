"use client";

import { useEffect } from "react";
import { useFulfillAuction, useFulfillOffer } from "@ark-project/react";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useAccount } from "@starknet-react/core";

import { Button } from "@ark-market/ui/button";

import type { Token, TokenMarketData, TokenOffer } from "~/types";
import { env } from "~/env";

interface AcceptOfferProps {
  offer: TokenOffer;
  token: Token;
  tokenMarketData: TokenMarketData;
  onSuccess: () => void;
}

const AcceptOffer: React.FC<AcceptOfferProps> = ({
  offer,
  token,
  tokenMarketData,
  onSuccess,
}) => {
  const { account } = useAccount();
  const { fulfillOffer, status } = useFulfillOffer();
  const { fulfill: fulfillAuction, status: statusAuction } =
    useFulfillAuction();

  useEffect(() => {
    if (status === "success") {
      onSuccess();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  const handleClick = async () => {
    if (tokenMarketData.is_listed && tokenMarketData.listing.is_auction) {
      await fulfillAuction({
        brokerId: env.NEXT_PUBLIC_BROKER_ID,
        orderHash: tokenMarketData.listing.order_hash,
        relatedOrderHash: offer.hash,
        starknetAccount: account,
        startAmount: offer.price,
        tokenAddress: token.collection_address,
        tokenId: token.token_id,
      });
    } else {
      await fulfillOffer({
        brokerId: env.NEXT_PUBLIC_BROKER_ID,
        orderHash: offer.hash,
        starknetAccount: account,
        tokenAddress: token.collection_address,
        tokenId: token.token_id,
      });
    }
  };

  const isLoading = status === "loading" || statusAuction === "loading";

  return (
    <Button onClick={handleClick} disabled={isLoading} size="sm">
      {isLoading ? <ReloadIcon className="animate-spin" /> : "Accept"}
    </Button>
  );
};

export default AcceptOffer;
