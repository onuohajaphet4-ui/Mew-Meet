import { FiArrowRight, FiHeart, FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom";
import './Home.css'
import Fact from "../components/Fact";
import bella from '../assets/bella.jpg'
import noir from '../assets/noir.jpg'

const cats = [
  {
   id: 1,
      name: "Bella",
      age:"1 years",
      location: "owerri",
      image:
          bella,
        
       
    },
    {
      id: 2,
      name: "Nior",
      age:"0 years",
      location: "owerri",
      image:
       noir,
        
    },
  {
    id: 3,
    name: "Milo",
    age: "3 years",
    location: "Port Harcourt",
    image:
      "https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&w=700&q=80",
  },
];

function Home() {
  return (
    <div className="home">
      <header className="home-header">
        <div>
          <p className="eyebrow">WELCOME TO CAT WORK 🐾</p>
          <h1>
            Find your
            <br />
            little <span>companion.</span>
          </h1>
        </div>

        <button className="header-heart" aria-label="Favorites">
          <FiHeart />
        </button>
      </header>

      <section className="hero-card">
        <div className="hero-content">
          <span className="hero-badge">A new friend is waiting</span>

          <h2>
            Every cat
            <br />
            deserves a home.
          </h2>

          <p>
            Meet lovely cats looking for someone to share their little
            world with.
          </p>

          <Link to="/explore" className="hero-button">
            Explore cats
            <FiArrowRight />
          </Link>
        </div>

        <div className="hero-decoration">
          <div className="hero-circle">
            🐈
          </div>
          <span className="sparkle sparkle-one">✦</span>
          <span className="sparkle sparkle-two">✦</span>
          <span className="sparkle sparkle-three">·</span>
        </div>
      </section>

      <section className="cats-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">SAY HELLO</p>
            <h2>Little friends</h2>
          </div>

          <Link to="/explore" className="see-all">
            See all
            <FiArrowRight />
          </Link>
        </div>

        <div className="cats-scroll">
          {cats.map((cat) => (
            <Link
              to={`/cats/${cat.id}`}
              className="cat-card"
              key={cat.id}
            >
              <div className="cat-image-wrapper">
                <img src={cat.image} alt={cat.name} />

                <button
                  className="cat-heart"
                  aria-label={`Save ${cat.name}`}
                  onClick={(e) => e.preventDefault()}
                >
                  <FiHeart />
                </button>
              </div>

              <div className="cat-info">
                <div>
                  <h3>{cat.name}</h3>
                  <p>{cat.age}</p>
                </div>

                <span className="cat-location">
                  <FiMapPin />
                  {cat.location}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="adoption-note">
        <div className="note-icon">♡</div>

        <div>
          <p className="eyebrow">A LITTLE REMINDER</p>
          <h2>Adoption changes two lives.</h2>
          <p>
            Yours, and the little life waiting to become part of it.
          </p>
        </div>
      </section>


      <Fact/>
    </div>
  );
}

export default Home;