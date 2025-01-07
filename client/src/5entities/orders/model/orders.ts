const MOCK_ORDERS = [
  {
    id: 2,
    fullname: 'Иван Иванов',
    address: 'ул. Ленина, д. 10, Москва',
    phone: '+7-495-123-45-67',
    cost: 150.0,
  },
  {
    id: 3,
    fullname: 'Мария Петрова',
    address: 'пр. Мира, д. 25, Санкт-Петербург',
    phone: '+7-812-765-43-21',
    cost: 75.0,
  },
] as const;

export default MOCK_ORDERS;
