import React from 'react';

import Image from 'next/image';
import useSWR from 'swr';

import styles from '@/styles/MainShortcuts.module.scss';

interface ShortcutInterface {
  mainShortcutId: number;
  title: string;
  sort: number;
  imageUrl: string;
  linkUrl: string;
  creator: string;
  updater: string;
  deleter?: null;
  createdAt: string;
  updatedAt: string;
  deletedAt?: null;
}

export const MainShortcuts = () => {

  const { data, error } = useSWR('main-shortcut/all');

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const shortcuts = data.map((shortcut: ShortcutInterface) => (
    <div className={styles.shortcut} key={shortcut.mainShortcutId}>
      <Image
        src={shortcut.imageUrl}
        alt={shortcut.title}
        width={62}
        height={62}
      />
      <div>{shortcut.title}</div>
    </div>
  ));

  return (
    <div className="container">
      <div className={`${styles.shortcutsWrapper}`}>{shortcuts}</div>
    </div>
  );
};
