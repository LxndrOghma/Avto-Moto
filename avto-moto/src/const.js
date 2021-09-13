import marpeh from './assets/img/marpeh.jpg';
import marpehSalon from './assets/img/marpeh_salon.jpg';
import marpehSpeedometer from './assets/img/marpeh_speedometer.jpg';

const siteMenuLinks = [
  'Автомобили',
  'Контакты',
  'Услуги',
  'Вакансии',
];

const footerNavLinks = [
  'Корпоративным клиентам',
  'Клиентам',
  'Аренда авто',
  'Каршеринг',
  'Как продать авто',
  'Trade-in',
  'Test drive',
];

const productInfoCharacteristics = [
  {
    name: 'бензин',
    modification: 'fuel',
  },
  {
    name: 'механика',
    modification: 'transmission',
  },
  {
    name: '100 л.с.',
    modification: 'power',
  },
  {
    name: '1.4 л',
    modification: 'volume',
  },
];

const sliderImages = [
  {
    id: 1,
    src: marpeh,
  },
  {
    id: 2,
    src: marpehSalon,
  },
  {
    id: 3,
    src: marpehSpeedometer,
  },
];

const сharacteristicsValues = [
  {
    description: 'Трансмиссия',
    value: 'Роботизированная',
  },
  {
    description: 'Мощность двигателя, л.с.',
    value: 249,
  },
  {
    description: 'Тип двигателя',
    value: 'Бензиновый',
  },
  {
    description: 'Привод',
    value: 'Полный',
  },
  {
    description: 'Объем двигателя, л',
    value: 2.4,
  },
  {
    description: 'Макс. крутящий момент',
    value: '370/4500',
  },
  {
    description: 'Количество цилиндров',
    value: 4,
  },
];

const ratings = [1, 2, 3, 4, 5];

export {
  siteMenuLinks,
  footerNavLinks,
  productInfoCharacteristics,
  sliderImages,
  сharacteristicsValues,
  ratings
};
