import { Addition } from './addition.js';
import { Substraction } from './substraction.js';
import { Multiplication } from './multiplication.js';
import { Division } from './division.js';

export class Arithmetic {
  isEnabled = true;
  name = 'Arithmetic';
  modules = [Addition, Substraction, Multiplication, Division];
}
