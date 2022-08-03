import { Link } from 'react-router-dom';
import { Hero } from '../interfaces';

interface Props extends Hero { }

export const HeroCard = ({
    id,
    publisher,
    alter_ego,
    superhero,
    characters,
    first_appearance,
}: Props) => {

    const heroImg = `/assets/heroes/${id}.jpg`;
    const characterByHero = alter_ego !== characters && <p>{characters}</p>;

    return (
        <div className='col animate__animated animate__fadeIn'>
            <div className='card'>
                <div className="row no-gutters">
                    <div className="col-4">
                        <img
                            src={heroImg}
                            className="card-img" alt={superhero}
                        />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">
                                {superhero}
                            </h5>
                            <p className='card-text'>
                                {alter_ego}
                            </p>
                            {characterByHero}
                            <p className="card-text">
                                <small className='text-muted'>
                                    {first_appearance}
                                </small>
                            </p>
                            <Link to={`/hero/${id}`}>Ver más</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroCard;