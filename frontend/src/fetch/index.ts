import axios from 'axios';
import normalizeLanguage from './normalize-language';

const normalizeBirthInfo = (laureate: any) => ({
  ...laureate,
  birth: laureate.birth
    ? laureate.birth
    : {
        place: {
          locationString: laureate.birthCountryNow,
          countryNow: laureate.birthCountryNow,
        },
      },
});

const getFullName = (laureate: any) =>
  laureate.knownName
    ? laureate.knownName
    : `${laureate.givenName} ${laureate.familyName}`;
const getOrgName = (laureate: any) => laureate.orgName;
const getName = (laureate: any) =>
  getOrgName(laureate) || getFullName(laureate);

const getFoundedCountry = (laureate: any) =>
  laureate.founded && laureate.founded.place
    ? laureate.founded.place.countryNow
    : undefined;
const getBirthCountry = (laureate: any) =>
  laureate.birth && laureate.birth.place
    ? laureate.birth.place.countryNow
    : undefined;
const getCountry = (laureate: any) =>
  getFoundedCountry(laureate) || getBirthCountry(laureate);

const getAwards = (laureate: any) =>
  laureate.nobelPrizes.map((p: any) => p.awardYear).join(', ');

const getCategories = (laureate: any): string[] =>
  Object.getOwnPropertyNames(
    laureate.nobelPrizes
      .map((p: any) => p.category)
      .reduce(
        (cacc: any, category: string) => ({
          ...cacc,
          [category]: true,
        }),
        {}
      )
  );

const groupByCategory = (laureates: any[]): any[] => {
  const categories = laureates
    .map((laureate: any) => getCategories(laureate))
    .reduce((acc: string[], cs: string[]) => [...acc, ...cs], [])
    .reduce(
      (acc: any, category: string) => ({
        ...acc,
        [category]: acc[category] ? acc[category] + 1 : 1,
      }),
      {}
    );

  return Object.getOwnPropertyNames(categories).map((label: string) => ({
    label,
    count: categories[label],
    laureates: laureates.filter((laureate: any) =>
      getCategories(laureate).includes(label)
    ),
  }));
};

export default (offset: number = 0) => {
  return axios
    .get(`https://api.nobelprize.org/2.0/laureates?limit=25&offset=${offset}`)
    .then((response) => response.data)
    .then(({ laureates, ...rest }) => ({
      ...rest,
      laureates: (laureates as any[]).map((laureate) =>
        normalizeLanguage(laureate)
      ),
    }))
    .then(({ laureates, ...rest }) => ({
      ...rest,
      laureates: (laureates as any[]).map((laureate) =>
        normalizeBirthInfo(laureate)
      ),
    }))
    .then(({ laureates, ...rest }) => ({
      ...rest,
      laureates: (laureates as any[]).map((laureate: any) => ({
        ...laureate,
        name: getName(laureate),
        country: getCountry(laureate),
        awards: getAwards(laureate),
      })),
    }))
    .then(({ laureates, ...rest }) => ({
      ...rest,
      laureates: laureates.reduce(
        (acc: any, laureate: any) => ({
          ...acc,
          [laureate.id]: laureate,
        }),
        {}
      ),
      categories: groupByCategory(laureates),
    }));
};
