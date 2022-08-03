import { HeroCard } from './';
import { Publisher } from '../interfaces';
import { getHerosByPublisher } from '../helpers';


interface Props {
    publisher: Publisher;
}

export const HeroList = ({ publisher }: Props) => {
    const heros = getHerosByPublisher(publisher);

    return (
        <div className='row row-cols-1 row-cols-md-3 g-3'>
            {
                heros.map((hero) => (
                    <HeroCard
                        key={hero.id}
                        {...hero}
                    />
                ))
            }
        </div>
    );
};

export default HeroList;