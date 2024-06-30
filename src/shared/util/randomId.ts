export const randomId = (): Id =>
  String(Math.floor((Math.random() + Math.random()) * 10000000));
