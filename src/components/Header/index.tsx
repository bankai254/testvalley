import React, { useEffect, useState } from 'react';

import Image from 'next/image';

import styles from '@/styles/Header.module.scss';

import { useMediaQueries } from '@/hooks/useMediaQueries';

export const Header = () => {
  const { md } = useMediaQueries();
  const [hideOnSmallerDisplays, setHideOnSmallerDisplays] = useState(false);

  useEffect(() => {
    setHideOnSmallerDisplays(!md);
  }, [md]);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={`${styles.brand}`}>
          <Image src="/logo-new.svg" width={128} height={25} alt="Test Valley" />

          {!hideOnSmallerDisplays && (
            <>
              <div className={`${styles.category}`}>카테고리</div>
              <div className={`${styles.search}`}>
                <Image src="/search.svg" width={20} height={20} alt="Search" />
                <input
                  type="search"
                  placeholder="살까말까 고민된다면 검색해보세요!"
                  value=""
                  onChange={console.log}
                />
              </div>
            </>
          )}
        </div>
        <div className={styles.account}>
          {!hideOnSmallerDisplays ? (
            <>
              <button>
                <Image src="/home-event.svg" width={28} height={28} alt="Home" />
              </button>
              <Image
                src="/vertical-bar.svg"
                alt=""
                className={`${styles.bar}`}
                width={1}
                height={14}
              />
              <button>로그인 / 회원가입</button>
            </>
          ) : (
            <>
              <Image
                src="/bell_default.svg"
                alt="Notifications"
                width={24}
                height={24}
              />
              <Image
                src="/search_new.svg"
                alt="Search"
                width={24}
                height={24}
              />
            </>
          )}
        </div>
      </div>
    </header>
  );
};
