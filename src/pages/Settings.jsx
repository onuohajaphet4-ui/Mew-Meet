import { useEffect, useState } from "react";
import { ArrowLeft, Bell, Moon, PawPrint, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./Settings.css";

function Settings() {
  const navigate = useNavigate();

  const [notifications, setNotifications] = useState(() => {
    return localStorage.getItem("notifications") !== "false";
  });

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    localStorage.setItem("notifications", notifications);
  }, [notifications]);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);

    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  const clearSavedCats = () => {
    const confirmed = window.confirm(
      "Are you sure you want to remove all your saved cats?"
    );

    if (!confirmed) return;

    localStorage.removeItem("savedCats");
    window.dispatchEvent(new Event("savedCatsUpdated"));
  };

  return (
    <main className="settings-page">

      <header className="settings-header">
        <button
          className="back-btn"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft size={20} />
        </button>

        <div>
          <span className="settings-kicker">
            MAKE IT YOURS
          </span>

          <h1>Preferences</h1>
        </div>

        <div className="settings-paw">
          <PawPrint size={23} />
        </div>
      </header>

      <section className="settings-section">

        <h2>App preferences</h2>

        {/* Notifications */}
        <div className="setting-item">
          <div className="setting-icon">
            <Bell size={20} />
          </div>

          <div className="setting-info">
            <strong>Notifications</strong>
            <span>
              Get reminders and updates from the app
            </span>
          </div>

          <button
            className={`toggle ${notifications ? "active" : ""}`}
            onClick={() => setNotifications(!notifications)}
            aria-label="Toggle notifications"
          >
            <span />
          </button>
        </div>

        {/* Dark mode */}
        <div className="setting-item">
          <div className="setting-icon">
            <Moon size={20} />
          </div>

          <div className="setting-info">
            <strong>Dark mode</strong>
            <span>
              Give the app a darker appearance
            </span>
          </div>

          <button
            className={`toggle ${darkMode ? "active" : ""}`}
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle dark mode"
          >
            <span />
          </button>
        </div>

      </section>

      <section className="settings-section danger-section">

        <h2>Saved data</h2>

        <button
          className="clear-saved-btn"
          onClick={clearSavedCats}
        >
          <Trash2 size={19} />

          <div>
            <strong>Clear saved cats</strong>
            <span>
              Remove all cats from your saved collection
            </span>
          </div>
        </button>

      </section>

      <p className="settings-footer">
        Your preferences are stored on this device.
      </p>

    </main>
  );
}

export default Settings;