import { BookImpl } from './book.js';
import { getLastItem } from './generic.js';
import { processInput } from './union.js';

const book = new BookImpl('Title of the Book', 'Author Name', 2022);
book.getInfo();

const array = [1, 2, 3, 4, 5];
const lastElement = getLastItem(array);
console.log('Last Element of the Array:', lastElement);

console.log('Processed Input:', processInput(5));
console.log('Processed Input:', processInput('Hello'));
