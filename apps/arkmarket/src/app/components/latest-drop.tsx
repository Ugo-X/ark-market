"use client";

import Image from "next/image";
import Link from "next/link";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";

import { cn, focusableStyles } from "@ark-market/ui";
import { Card, CardContent, CardFooter } from "@ark-market/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@ark-market/ui/carousel";
import VerifiedIcon from "@ark-market/ui/icons/verified-icon";
import { Typography } from "@ark-market/ui/typography";

import { homepageConfig } from "~/config/homepage";
import LatestDropStatus from "./latest-drop-status";

export default function LatestDrop() {
  if (homepageConfig.latestDropCollections.length === 0) {
    return null;
  }

  return (
    <section>
      <Typography asChild variant="h2">
        <h2>Latest drop</h2>
      </Typography>
      <Carousel
        className="mt-8"
        plugins={[WheelGesturesPlugin()]}
        opts={{ skipSnaps: true }}
      >
        <CarouselContent>
          {homepageConfig.latestDropCollections.map((collection, index) => {
            return (
              <CarouselItem
                key={index}
                className="basis-[calc(100%-3rem)] sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 2xl:basis-1/6"
              >
                <Link
                  href={`/collection/${collection.address}`}
                  key={index}
                  className={cn("group", focusableStyles)}
                >
                  <Card className="overflow-hidden border-none">
                    <CardContent className="p-0">
                      <div className="relative aspect-square w-full overflow-hidden">
                        <div className="absolute right-5 top-5 z-10">
                          <LatestDropStatus status={collection.status} />
                        </div>
                        <Image
                          src={collection.image}
                          height={500}
                          width={500}
                          alt={collection.name}
                          className="aspect-square w-full object-cover transition-transform group-hover:scale-110"
                        />
                      </div>
                    </CardContent>
                    <CardFooter className="flex flex-col items-start p-5">
                      <div className="flex w-full items-center gap-1.5">
                        <Typography asChild variant="h4" ellipsable>
                          <h4>{collection.name}</h4>
                        </Typography>
                        <VerifiedIcon className="text-background" />
                      </div>
                      <Typography
                        variant="body_s"
                        className="mt-5 text-muted-foreground"
                      >
                        Status
                      </Typography>
                      <Typography variant="body_bold_s">
                        Mint starts in 2 hours
                      </Typography>
                    </CardFooter>
                  </Card>
                </Link>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
