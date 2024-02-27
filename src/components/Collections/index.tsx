import React, { useMemo } from 'react';

import useSWR from 'swr';

import Collection, { CollectionInterface } from './Collection';

export const Collections = () => {
  const { data, error } = useSWR('collections?prearrangedDiscount');

  const collections: CollectionInterface[] = useMemo(() => data && data.items.filter(
    (item: CollectionInterface) => item.viewType === 'TILE' && item.type === 'SINGLE'
  ), [data]);

  return!error && collections && collections.length > 0 ? (
    <div className="container">
      {collections.map((collection: CollectionInterface, index: number) => index === 1 ? (<>{/* Something Here like a banner ad or promo content. There should be an elegant way to determine where to insert between collection rows :) */}</>) : (
        <><Collection collection={collection}/></>
      ))}
    </div>
  ) : null;
};
