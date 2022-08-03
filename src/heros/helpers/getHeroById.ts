import { heros } from '../data';
import { Hero } from '../interfaces';

export const getHeroById = (id: string | undefined): Hero | undefined => {
    if (!id) return;
    return heros.find(hero => hero.id === id);
};