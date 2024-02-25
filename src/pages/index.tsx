import React from 'react';

import Head from 'next/head';

import styles from '@/styles/Home.module.scss';

import { Header } from '@/components/Header';
import { MainBanner } from '@/components/MainBanner';

export default function Home() {
  return (
    <>
      <Head>
        <title>테스트밸리 - 전자제품 사는게 즐겁다</title>
        <meta
          name="description"
          content="새 상품 구매부터 체험, 검증된 중고, 수리비 보장, 합리적인 중고판매까지 전자제품의 모든 것을 함께 하세요."
        />
        <meta
          name="keywords"
          content="테스트밸리,전자제품,전자제품 체험,무료 체험,렌탈,전자제품 렌탈,전자제품 중고,중고,리퍼,리퍼브,중고나라,번개장터,당근마켓,파손 보험,애플케어,전자제품 쇼핑몰,전자제품 할인,전자제품 최저가"
        />
        <meta property="og:title" content="테스트밸리 - 전자제품 사는게 즐겁다" />
        <meta
          property="og:description"
          content="새 상품 구매부터 체험, 검증된 중고, 수리비 보장, 합리적인 중고판매까지 전자제품의 모든 것을 함께 하세요."
        />
        <meta
          property="og:image"
          content="https://prod-testvalley.s3.ap-northeast-2.amazonaws.com/static/testvalley_thumbnail_20230502.png"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.testvalley.kr/" />
      </Head>
      <main className={`${styles.main}`}>
        <Header />
        <MainBanner />
      </main>
    </>
  );
}
