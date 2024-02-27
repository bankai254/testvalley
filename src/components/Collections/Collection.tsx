import React, { memo, useMemo } from 'react';

import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import CollectionItem, { ItemsEntity } from './CollectionItem';
import styles from '@/styles/Collections.module.scss';

export interface CollectionInterface {
  id: number;
  type: string;
  code: string;
  title: string;
  subtitle: string;
  description: string;
  trialPeriod?: null;
  installmentPrice?: null;
  installmentPeriod?: null;
  rating: number;
  startDate?: null;
  endDate?: null;
  viewType: string;
  createdAt: string;
  items?: ItemsEntity[] | null;
  media?: null[] | null;
  taggings?: null[] | null;
  singleCollections?: null[] | null;
}

const Collection = ({ collection }: { collection: CollectionInterface }) => {
  const collectionItems = useMemo(
    () =>
      collection.items?.map((item: ItemsEntity) => (
        <SwiperSlide key={item.entityId} className={styles.swiperSlide}>
          <CollectionItem item={item} />
        </SwiperSlide>
      )),
    [collection]
  );

  return (
    <div className="container">
      <div className={styles.collection}>
        <div className={styles.about}>
          <div className={styles.title}>{collection.title}</div>
          <div className={styles.subtitle}>{collection.subtitle}</div>
        </div>
        <Swiper
          className={styles.swiper}
          wrapperClass={styles.swiperWrapper}
          slidesPerView={4}
          modules={[Navigation]}
          autoplay
          loop
          speed={500}
          spaceBetween={8}
          breakpoints={{
            '@0.00': {
              slidesPerView: 1,
              spaceBetween: 2
            },
            '@0.75': {
              slidesPerView: 2,
              spaceBetween: 4
            },
            '@1.00': {
              slidesPerView: 3,
              spaceBetween: 8
            },
            '@1.50': { 
              slidesPerView: 4, 
              spaceBetween: 8, 
            },
          }}
        >
          {collectionItems}
        </Swiper>
      </div>
    </div>
  );
};

export default memo(Collection);
