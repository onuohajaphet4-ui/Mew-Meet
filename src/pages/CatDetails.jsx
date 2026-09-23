import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./CatDetails.css";
import { isCatSaved, toggleSavedCat } from "../savedCats";

import {
  ArrowLeft,
  Heart,
  MoreHorizontal,
  MapPin,
  CalendarDays,
  ShieldCheck,
  Venus,
  MessageCircle,
  Users,
  Cat,
  Dog,
} from "lucide-react";

import { cats } from "./Explore";

function CatDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [saved, setSaved] = useState(() => isCatSaved(cats.id));
  const [activeImage, setActiveImage] = useState(0);

  // Find the cat that matches the ID in the URL
  const cat = cats.find((cat) => cat.id === Number(id));

  // If no cat exists with that ID
  if (!cat) {
    return (
      <main className="cat-page">
        <button
          className="icon-btn"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft size={22} />
        </button>

        <h2>Cat not found</h2>
        <p>This cat doesn't exist.</p>
      </main>
    );
  }

  const images = cat.images || [cat.images];

  const handleScroll = (e) => {
    const scrollLeft = e.target.scrollLeft;
    const width = e.target.clientWidth;

    setActiveImage(Math.round(scrollLeft / width));
  };

  return (
    <main className="cat-page">

      {/* Header */}
      <header className="cat-header">

        <button
          className="icon-btn"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft size={22} />
        </button>

        <div className="header-actions">

          <button
            className={`icon-btn ${saved ? "saved" : ""}`}
          onClick={() => {
  const newSavedState = toggleSavedCat(cat);
  setSaved(newSavedState);
}}
          >
            <Heart
              size={22}
              fill={saved ? "currentColor" : "none"}
            />
          </button>

          <button className="icon-btn">
            <MoreHorizontal size={22} />
          </button>

        </div>
      </header>

      {/* Image Gallery */}
      <section className="cat-gallery">

        <div
          className="gallery-track"
          onScroll={handleScroll}
        >
          {images.map((image, index) => (
            <div
              className="cat-image"
              key={index}
            >
              <img
                src={image}
                alt={`${cat.name} ${index + 1}`}
              />

              <span className="image-count">
                {index + 1} / {images.length}
              </span>
            </div>
          ))}
        </div>

        <div className="gallery-dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={
                activeImage === index
                  ? "active"
                  : ""
              }
            />
          ))}
        </div>

      </section>

      {/* Cat Information */}
      <section className="cat-infoo">

        <div className="cat-title-row">

          <div>
            <h1>
              {cat.name} <span>♀</span>
            </h1>

            <p className="cat-subtitle">
              {cat.ageLabel}
              <b> • </b>
              {cat.gender || "Female"}
              <b> • </b>
              {cat.type}
            </p>

            <div className="location">
              <MapPin size={18} />
              <span>{cat.location}</span>
            </div>
          </div>

          <button
            className={`save-cat ${
              saved ? "saved" : ""
            }`}
          onClick={() => {
  const newSavedState = toggleSavedCat(cat);
  setSaved(newSavedState);
}}
          >
            <Heart
              size={25}
              fill={saved ? "currentColor" : "none"}
            />

            <span>
              {saved ? "Saved" : "Save"}
            </span>
          </button>

        </div>

        {/* Personality */}
        <div className="tags">
          <div className="tags">
          <span>Playful</span>
          <span>Affectionate</span>
          <span>Curious</span>
          <span>Gentle</span>
        </div>
        </div>

        {/* Quick Details */}
        <section className="details-card">

          <div className="detail">
            <div className="detail-icon">
              <CalendarDays size={20} />
            </div>

            <div>
              <small>Age</small>
              <strong>{cat.ageLabel}</strong>
            </div>
          </div>

          <div className="detail">
            <div className="detail-icon">
              <ShieldCheck size={20} />
            </div>

            <div>
              <small>Health</small>
              <strong>Vaccinated</strong>
              <small>Dewormed</small>
            </div>
          </div>

          <div className="detail">
            <div className="detail-icon">
              <Venus size={20} />
            </div>

            <div>
              <small>Gender</small>
              <strong>
                {cat.gender || "Female"}
              </strong>
            </div>
          </div>

        </section>

        {/* About */}
        <section className="content-card">

          <h2>
            <span>🐾</span>
            About {cat.name}
          </h2>

          <p>
             
           {cat.name} is a sweet and curious little explorer who loves
            gentle attention, sunny windows, and chasing anything
            that moves. She is friendly once she gets comfortable
            and would make a lovely companion.
          
          </p>

        </section>

        {/* Good With */}
        <section className="content-card">

          <h2>
            <Users size={22} />
            Good with
          </h2>

          <div className="good-with">

           
            <div>
              <Users size={21} />
              <span>Adult</span>
            </div>

            <div>
              <Users size={21} />
              <span>Children</span>
            </div>

            <div>
              <Cat size={21} />
              <span>Other cats</span>
            </div>

            <div>
              <Dog size={21} />
              <span>Dogs unknown</span>
            </div>


          </div>

        </section>

        {/* Bottom Actions */}
        <div className="bottom-actions">

          <button className="ask-btn">
            <MessageCircle size={21} />
            Ask about {cat.name}
          </button>

          <button
            className="save-btn"
          onClick={() => {
  const newSavedState = toggleSavedCat(cat);
  setSaved(newSavedState);
}}
          >
            <Heart
              size={21}
              fill="currentColor"
            />

            {saved ? "Saved" : "Save"}
          </button>

        </div>

        <p className="notice">
          Adoption availability can change. We'll help you
          connect with the person or organization currently
          caring for {cat.name}.
        </p>

      </section>

    </main>
  );
}

export default CatDetails;