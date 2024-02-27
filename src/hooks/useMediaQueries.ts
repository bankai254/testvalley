import { useEffect, useMemo, useState } from 'react';

function useMediaQuery(query: string) {
  const mediaQuery = useMemo(() => window.matchMedia(query), [query]);
  const [match, setMatch] = useState(mediaQuery.matches);

  useEffect(() => {
    const onChange = () => setMatch(mediaQuery.matches);
    mediaQuery.addEventListener('change', onChange);

    return () => mediaQuery.removeEventListener('change', onChange);
  }, [mediaQuery]);

  return match;
}

export function useMediaQueries() {
  const md = useMediaQuery('(min-width: 720px)');
  const lg = useMediaQuery('(min-width: 960px)');

  return { md, lg };
}
