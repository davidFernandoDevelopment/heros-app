import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroById } from '../helpers';

export const HeroPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const hero = getHeroById(id);

  if (!hero) {
    return <Navigate to="/" />;
  }
  const {
    superhero,
    alter_ego,
    publisher,
    first_appearance,
    characters
  } = hero;

  const onNavigateBack = () => {
    navigate(-1);
  };

  return (
    <div className='row mt-5'>
      <div className="col-4">
        <img
          src={`/assets/heroes/${id}.jpg`}
          alt={superhero}
          className='img-thumbnail animate__animated animate__fadeInLeft'
        />
      </div>
      <div className="col-8">
        <h3>{superhero}</h3>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'><b>Alter ego: </b>{alter_ego}</li>
          <li className='list-group-item'><b>Publisher: </b>{publisher}</li>
          <li className='list-group-item'><b>First appearence: </b>{first_appearance}</li>
        </ul>
        <h5 className='mt-3'>Characters</h5>
        <p>{characters}</p>
        <button
          className='btn btn-primary'
          onClick={onNavigateBack}
        >
          Regresar
        </button>
      </div>
    </div>
  );
};

export default HeroPage;