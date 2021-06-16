export const FILTER = [
  { id: 1, content: '신메뉴순', path: '/new', qs: '?sort=-created_at' },
  { id: 2, content: '인기메뉴순', path: '/popular', qs: '?sort=-sell_count' },
  { id: 3, content: '높은 가격순', path: '/high', qs: '?sort=-price' },
  { id: 4, content: '낮은 가격순', path: '/chip', qs: '?sort=price' },
  { id: 5, content: '만족도순', path: '/good', qs: '?sort=-rating' },
];
