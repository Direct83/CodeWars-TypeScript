// Не все целые числа могут быть представлены JavaScript/TypeScript. Он имеет пространство для представления
// 53-битных целых чисел со знаком. В этом Ката мы должны определить, безопасно ли использовать целое число или нет. 
// Используйте новейшие функции ES6, чтобы найти это.

export const SafeInteger = (n: number): boolean => Number.MAX_SAFE_INTEGER > n



console.log(SafeInteger(9007199254740992));
console.log(SafeInteger(9007199254740990));
