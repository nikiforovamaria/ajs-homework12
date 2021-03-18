import Cart from '../service/Cart';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
import Movie from '../domain/Movie';

test('1 - new cart should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('2 - should add item to cart', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1009, 'Avengers', 2012, 'USA', 'Avengers Assemble!', ['fantasy', 'thriller', 'adventures'], 137, 500));

  expect(cart.items.length).toBe(3);
});

test('3 - should count full price', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1009, 'Avengers', 2012, 'USA', 'Avengers Assemble!', ['fantasy', 'thriller', 'adventures'], 137, 500));

  expect(cart.getFullPrice()).toBe(3400);
});

test('4 - should count discounted price', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1009, 'Avengers', 2012, 'USA', 'Avengers Assemble!', ['fantasy', 'thriller', 'adventures'], 137, 500));

  expect(cart.getDiscountedPrice(10)).toBe(3060);
});

test('5 - should remove item from cart', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1009, 'Avengers', 2012, 'USA', 'Avengers Assemble!', ['fantasy', 'thriller', 'adventures'], 137, 500));
  cart.remove(1009);

  expect(cart.items.length).toBe(2);
});
