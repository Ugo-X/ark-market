import { Fragment } from "react";
import Link from "next/link";
import { useAccount } from "@starknet-react/core";

import type { PropsWithClassName } from "@ark-market/ui";
import { timeSince } from "@ark-market/ui";
import { PriceTag } from "@ark-market/ui/price-tag";
import { Separator } from "@ark-market/ui/separator";
import { Typography } from "@ark-market/ui/typography";

import type { TokenActivity } from "~/types";
import ownerOrShortAddress from "~/lib/ownerOrShortAddress";
import { activityTypeToItem } from "./desktop-token-activity";

interface MobileTokenActivityProps {
  tokenActivity: TokenActivity[];
}

export default function MobileTokenActivity({
  className,
  tokenActivity,
}: PropsWithClassName<MobileTokenActivityProps>) {
  const { address } = useAccount();

  return (
    <div className={className}>
      <Typography className="text-muted-foreground" variant="button_text_s">
        Event
      </Typography>
      <Separator className="my-4" />

      {tokenActivity.map((activity, index) => {
        const activityItem = activityTypeToItem.get(activity.activity_type);

        return (
          <Fragment key={index}>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  {activityItem?.icon}
                  <p>{activityItem?.title}</p>
                </div>
                {activity.price !== null ? (
                  <PriceTag price={activity.price} className="h-7 text-xs" />
                ) : (
                  "_"
                )}
              </div>
              <div className="flex items-center justify-between">
                <Typography variant="button_text_s">
                  by{" "}
                  <span className="text-muted-foreground">
                    {activity.from ? (
                      <Link
                        href={`/wallet/${activity.from}`}
                        className="text-muted-foreground"
                      >
                        {ownerOrShortAddress({
                          ownerAddress: activity.from,
                          address,
                        })}
                      </Link>
                    ) : (
                      "-"
                    )}
                  </span>
                </Typography>
                <p className="text-xs font-semibold text-muted-foreground">
                  {timeSince(activity.time_stamp)}
                </p>
              </div>
            </div>
            <Separator className="my-4" />
          </Fragment>
        );
      })}
    </div>
  );
}
