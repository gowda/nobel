const normalize = (obj: any, language: string = 'en'): any => {
  if (!obj || typeof obj !== 'object') {
    return obj;
  }
  if (Array.isArray(obj)) {
    return [...obj.map((element: any) => normalize(element, language))];
  }
  if (Object.prototype.hasOwnProperty.call(obj, language)) {
    return obj[language];
  }
  return Object.getOwnPropertyNames(obj).reduce(
    (acc, key) => ({
      ...acc,
      [key]: normalize(obj[key], language),
    }),
    obj
  );
};

export default normalize;
