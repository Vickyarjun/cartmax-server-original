import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Vicky',
      email: 'admin@example.com',
      password: bcrypt.hashSync('135790'),
      isAdmin: true,
    },
    {
      name: 'Tony',
      email: 'user@example.com',
      password: bcrypt.hashSync('246800'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Allen Solly Slim fit shirt',
      slug: 'allen-solly-slim-fit-shirt',
      category: 'Shirts',
      image: '/images/Allen solly shirt.jpg',
      price: 31,
      countInStock: 13,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality shirt',
    },
    {
      name: 'Arrow Slim fit shirt',
      slug: 'arrow-slim-fit-shirt',
      category: 'Shirts',
      image: '/images/Arrow shirt.jpg',
      price: 24,
      countInStock: 13,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality shirt',
    },
    {
      name: 'Allen Solly Slim casual pant',
      slug: 'allen-solly-slim-casual-pant',
      category: 'pants',
      image: '/images/Allen solly pant.jpg',
      price: 71,
      countInStock: 13,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      name: 'Arrow Slim casual pant',
      slug: 'arrow-slim-casual-pant',
      category: 'pants',
      image: '/images/Arrow pant.jpg',
      price: 58,
      countInStock: 13,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
  ],
};

export default data;
