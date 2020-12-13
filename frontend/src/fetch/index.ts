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
    }));
};
