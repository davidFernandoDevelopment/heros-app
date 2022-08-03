import { heros } from '../data';
import { Publisher } from '../interfaces';

export const getHerosByPublisher = (publisher: Publisher) => {
    return heros.filter(hero => hero.publisher === publisher);
};