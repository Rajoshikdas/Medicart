
import './home.css';
import Shop from './shop';

const Home = () => {

  return (
    <>
      <div className='homeBanner'>
        <div className="appointment_booking">
          <div>Book an appointment</div>
          <div>with our doctors.</div>
          <button className='bannerbtn'>Book</button>
        </div>
        <div className="home-f">
          <img src="https://cdn-icons-png.flaticon.com/512/3774/3774299.png" alt="bannerimg" />
        </div>
      </div>

      <Shop />
    </>
  );
};

export default Home;
