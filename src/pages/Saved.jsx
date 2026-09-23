import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Heart, MapPin, ArrowRight } from "lucide-react";
import { getSavedCats, toggleSavedCat } from "../savedCats";
import "./Saved.css";
// import { FaWhatsapp} from "react-icons/fa";

function Saved() {
  const [savedCats, setSavedCats] = useState([]);

  useEffect(() => {
    setSavedCats(getSavedCats());

    const handleSavedUpdate = () => {
      setSavedCats(getSavedCats());
    };

    window.addEventListener("savedCatsUpdated", handleSavedUpdate);

    return () => {
      window.removeEventListener("savedCatsUpdated", handleSavedUpdate);
    };
  }, []);

  const handleRemove = (cat) => {
    toggleSavedCat(cat);
    setSavedCats(getSavedCats());
  };

  const handleWhatsApp = (cat, action) => {
  const whatsappNumber = "2348145990289";

  const message = `Hi! I'm interested in ${action} ${cat.name}.

Cat details:
Name: ${cat.name}
Age: ${cat.ageLabel || `${cat.age} years old`}
Type: ${cat.type}
Location: ${cat.location}

I found ${cat.name} on your cat adoption page.`;

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  window.open(whatsappUrl, "_blank");
};

  return (
    <main className="saved-page">
      <header className="saved-header">
        <div>
          <p className="saved-eyebrow">YOUR LITTLE COLLECTION</p>
          <h1>Saved Cats</h1>
          <p className="saved-subtitle">
            The cats that caught your heart. 🐾
          </p>
        </div>

        <div className="saved-count">
          <Heart size={18} fill="currentColor" />
          <span>{savedCats.length}</span>
        </div>
      </header>

      {savedCats.length === 0 ? (
        <section className="saved-empty">
          <div className="empty-cat">🐱</div>

          <h2>No cats saved yet</h2>

          <p>
            Your future furry friends will appear here when you save them.
          </p>

          <Link to="/explore" className="explore-btn">
            Explore cats
            <ArrowRight size={18} />
          </Link>
        </section>
      ) : (
        <section className="saved-grid">
          {savedCats.map((cat) => (
            <article className="saved-card" key={cat.id}>
              <Link
                to={`/cats/${cat.id}`}
                className="saved-image-wrapper"
              >
                <img
                  src={cat.images?.[0]}
                  alt={cat.name}
                  className="saved-image"
                />
              </Link>

              <button
                className="remove-btn"
                onClick={() => handleRemove(cat)}
                aria-label={`Remove ${cat.name} from saved`}
              >
                <Heart size={20} fill="currentColor" />
              </button>

              <div className="saved-card-content">
                <div className="saved-card-top">
                  <div>
                    <h2>{cat.name}</h2>
                    <p>{cat.ageLabel || `${cat.age} years old`}</p>
                  </div>

                  <span className="cat-type">
                    {cat.type}
                  </span>
                </div>

                <div className="saved-location">
                  <MapPin size={15} />
                  <span>{cat.location}</span>
                </div>

               <Link
  to={`/cats/${cat.id}`}
  className="meet-btn"
>
  Meet {cat.name}
  <ArrowRight size={17} />
</Link>

<div className="saved-actions">
  <button
    className="adopt-btn"
    onClick={() => handleWhatsApp(cat, "adopt")}
  >
    Adopt {cat.name}
  </button>

  <button
    className="pay-btn"
    onClick={() => handleWhatsApp(cat, "reserve")}
  > 
  
    Pay / Reserve

    
  </button>
</div>
              </div>
            </article>
          ))}
        </section>
      )}
    </main>
  );
}

export default Saved;