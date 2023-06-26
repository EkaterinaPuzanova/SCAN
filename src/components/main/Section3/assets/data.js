import icon1 from './icon1.svg';
import icon2 from './icon2.svg';
import icon3 from './icon3.svg';

export const data = [
  {
    id: 1,
    back: `var(--color-theme3)`,
    color: `var(--color-dark)`,
    cardTitle: 'Beginner',
    cardSubtTitle: 'Для небольшого исследования',
    urlIcon: icon2,
    price1: '799 ₽',
    price2: '1 200 ₽',
    text: 'или 150 ₽/мес. при рассрочке на 24 мес.',
    item1: 'Безлимитная история запросов',
    item2: 'Безопасная сделка',
    item3: 'Поддержка 24/7'
  },
  {
    id: 2,
    back: `var(--color-theme4)`,
    color: `var(--color-dark)`,
    cardTitle: 'Pro',
    cardSubtTitle: 'Для HR и фрилансеров',
    urlIcon: icon3,
    price1: '1 299 ₽',
    price2: '2 600 ₽',
    text: 'или 279 ₽/мес. при рассрочке на 24 мес.',
    item1: 'Все пункты тарифа Beginner',
    item2: 'Экспорт истории',
    item3: 'Рекомендации по приоритетам'
  },
  {
    id: 3,
    back: `var(--color-dark)`,
    color: `var(--color-light)`,
    cardTitle: 'Business',
    cardSubtTitle: 'Для корпоративных клиентов',
    urlIcon: icon1,
    price1: '2 379 ₽',
    price2: '3 700 ₽',
    text: ' ',
    item1: 'Все пункты тарифа Pro',
    item2: 'Безлимитное количество запросов',
    item3: 'Приоритетная поддержка'
  }
]