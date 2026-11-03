// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Адрес сайта на GitHub Pages: домен + подпапка с именем репозитория
  site: 'https://mikasianchick-pixel.github.io',
  base: '/pudra-nail-salon',
  // В Astro 7 по умолчанию 'jsx' — он может «склеивать» слова между тегами. Включаем классическое сжатие.
  compressHTML: true,
  build: {
    // Весь CSS (~11 КБ в сжатом виде) встраиваем в HTML: нет блокирующих запросов — первый экран рисуется сразу.
    inlineStylesheets: 'always',
  },
});
