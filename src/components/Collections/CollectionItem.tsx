import React, { memo } from 'react';

import Image from 'next/image';

import styles from '@/styles/Collections.module.scss';

export interface ItemsEntity {
  createdAt: string;
  updatedAt: string;
  deletedAt?: null;
  uuid: string;
  name: string;
  body?: null;
  collectionId: number;
  key: string;
  seq: number;
  entityType: string;
  entityId: number;
  optionKey?: null;
  publication: Publication;
  prdType: number;
}
interface Publication {
  id: number;
  title: string;
  code: string;
  productId: number;
  prdType: number;
  detailEntity: string;
  content: string;
  offeringType: string;
  rating: number;
  isExistResidual: boolean;
  isAdult: number;
  preface: string;
  prefaceIconUrl: string;
  productName: string;
  brandName: string;
  media?: MediaEntity[] | null;
  isTrial: boolean;
  tagsOnImage?: string[] | null;
  tagsOnDesc?: null[] | null;
  priceInfo: PriceInfo;
  discounts?: DiscountsEntity[] | null;
  applyCoupon: boolean;
}
interface MediaEntity {
  seq: number;
  type: string;
  uri: string;
  mimeType: string;
  deviceType?: null;
}
interface PriceInfo {
  price: number;
  discountPrice?: number;
  discountRate?: number;
  couponDiscountPrice?: number;
  couponDiscountRate?: number;
}
interface DiscountsEntity {
  id: number;
  name?: null;
  type: string;
  calcMethod: string;
  value: number;
  activeFrom?: null;
  activeTo?: null;
  qty: number;
  remain?: null;
}

const CollectionItem = ({ item }: { item: ItemsEntity }) => {
  const {
    media,
    isTrial,
    tagsOnImage,
    title,
    priceInfo,
    applyCoupon,
    tagsOnDesc,
    rating,
    brandName,
    preface,
    prefaceIconUrl
  } = item.publication;
  const { price, discountPrice, discountRate, couponDiscountPrice, couponDiscountRate } = priceInfo;
  return (
    <>
      <div className={styles.media}>
        {isTrial && (
          <div className={styles.returnable}>
            <div className={styles.notice}>
              <Image src="/return-new.svg" alt="" width={10} height={10} />
              {tagsOnImage}
            </div>
            <div className="css-tdbqpt"></div>
          </div>
        )}
        <div className={styles.mediaImage}>
          <Image
            src={media ? media[0].uri : ''}
            alt=""
            fill
          />
        </div>
      </div>
      <div className={styles.itemTitle}>{title}</div>
      <div className={styles.itemPricing}>
        <span>
          {applyCoupon && couponDiscountPrice
            ? `${couponDiscountRate}%`
            : discountRate
              ? `${discountRate}%`
              : null}
        </span>
        {/* Apply the coupon if it's allowed, otherwise go for the discount or the full price. Same as above but the price has no discount rate. */}
        {new Intl.NumberFormat('ko-KR').format(
          applyCoupon && couponDiscountPrice
            ? couponDiscountPrice
            : discountPrice
              ? discountPrice
              : price
        )}
      </div>
      <div>
        {/* Tags can be multiple so lay them all out and if the tags array is empty there is no need to render them */}
        {tagsOnDesc && tagsOnDesc.length > 0 && (
          <div className={styles.itemTags}>{tagsOnDesc.join(' ')}</div>
        )}
        {rating && (
          <div className={styles.itemRating}>
            <Image src="/star-darkgray.svg" alt={brandName} width={12} height={12} />
            {rating}
          </div>
        )}
        {preface && (
          <div className={styles.itemPreface}>
            {/* Some prefaces do not icon urls and they are skipped */}
            {prefaceIconUrl && (
              <Image src={prefaceIconUrl} alt={brandName} width={14} height={14} />
            )}
            {preface}
          </div>
        )}
      </div>
    </>
  );
};

export default memo(CollectionItem);
