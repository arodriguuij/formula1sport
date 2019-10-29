import axios from 'axios';

export const getQuery = async (queryParameter) => {
    if (!queryParameter.optionsQuery) queryParameter.optionsQuery = '';

    const url = `https://ergast.com/api/f1/${queryParameter.dataQuery}.json${queryParameter.optionsQuery}`;

    try {
        const res = await axios(url, {});
        return relation(res, queryParameter.categoryQuery);
    } catch (err) {
        console.log(err);
    }
};

const relation = (res, category) => {
    switch (category) {
        case 'seasons':
            return res.data.MRData.SeasonTable.Seasons;
            break;
        case 'races':
            return res.data.MRData.RaceTable.Races;
            break;
        case 'constructors':
            return res.data.MRData.ConstructorTable.Constructors;
            break;
        case 'drivers':
            return res.data.MRData.DriverTable.Drivers;
            break;

    }
}                