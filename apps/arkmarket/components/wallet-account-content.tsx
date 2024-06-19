/* eslint-disable @next/next/no-img-element */
"use client";

import { useMemo } from "react";
import Link from "next/link";
import {
  useAccount,
  useDisconnect,
  useStarkProfile,
} from "@starknet-react/core";
import { HelpCircle, Power, Settings, User, Wallet } from "lucide-react";

import EthereumLogo from "@ark-market/ui/components/icons/ethereum-logo";
import StarknetLogo from "@ark-market/ui/components/icons/starknet-logo";
import { ThemeTabs } from "@ark-market/ui/components/theme";
import { cn, focusableStyles } from "@ark-market/ui/lib/utils";

import CopyButton from "./copy-button";
import ExternalLink from "./external-link";
import ProfilePicture from "./profile-picture";

const STRK_CONTRACT_ADDRESS =
  "0x04718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d";

const itemCommonClassName = cn(
  "flex items-center gap-2 rounded-xs px-1.5 py-2 transition-colors hover:bg-card",
  focusableStyles,
);

interface WalletAccountContentProps {
  onClose: () => void;
}

export default function WalletAccountContent({
  onClose,
}: WalletAccountContentProps) {
  const { address, connector } = useAccount();
  const { disconnect } = useDisconnect();
  const { data: starkProfile } = useStarkProfile({
    address,
  });
  const isWebWallet = connector?.id === "argentWebWallet";

  // const { data: ethBalance } = useBalance({ address });
  const ethBalance = { formatted: "0.00" };
  const roundedEthBalance =
    ethBalance !== undefined
      ? parseFloat(ethBalance.formatted).toFixed(4)
      : undefined;

  // const { data: strkBalance } = useBalance({
  //   address,
  //   token: STRK_CONTRACT_ADDRESS,
  // });
  const strkBalance = { formatted: "0.00" };
  const roundedStrkBalance =
    strkBalance !== undefined
      ? parseFloat(strkBalance.formatted).toFixed(4)
      : undefined;

  const shortenedAddress = useMemo(() => {
    if (!address) return "";
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  }, [address]);

  if (address === undefined) {
    // should not happen
    return null;
  }

  return (
    <div>
      <div className="flex h-12 items-center gap-4">
        <ProfilePicture address={address} className="size-12 rounded-md" />

        <div className="flex h-full flex-col justify-between">
          <p
            className={cn(
              "text-xl font-semibold",
              starkProfile?.name === undefined && "my-auto",
            )}
          >
            {starkProfile?.name ?? shortenedAddress}
          </p>
          {starkProfile?.name !== undefined && (
            <div className="text- flex items-center gap-2">
              {connector !== undefined && (
                <div className="flex size-5 items-center justify-center rounded-full bg-white">
                  <img
                    src={connector.icon.dark}
                    alt={`${connector.name}`}
                    className="size-3 rounded-full"
                  />
                </div>
              )}
              <p className="text-sm">{shortenedAddress}</p>
              <CopyButton textToCopy={address} />
            </div>
          )}
        </div>
      </div>

      <div className="my-5 flex flex-col gap-2">
        <Link
          href={`/wallet/${address}`}
          className={itemCommonClassName}
          onClick={onClose}
          prefetch
        >
          <User size={24} />
          <p className="font-bold">My items</p>
        </Link>
        {isWebWallet && (
          <ExternalLink
            className={itemCommonClassName}
            href="https://web.argent.xyz"
            onClick={onClose}
          >
            <Wallet size={24} />
            <p className="font-bold">Web Wallet</p>
          </ExternalLink>
        )}
        <Link href="/" className={itemCommonClassName} onClick={onClose}>
          <Settings size={24} />
          <p className="font-bold">Account settings</p>
        </Link>
        <Link href="/" className={itemCommonClassName} onClick={onClose}>
          <HelpCircle size={24} />
          <p className="font-bold">Support</p>
        </Link>
        <button
          className={cn(itemCommonClassName)}
          onClick={() => disconnect()}
        >
          <Power size={24} />
          <p className="font-bold">Log out</p>
        </button>
      </div>

      <div className="flex h-16 items-center justify-between rounded-t-lg bg-card p-4">
        <div className="flex items-center gap-2.5">
          <EthereumLogo />
          <span className="font-bold">ETH</span>
        </div>
        <div className="flex flex-col items-end gap-1">
          <p className="text-sm font-medium">{roundedEthBalance}</p>
          <p className="text-xs text-secondary-foreground">0.00$</p>
        </div>
      </div>
      <div className="mt-0.5 flex h-16 items-center justify-between rounded-b-lg bg-card p-4">
        <div className="flex items-center gap-2.5">
          <StarknetLogo />
          <span className="font-bold">STRK</span>
        </div>
        <div className="flex flex-col items-end gap-1">
          <p className="text-sm font-medium">{roundedStrkBalance}</p>
          <p className="text-xs text-secondary-foreground">0.00$</p>
        </div>
      </div>

      <ThemeTabs className="mt-5" />
    </div>
  );
}
