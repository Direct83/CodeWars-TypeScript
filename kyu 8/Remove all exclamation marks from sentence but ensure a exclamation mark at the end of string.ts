//удалить все восклицательные знаки и поставить в конце один

export const remove = (s: string): string => s.replace(/!/g, '') + '!'

console.log(remove('!Hi'));
