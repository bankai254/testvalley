import React, { useEffect, useRef } from 'react';

import Image from 'next/image';
import { register } from 'swiper/element/bundle';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import useSWR from 'swr';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';

import '@/styles/MainBanner.module.scss';

export interface MainBanner {
  mainBannerId: number;
  title: string;
  sort: number;
  pcImageUrl: string;
  mobileImageUrl: string;
  linkUrl: string;
  startDate: string;
  endDate: string;
  creator: string;
  updater: string;
  deleter: null;
  createdAt: string;
  updatedAt: string;
  deletedAt?: null;
}

export const MainBanner = () => {
  const { data, error } = useSWR('main-banner/all');

  useEffect(() = > {
    register();
  }, []);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const bannerItems = data.map((banner: MainBanner) => (
    <swiper-slide key={banner.mainBannerId}>
      <Image
        src={banner.pcImageUrl}
        alt={banner.title}
        title={banner.title}
        width={960}
        height={320}
      />
    </swiper-slide>
  ));

  return (
    <div className="main-banner">
      <swiper-container slides-per-view="3" navigation="true" pagination="true">
        {bannerItems}
      </swiper-container>
    </div>
  );
};
