const groupBy = (arr: any[], func: Function) =>
  arr.reduce(
    (acc: any, element: any) => ({
      ...acc,
      [func(element)]: [...(acc[func(element)] || []), element],
    }),
    {}
  );

export default (arr1: any[], arr2: any[]) => {
  const denormalized = groupBy(
    [...arr1, ...arr2],
    (element: any) => element.label
  );
  const keys = Object.getOwnPropertyNames(denormalized);

  return keys.map((key: string) => ({
    id: key.toLowerCase().replace(/ /g, '-'),
    label: key,
    count: (denormalized[key] as any[]).reduce(
      (acc: number, { count }) => acc + count,
      0
    ),
    laureates: (denormalized[key] as any[]).reduce(
      (acc: any[], { laureates }) => [...acc, ...laureates],
      []
    ),
  }));
};
