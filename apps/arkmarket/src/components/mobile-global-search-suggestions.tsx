import Link from "next/link";

import { cn, focusableStyles, formatNumber } from "@ark-market/ui";
import EthereumLogo2 from "@ark-market/ui/icons/ethereum-logo-2";
import VerifiedIcon from "@ark-market/ui/icons/verified-icon";
import { Typography } from "@ark-market/ui/typography";

import { homepageConfig } from "~/config/homepage";
import Media from "./media";

interface MobileGlobalSearchSuggestionsProps {
  onClose: () => void;
}

export default function MobileGlobalSearchSuggestions({
  onClose,
}: MobileGlobalSearchSuggestionsProps) {
  return (
    <div>
      <Typography className="text-muted-foreground" variant="body_s">
        Best Collections
      </Typography>

      <div className="mt-4 flex flex-col gap-2.5">
        {homepageConfig.trendingNow.slice(0, 3).map((collection) => {
          return (
            <Link
              onClick={onClose}
              key={`${collection.address}-${collection.name}`}
              className={cn(
                "flex cursor-pointer items-center gap-2 rounded-xs bg-transparent p-2 transition-colors",
                focusableStyles,
              )}
              href={`/collection/${collection.address}`}
            >
              <Media
                src={collection.image}
                alt={collection.name}
                height={64}
                width={64}
                className="size-8 rounded-xs"
              />
              <div>
                <div className="flex items-center gap-1">
                  <Typography variant="body_s">{collection.name}</Typography>
                  <VerifiedIcon className="size-3 text-background" />
                </div>
                <div className="flex items-center">
                  <EthereumLogo2 className="-ml-1 size-4" />
                  <p className="text-xs font-medium text-muted-foreground">
                    {formatNumber(collection.token_count)} items
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
