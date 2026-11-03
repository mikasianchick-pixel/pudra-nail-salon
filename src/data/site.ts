/**
 * Все данные сайта в одном месте: название, контакты, услуги, мастера, отзывы.
 * Хотите поменять цену или текст — правьте здесь, вёрстку трогать не нужно.
 * Учебный проект: адрес, телефон, цены, люди и отзывы — вымышленные.
 */
import type { ImageMetadata } from 'astro';

import hero1 from '../../assets/images/hero/hero-01-pink-soft.jpg';
import process3 from '../../assets/images/process/process-03-gloves-tools.jpg';

import w01 from '../../assets/images/gallery/work-01-tortoiseshell.jpg';
import w02 from '../../assets/images/gallery/work-02-mauve-glitter.jpg';
import w03 from '../../assets/images/gallery/work-03-pink.jpg';
import w04 from '../../assets/images/gallery/work-04-white.jpg';
import w05 from '../../assets/images/gallery/work-05-flower.jpg';
import w06 from '../../assets/images/gallery/work-06-ornate-plant.jpg';
import w07 from '../../assets/images/gallery/work-07-french-blue.jpg';
import w08 from '../../assets/images/gallery/work-08-polka-dots.jpg';
import w09 from '../../assets/images/gallery/work-09-red.jpg';
import w10 from '../../assets/images/gallery/work-10-gold-stars.jpg';
import w11 from '../../assets/images/gallery/work-11-red-minimal.jpg';
import w12 from '../../assets/images/gallery/work-12-french-watch.jpg';

import m1 from '../../assets/images/masters/master-01.jpg';
import m2 from '../../assets/images/masters/master-02.jpg';
import m3 from '../../assets/images/masters/master-03.jpg';

/* ---------- Бренд и контакты ---------- */
export const site = {
  name: 'Пудра',
  tagline: 'студия маникюра',
  description:
    'Студия маникюра «Пудра» на Пречистенке: аккуратный маникюр и педикюр, стойкое покрытие до 4 недель, стерильные инструменты. Онлайн-запись за минуту.',
  city: 'Москва',
  address: 'ул. Пречистенка, 12',
  metro: 'м. Кропоткинская — 3 минуты пешком',
  hours: 'Ежедневно 10:00–22:00',
  phone: '+7 (999) 000-00-00',
  phoneHref: 'tel:+79990000000',
  whatsapp: '79990000000',
  telegram: 'pudra_nails',
  vk: 'https://vk.com/pudra_nails',
  mapUrl: 'https://yandex.ru/maps/?text=' + encodeURIComponent('Москва, ул. Пречистенка, 12'),
  rating: '4,9',
  reviewsCount: 312,
  heroImage: hero1,
  hygieneImage: process3,
} as const;

export const nav = [
  { href: '#services', label: 'Услуги' },
  { href: '#works', label: 'Работы' },
  { href: '#masters', label: 'Мастера' },
  { href: '#reviews', label: 'Отзывы' },
  { href: '#contacts', label: 'Контакты' },
] as const;

/* ---------- Преимущества ---------- */
export const features = [
  {
    icon: 'shield',
    title: 'Стерильно, как в клинике',
    text: 'Три этапа обработки инструментов и сухожар. Крафт-пакет вскрываем при вас.',
  },
  {
    icon: 'clock',
    title: 'Покрытие до 4 недель',
    text: 'Гарантия 7 дней: если появился скол — исправим бесплатно.',
  },
  {
    icon: 'drop',
    title: 'Премиальные материалы',
    text: 'Профессиональные базы и гели без резкого запаха. Бережно к ногтям.',
  },
  {
    icon: 'cup',
    title: 'Без спешки',
    text: 'Записываем с запасом времени. Чай, кофе и удобные кресла.',
  },
] as const;

/* ---------- Услуги и цены ---------- */
export interface Service {
  id: string;
  name: string;
  desc: string;
  duration: string;
  price: string;
}
export interface ServiceCategory {
  id: string;
  title: string;
  items: Service[];
}

