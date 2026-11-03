// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Адрес сайта: нужен для canonical и превью в соцсетях. Заменить на реальный домен при публикации.
  site: 'https://pudra-nails.example',
  // В Astro 7 по умолчанию 'jsx' — он может «склеивать» слова между тегами. Включаем классическое сжатие.
  compressHTML: true,
  build: {
    // Весь CSS (~11 КБ в сжатом виде) встраиваем в HTML: нет блокирующих запросов — первый экран рисуется сразу.
    inlineStylesheets: 'always',
  },
});
