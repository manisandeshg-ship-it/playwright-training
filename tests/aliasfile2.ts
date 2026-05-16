import type{ University } from './aliasfile1';

const user1:University="Student";
console.log('User1 role is:',user1);

function subtract(x: number = 10, y: number = 5): number {
  return x - y;
}
console.log(subtract(7, undefined)); // Output: 2