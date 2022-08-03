import { heros } from '../data';
import { Hero } from '../interfaces';

export const getHeroByName = (name: string = ''): Hero[] => {
    name = name.toLowerCase().trim();
    if (name.length === 0) return [];

    return heros.filter(hero => hero.superhero.toLowerCase().includes(name));
};