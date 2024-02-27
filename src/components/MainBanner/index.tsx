import React from 'react';

import Image from 'next/image';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import useSWR from 'swr';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/autoplay';

import styles from '@/styles/MainBanner.module.scss';
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

  if (error) return <div style={{ textAlign: 'center' }}>Failed to load</div>;
  if (!data) return <div style={{ textAlign: 'center', display: 'block' }}>Loading...</div>;

  const bannerItems = data.map((banner: MainBanner) => (
    <SwiperSlide key={banner.mainBannerId}>
      <Image
        src={banner.pcImageUrl}
        alt={banner.title}
        title={banner.title}
        width={960}
        height={320}
      />
    </SwiperSlide>
  ));

  return (
    <div className={styles.mainBanner}>
      <Swiper
        slidesPerView={3}
        modules={[Navigation, Pagination]}
        autoplay
        loop
        speed={500}
        spaceBetween={32}
        initialSlide={1}
        pagination={{
          clickable: true
        }}
        navigation
        centeredSlides={true}
      >
        {bannerItems}
      </Swiper>
    </div>
  );
};
