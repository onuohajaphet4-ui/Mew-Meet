import { useMemo, useState } from "react";
import { FiHeart, FiMapPin, FiSearch, FiSliders } from "react-icons/fi";
import { Link } from "react-router-dom";
import './Explore.css'

 export const cats = [
  {
    id: 1,
    name: "Luna",
    age: 2,
    ageLabel: "2 years",
    type: "Young",
    location: "Lagos",
    images:[
       "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=700&q=80",
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=700&q=80",
         "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=700&q=80"
    ]
     
  },
  {
    id: 2,
    name: "Mochi",
    age: 1,
    ageLabel: "1 year",
    type: "Young",
    location: "Abuja",
    images:[
      "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=700&q=80",
    ]
      
  },
  {
    id: 3,
    name: "Milo",
    age: 3,
    ageLabel: "3 years",
    type: "Adult",
    location: "Port Harcourt",
    images:
     [
       "https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&w=700&q=80",
        "https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&w=700&q=80",
         "https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&w=700&q=80",
     ]
  },
  {
    id: 4,
    name: "Nala",
    age: 8,
    ageLabel: "8 months",
    type: "Kitten",
    location: "Lagos",
    images:
      [
        "https://images.unsplash.com/photo-1513245543132-31f507417b26?auto=format&fit=crop&w=700&q=80",
        "https://images.unsplash.com/photo-1513245543132-31f507417b26?auto=format&fit=crop&w=700&q=80",
        "https://images.unsplash.com/photo-1513245543132-31f507417b26?auto=format&fit=crop&w=700&q=80",
      ]
  },
  {
    id: 5,
    name: "Coco",
    age: 4,
    ageLabel: "4 years",
    type: "Adult",
    location: "Ibadan",
    images:
      [
        "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&w=700&q=80",
        "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&w=700&q=80",
        "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&w=700&q=80",
      ]
  },
  {
    id: 6,
    name: "Bean",
    age: 6,
    ageLabel: "6 months",
    type: "Kitten",
    location: "Enugu",
    images:
      [
        "https://images.unsplash.com/photo-1561948955-570b270e7c36?auto=format&fit=crop&w=700&q=80",
        "https://images.unsplash.com/photo-1561948955-570b270e7c36?auto=format&fit=crop&w=700&q=80",
        "https://images.unsplash.com/photo-1561948955-570b270e7c36?auto=format&fit=crop&w=700&q=80",
      ]
  },
];

const filters = ["All", "Kitten", "Young", "Adult"];

function Explore() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredCats = useMemo(() => {
    return cats.filter((cat) => {
      const matchesSearch =
        cat.name.toLowerCase().includes(search.toLowerCase()) ||
        cat.location.toLowerCase().includes(search.toLowerCase());

      const matchesFilter =
        activeFilter === "All" || cat.type === activeFilter;

      return matchesSearch && matchesFilter;
    });
  }, [search, activeFilter]);

  return (
    <div className="explore-page">
      <header className="explore-header">
        <div>
          <p className="eyebrow">DISCOVER</p>
          <h1>Find your little friend.</h1>
          <p className="explore-subtitle">
            Browse cats looking for a place to call home.
          </p>
        </div>

        <button className="filter-button">
          <FiSliders />
        </button>
      </header>

      <div className="search-box">
        <FiSearch />
        <input
          type="text"
          placeholder="Search by name or location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="filter-tabs">
        {filters.map((filter) => (
          <button
            key={filter}
            className={activeFilter === filter ? "selected" : ""}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="explore-count">
        <span>{filteredCats.length} little friends</span>
        <span>Available for adoption</span>
      </div>

      {filteredCats.length > 0 ? (
        <div className="explore-grid">
          {filteredCats.map((cat) => (
            <Link
              to={`/cats/${cat.id}`}
              className="explore-card"
              key={cat.id}
            >
              <div className="explore-image">
                <img src={cat.images} alt={cat.name} />

                <button
                  className="explore-heart"
                  onClick={(e) => e.preventDefault()}
                  aria-label={`Save ${cat.name}`}
                >
                  <FiHeart />
                </button>
              </div>

              <div className="explore-card-info">
                <div>
                  <h2>{cat.name}</h2>
                  <p>{cat.ageLabel}</p>
                </div>

                <span>
                  <FiMapPin />
                  {cat.location}
                </span>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="empty-explore">
          <div>🐈</div>
          <h2>No little friends found</h2>
          <p>Try another name, location or filter.</p>
        </div>
      )}
    </div>
  );
}

export default Explore;