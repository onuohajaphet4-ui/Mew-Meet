import { useEffect, useState } from "react";
import {
  Heart,
  PawPrint,
  BookOpen,
  Settings,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./Profile.css";

function MyPawprints() {
  const [savedCount, setSavedCount] = useState(0);
  const [visitedCount, setVisitedCount] = useState(0);

  useEffect(() => {
    const saved = JSON.parse(
      localStorage.getItem("savedCats") || "[]"
    );

    const visited = JSON.parse(
      localStorage.getItem("visitedCats") || "[]"
    );

    setSavedCount(saved.length);
    setVisitedCount(visited.length);
  }, []);

  return (
    <main className="pawprints-page">

      {/* Header */}
      <section className="pawprints-header">
        <div className="pawprints-title">
          <span className="pawprints-kicker">
            YOUR LITTLE CORNER
          </span>

          <h1>
            My Pawprints <span>🐾</span>
          </h1>

          <p>
            A tiny collection of your adventures
            through the cat world.
          </p>
        </div>

        <div className="paw-decoration">
          🐾
        </div>
      </section>

      {/* Stats */}
      <section className="paw-stats">

        <div className="paw-stat">
          <div className="paw-stat-icon heart-icon">
            <Heart size={20} fill="currentColor" />
          </div>

          <div>
            <strong>{savedCount}</strong>
            <span>Saved cats</span>
          </div>
        </div>

        <div className="paw-stat">
          <div className="paw-stat-icon">
            <PawPrint size={21} />
          </div>

          <div>
            <strong>{visitedCount}</strong>
            <span>Cats explored</span>
          </div>
        </div>

      </section>

      {/* Navigation cards */}
      <section className="paw-menu">

        <Link to="/saved" className="paw-menu-item">
          <div className="menu-icon">
            <Heart size={21} />
          </div>

          <div className="menu-text">
            <strong>My saved cats</strong>
            <span>The ones that stole your heart</span>
          </div>

          <ChevronRight size={19} />
        </Link>

        <Link to="/facts" className="paw-menu-item">
          <div className="menu-icon">
            <BookOpen size={21} />
          </div>

          <div className="menu-text">
            <strong>Cat facts</strong>
            <span>Things you probably didn't know</span>
          </div>

          <ChevronRight size={19} />
        </Link>

        <Link to="/settings" className="paw-menu-item">
          <div className="menu-icon">
            <Settings size={21} />
          </div>

          <div className="menu-text">
            <strong>Preferences</strong>
            <span>Make the app feel like yours</span>
          </div>

          <ChevronRight size={19} />
        </Link>

      </section>

      {/* Little message */}
      <section className="paw-note">
        <Sparkles size={20} />

        <div>
          <strong>A little reminder</strong>

          <p>
            Every cat has a personality of its own.
            Take your time getting to know them. 🐱
          </p>
        </div>
      </section>

      <p className="paw-footer">
        Made with love & tiny pawprints.
      </p>

    </main>
  );
}

export default MyPawprints;