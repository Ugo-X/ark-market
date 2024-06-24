import {
  ArrowLeftRight,
  List,
  ListX,
  ShoppingCart,
  Tag,
  X,
} from "lucide-react";

import type { PropsWithClassName } from "@ark-market/ui/lib/utils";
import { PriceTag } from "@ark-market/ui/components/price-tag";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@ark-market/ui/components/table";
import { cn } from "@ark-market/ui/lib/utils";

const activityTypeToItem = new Map([
  ["sale", { icon: <ShoppingCart size={24} />, title: "Sale" }],
  ["transfer", { icon: <ArrowLeftRight size={24} />, title: "Transfer" }],
  ["list", { icon: <List size={24} />, title: "List" }],
  ["offer", { icon: <Tag size={24} />, title: "Offer" }],
  ["cancel_offer", { icon: <X size={24} />, title: "Cancel Offer" }],
  ["delist", { icon: <ListX size={24} />, title: "Delist" }],
]);

const activityData = [
  {
    type: "transfer",
    from: "0x123",
    to: "0x456",
  },
  {
    type: "list",
    price: 1180000000000000000n,
    from: "0x123",
  },
  {
    type: "offer",
    price: 1840000000000000000n,
    from: "0x123",
    to: "0x456",
  },
  {
    type: "cancel_offer",
    price: 1540000000000000000n,
    from: "0x123",
    to: "0x456",
  },
  {
    type: "delist",
    price: 3240000000000000000n,
    from: "0x123",
  },
  {
    type: "sale",
    price: 1140000000000000000n,
    from: "0x123",
    to: "0x456",
  },
];

export default function TokenActivity({ className }: PropsWithClassName) {
  return (
    // TODO @YohanTz: remove min-h
    <div className={cn("min-h-[150vh]", className)}>
      <div className="sticky top-[var(--site-header-height)] z-20 flex items-center gap-4 bg-background">
        <h2 className="text-3xl font-semibold">Activity</h2>
        <div className="flex h-6 items-center rounded-full bg-secondary px-3 text-sm font-medium text-secondary-foreground">
          {activityData.length}
        </div>
      </div>

      <Table className="mt-12">
        <TableHeader>
          <TableRow>
            <TableHead className="pl-5">Event</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>From</TableHead>
            <TableHead>To</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="text-sm font-semibold">
          {activityData.map((activity, index) => {
            const activityItem = activityTypeToItem.get(activity.type);
            return (
              <TableRow className="h-[4.6875rem]" key={index}>
                <TableCell className="pl-5">
                  <div className="flex items-center gap-4 whitespace-nowrap">
                    {activityItem?.icon}
                    <p>{activityItem?.title}</p>
                  </div>
                </TableCell>
                <TableCell>
                  {activity.price !== undefined ? (
                    <PriceTag price={activity.price} />
                  ) : (
                    "_"
                  )}
                </TableCell>
                <TableCell>{activity.from ?? "_"}</TableCell>
                <TableCell>{activity.to ?? "_"}</TableCell>
                <TableCell>8min ago</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
