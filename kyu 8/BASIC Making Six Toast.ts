// Вы должны вернуть количество тостов, которые вам нужно положить (или вынуть).
// В случае 5 вы все равно можете положить 1 тост:

export const sixToast = (num: number): number => Math.abs(6 - num)

console.log(sixToast(15));
console.log(sixToast(1));
