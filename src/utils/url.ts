/**
 * Ссылка внутри сайта с учётом подпапки (base из astro.config.mjs).
 * На GitHub Pages сайт живёт в /pudra-nail-salon/, поэтому '/privacy' сломался бы.
 * url('privacy/') → '/pudra-nail-salon/privacy/'
 */
export const url = (path = ''): string => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
};
