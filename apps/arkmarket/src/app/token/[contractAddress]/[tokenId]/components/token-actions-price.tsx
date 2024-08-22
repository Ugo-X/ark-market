"use client";

import { formatEther } from "viem";

import { Typography } from "@ark-market/ui/typography";

import usePrices from "~/hooks/usePrices";

interface TokenActionsPriceProps {
  startAmount: string | null;
  isListed: boolean;
  isAuction: boolean;
  hasOffer: boolean;
  topOffer: {
    amount: string;
    order_hash: string;
  };
}

export default function TokenActionsPrice({
  startAmount,
  isAuction,
  isListed,
  topOffer,
}: TokenActionsPriceProps) {
  const { convertInUsd } = usePrices();
  const amountHex = isListed ? startAmount : topOffer.amount;
  const amount = formatEther(BigInt(amountHex ?? 0));
  const amountInUsd = convertInUsd({ amount: BigInt(amountHex ?? 0) });

  let label = "Best offer";

  if (isListed) {
    if (isAuction) {
      label = "Minimum starting price";
    } else {
      label = "Current Price";
    }
  }

  return (
    <div className="mb-6">
      <Typography variant="body_bold_s" className="text-secondary-foreground">
        {label}
      </Typography>
      <div className="flex items-end gap-3 lg:gap-6">
        <Typography variant="h4" className="lg:text-3xl" ellipsable>
          {amount} ETH
        </Typography>
        <Typography
          className="text-muted-foreground lg:text-2xl"
          variant="body_bold_m"
        >
          ${amountInUsd}
        </Typography>
        <div className="flex h-8 items-center whitespace-nowrap rounded-full bg-secondary px-3 text-xs text-secondary-foreground lg:text-sm">
          Royalties 5%
        </div>
      </div>
    </div>
  );
}
