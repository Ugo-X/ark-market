"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@ark-market/ui/button";
import VerifiedIcon from "@ark-market/ui/icons/verified-icon";

import { homepageConfig } from "~/config/homepage";

export default function ExploreCollection() {
  const [exploreCollectionsToShow, setExploreCollectionsToShow] = useState(6);
  const canShowMoreExploreCollectionsItems =
    exploreCollectionsToShow < homepageConfig.exploreCollections.length;

  function showMoreCollectionsToExplore() {
    setExploreCollectionsToShow((previous) =>
      Math.min(previous + 3, homepageConfig.exploreCollections.length),
    );
  }

  function showLessCollectionsToExplore() {
    setExploreCollectionsToShow(6);
  }

  if (homepageConfig.exploreCollections.length === 0) {
    return;
  }

  return (
    <div>
      <h2 className="text-3xl font-semibold">Explore Collections</h2>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {homepageConfig.exploreCollections
          .slice(0, exploreCollectionsToShow)
          .map((collection, index) => {
            return (
              <Link href={`/collection/${collection.address}`} key={index}>
                <div>
                  {collection.banner_image !== undefined ? (
                    <Image
                      src={collection.banner_image}
                      className="aspect-video rounded-lg"
                      alt={collection.name}
                      height={512}
                      width={932}
                    />
                  ) : (
                    <div className="aspect-video rounded-lg bg-secondary" />
                  )}
                  <div className="mt-4 flex items-center gap-2">
                    <Image
                      className="aspect-square w-16 rounded-sm"
                      src={collection.image}
                      alt={collection.name}
                      height={124}
                      width={124}
                    />
                    <h4 className="text-xl font-semibold">{collection.name}</h4>
                    <VerifiedIcon className="text-background" />
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
      <div className="mt-16 flex justify-center">
        {canShowMoreExploreCollectionsItems ? (
          <Button variant="outline" onClick={showMoreCollectionsToExplore}>
            View more
          </Button>
        ) : (
          <Button variant="outline" onClick={showLessCollectionsToExplore}>
            View less
          </Button>
        )}
      </div>
    </div>
  );
}