export const services: ServiceCategory[] = [
  {
    id: 'manicure',
    title: 'Маникюр',
    items: [
      { id: 'mani-clean', name: 'Маникюр без покрытия', desc: 'Комбинированный маникюр, форма, уход за кутикулой', duration: '45 мин', price: '1 600 ₽' },
      { id: 'mani-gel', name: 'Маникюр + покрытие гель-лаком', desc: 'Самая популярная услуга: маникюр и однотонное покрытие', duration: '1 ч 45 мин', price: '3 200 ₽' },
      { id: 'mani-strong', name: 'Маникюр + укрепление + покрытие', desc: 'Для тонких и ломких ногтей — выравнивание базой', duration: '2 ч', price: '3 700 ₽' },
      { id: 'mani-men', name: 'Мужской маникюр', desc: 'Аккуратная форма и чистая кутикула без блеска', duration: '45 мин', price: '1 800 ₽' },
    ],
  },
  {
    id: 'pedicure',
    title: 'Педикюр',
    items: [
      { id: 'pedi-clean', name: 'Педикюр без покрытия', desc: 'Обработка стоп и пальцев, форма ногтей', duration: '1 ч', price: '2 600 ₽' },
      { id: 'pedi-gel', name: 'Педикюр + покрытие', desc: 'Полный педикюр и стойкое покрытие гель-лаком', duration: '1 ч 30 мин', price: '3 600 ₽' },
      { id: 'pedi-smart', name: 'SMART-педикюр', desc: 'Деликатная обработка одноразовыми дисками', duration: '1 ч 15 мин', price: '3 200 ₽' },
    ],
  },
  {
    id: 'design',
    title: 'Покрытие и дизайн',
    items: [
      { id: 'design-french', name: 'Френч / «Milky French»', desc: 'Классический или молочный френч — главный тренд сезона', duration: '+20 мин', price: 'от 500 ₽' },
      { id: 'design-nail', name: 'Дизайн одного ногтя', desc: 'Рисунок, стразы, втирка, фольга', duration: '+10 мин', price: 'от 150 ₽' },
      { id: 'design-recoat', name: 'Снятие + новое покрытие', desc: 'Без маникюра, если кутикула в порядке', duration: '1 ч 15 мин', price: '2 400 ₽' },
      { id: 'design-ext', name: 'Наращивание гелем', desc: 'Любая длина и форма: миндаль, овал, квадрат', duration: '2 ч 30 мин', price: 'от 4 500 ₽' },
    ],
  },
  {
    id: 'combo',
    title: 'Комплексы',
    items: [
      { id: 'combo-mp', name: 'Маникюр + педикюр с покрытием', desc: 'Один мастер, всё за один визит', duration: '3 ч', price: '6 300 ₽' },
      { id: 'combo-4h', name: '«В 4 руки»', desc: 'Маникюр и педикюр одновременно двумя мастерами', duration: '1 ч 45 мин', price: '6 800 ₽' },
    ],
  },
];

/* ---------- Галерея ---------- */
export type GalleryTag = 'nude' | 'french' | 'bright' | 'design';
export const galleryFilters: { id: GalleryTag | 'all'; label: string }[] = [
  { id: 'all', label: 'Все' },
  { id: 'nude', label: 'Нюд' },
  { id: 'french', label: 'Френч' },
  { id: 'bright', label: 'Яркие' },
  { id: 'design', label: 'Дизайн' },
];

export interface GalleryItem {
  src: ImageMetadata;
  alt: string;
  tag: GalleryTag;
  /** Размер плитки в bento-сетке */
  size?: 'tall' | 'wide';
}

export const gallery: GalleryItem[] = [
  { src: w03, alt: 'Нежно-розовый маникюр на белой ткани', tag: 'nude', size: 'tall' },
  { src: w01, alt: 'Чёрный и черепаховый дизайн с золотым кольцом', tag: 'design' },
  { src: w07, alt: 'Классический френч и золотые украшения', tag: 'french' },
  { src: w09, alt: 'Красный гель-лак в процессе работы мастера', tag: 'bright', size: 'wide' },
  { src: w05, alt: 'Нюдовый жемчужный хром на миндальной форме', tag: 'nude', size: 'tall' },
  { src: w02, alt: 'Лиловый, белый и серебристый блеск', tag: 'design' },
  { src: w12, alt: 'Френч с золотыми часами и кольцами', tag: 'french' },
  { src: w10, alt: 'Золотой блеск со звёздами', tag: 'bright' },
  { src: w04, alt: 'Молочно-белый маникюр', tag: 'nude' },
  { src: w08, alt: 'Дизайн в горошек', tag: 'design', size: 'wide' },
  { src: w11, alt: 'Минималистичный акцент: один красный ноготь', tag: 'bright' },
  { src: w06, alt: 'Изящный дизайн с растительным мотивом', tag: 'design' },
];

