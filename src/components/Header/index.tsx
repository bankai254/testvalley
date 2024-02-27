import React from 'react';

import Image from 'next/image';

import styles from '@/styles/Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={`${styles.brand}`}>
          <Image src="/logo-new.svg" width={128} height={25} alt="Test Valley" />
          <div className={`${styles.category}`}>카테고리</div>
          <div className={`${styles.search}`}>
            <Image src="/search.svg" width={20} height={20} alt="Search" />
            <input type="search" placeholder="살까말까 고민된다면 검색해보세요!" value="" onChange={console.log}/>
          </div>
        </div>
        <div className={styles.account}>
          <button>
            <Image src="/home-event.svg" width={28} height={28} alt="Home" />
          </button>
          <Image src="/vertical-bar.svg" alt="" className={`${styles.bar}`} width={1} height={14}/>
          <button>로그인 / 회원가입</button>
        </div>
      </div>
    </header>
  );
};
