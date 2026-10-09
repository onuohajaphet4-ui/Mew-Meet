import { useMemo, useState } from "react";
import { FiHeart, FiMapPin, FiSearch, FiSliders } from "react-icons/fi";
import { Link } from "react-router-dom";
import './Explore.css'
import bella from '../assets/bella.jpg'
import noir from '../assets/noir.jpg'
import sky from '../assets/sky.jpg'
import alvin from '../assets/alvin.jpg'
import {
  MoreHorizontal,
} from "lucide-react";


 export const cats = [
  {
    id: 1,
    name: "Bella",
    age:1,
    ageLabel: "20/07/2025",
    type: "Young",
    location: "owerri",
    gender:"Female",
    pronoun:"She",
    images:[
        bella,
        bella,
        bella,
    ]
     
  },
  {
    id: 2,
    name: "Nior",
    age: 0,
    ageLabel: "18/09/2026",
    type: "Kitten",
    location: "owerri",
    gender:"Male",
    pronoun:"He",
    images:[
     noir,
     noir,
     noir,
    ]
      
  },
  {
    id: 3,
    name: "Alvin",
    age: 0,
    ageLabel: "18/09/2026",
    type: "Kitten",
    location: "owerri",
    gender:"Male",
    pronoun:"He",
    images:
     [
       sky,
       sky,
       sky,
     ]
  },
  {
    id: 4,
    name: "Sky",
    age: 0,
    ageLabel: "18/09/2026",
    type: "Kitten",
    location: "Lagos",
    gender:"Female",
    pronoun:"She",
    images:
      [
        alvin,
        alvin,
        alvin
      ]
  },
 {
    id: 5,
    name: "Milo",
    age: "3",
     ageLabel: "12/7/2023",
     type: "Adult",
    location: "Port Harcourt",
    gender:"Male",
    pronoun:"He",
    images:[
      "https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&w=700&q=80",
  
    ]
  }, 
  {
    id: 6,
    name: "Bean",
    age: 6,
    ageLabel: "11/4/2026",
    type: "Kitten",
    location: "Enugu",
    gender:"Female",
    pronoun:"SHe",
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

      <Link to="/profile" className="icon-btn" >
                      {/* Explore cats */}
                    <MoreHorizontal size={22} />
                    </Link>
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
                <img src={cat.images [0]} alt={cat.name} />

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
                  <p>{cat.age} years</p>
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