/* ---------- Мастера ---------- */
export interface Master {
  id: string;
  name: string;
  role: string;
  experience: string;
  skills: string;
  photo: ImageMetadata;
}
export const masters: Master[] = [
  { id: 'anna', name: 'Анна Соколова', role: 'Топ-мастер', experience: '8 лет', skills: 'Сложный дизайн, френч', photo: m2 },
  { id: 'darya', name: 'Дарья Ким', role: 'Мастер маникюра', experience: '5 лет', skills: 'Укрепление, нюд, наращивание', photo: m1 },
  { id: 'marina', name: 'Марина Ахмедова', role: 'Мастер педикюра', experience: '6 лет', skills: 'SMART-педикюр, комплексы', photo: m3 },
];

/* ---------- Отзывы ---------- */
export const reviews = [
  { name: 'Екатерина', date: 'октябрь 2026', text: 'Хожу к Анне уже год. Покрытие держится честные 4 недели, ни одного скола. И очень спокойная атмосфера — это мой час тишины.' },
  { name: 'Ольга', date: 'октябрь 2026', text: 'Понравилось, что пакет с инструментами вскрыли при мне. Для меня это главное. Маникюр аккуратный, кутикула идеальная.' },
  { name: 'Алина', date: 'сентябрь 2026', text: 'Сделали «Milky French» по фото из Pinterest — получилось даже лучше. Записалась через сайт за минуту.' },
  { name: 'Мария', date: 'сентябрь 2026', text: 'Педикюр у Марины — лучший в Москве, без преувеличений. Отдельное спасибо за кофе и плед.' },
  { name: 'Светлана', date: 'август 2026', text: 'Ногти тонкие, раньше всё отслаивалось за неделю. Дарья сделала укрепление — третью неделю как новые.' },
  { name: 'Ирина', date: 'август 2026', text: 'Ходили с подругой «в 4 руки» — удобно, быстро, красиво. Цены честные, никаких доплат на месте.' },
] as const;

/* ---------- Стерильность ---------- */
export const hygieneSteps = [
  { title: 'Дезинфекция', text: 'Сразу после работы инструменты погружаются в профессиональный раствор.' },
  { title: 'Сухожар 180 °C', text: 'Стерилизация горячим воздухом убивает все бактерии и вирусы.' },
  { title: 'Крафт-пакет при вас', text: 'Стерильные инструменты хранятся запечатанными. Вскрываем на ваших глазах.' },
] as const;

export const brands = ['Luxio', 'Kodi Professional', 'TNL', 'Staleks', 'Smart Master'] as const;

/* ---------- FAQ ---------- */
export const faq = [
  { q: 'Сколько держится покрытие?', a: 'В среднем 3–4 недели. Срок зависит от скорости роста ногтей и бытовых нагрузок. Мы рекомендуем обновлять покрытие раз в 3 недели.' },
  { q: 'Что делать, если появился скол?', a: 'На покрытие действует гарантия 7 дней. Напишите нам — исправим бесплатно в удобное для вас время.' },
  { q: 'Как отменить или перенести запись?', a: 'Позвоните или напишите в WhatsApp/Telegram минимум за 4 часа до визита. Так мы успеем предложить время другим клиентам.' },
  { q: 'Можно прийти со своим дизайном?', a: 'Конечно. Принесите фото или пришлите заранее в мессенджер — мастер подскажет, сколько времени и стоимости займёт работа.' },
  { q: 'Вредно ли гель-покрытие для ногтей?', a: 'Само покрытие не вредит. Ногти портит неправильное снятие. Мы снимаем аккуратно аппаратом и не пропиливаем ноготь.' },
  { q: 'Как можно оплатить?', a: 'Картой, наличными, по QR-коду (СБП) или подарочным сертификатом.' },
] as const;

/* ---------- Запись ---------- */
/** Временные слоты для записи */
export const timeSlots = ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'] as const;
