import React from 'react';

import Image from 'next/image';
export function Loader() {
  return (
    <div style={{ textAlign: 'center', display: 'block' }}>
      <Image src="/pulse-multiple.svg" width={24} height={24} alt="Loading..." />
    </div>
  );
}
