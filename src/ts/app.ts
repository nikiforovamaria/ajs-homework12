import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';
import Movie from './domain/Movie';

const cart = new Cart();
console.log(cart.items);

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
cart.add(new Movie(1009, 'Avengers', 2012, 'USA', 'Avengers Assemble!', ['fantasy', 'thriller', 'adventures'], 137, 500));
cart.add(new MusicAlbum(1010, 'Hybrid Theory', 'Linkin Park', 900));

console.log(cart.items);
console.log(cart.getFullPrice());
console.log(cart.getDiscountedPrice(10));
console.log(cart.remove(1010));
console.log(cart.items);
