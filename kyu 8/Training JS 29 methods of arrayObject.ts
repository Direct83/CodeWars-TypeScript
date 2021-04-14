


export const bigToSmall = (arr: number[][]): string => arr.flat(1).sort((a, b) => a - b).reverse().join('>');


console.log(bigToSmall([[1, 2], [3, 5], [4, 6]]))
