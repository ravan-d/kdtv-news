
import { Phone, Mail, Search, Menu } from "lucide-react";

const categories = [
  "Politics",
  "Sports",
  "Technology",
  "Entertainment",
  "Business",
  "Health",
  "World",
  "Education",
];

const newsData = [
  {
    id: 1,
    title: "India Launches New Digital Innovation Program",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    desc: "Government introduces new AI and startup support initiatives for young entrepreneurs."
  },
  {
    id: 2,
    title: "Cricket Championship Draws Record Audience",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=1200&auto=format&fit=crop",
    desc: "Fans across the world tune in as the final match becomes the most watched sporting event."
  },
  {
    id: 3,
    title: "Global Markets Show Strong Recovery",
    category: "Business",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
    desc: "Experts predict stable economic growth after major gains in international markets."
  },
  {
    id: 4,
    title: "New Movie Breaks Box Office Records",
    category: "Entertainment",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200&auto=format&fit=crop",
    desc: "The latest blockbuster becomes one of the highest earning films of the year."
  },
  {
    id: 5,
    title: "Health Experts Share Summer Wellness Tips",
    category: "Health",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1200&auto=format&fit=crop",
    desc: "Doctors advise hydration and healthy food habits during the extreme heat season."
  },
  {
    id: 6,
    title: "International Leaders Meet for Climate Summit",
    category: "World",
    image: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&w=1200&auto=format&fit=crop",
    desc: "World leaders discuss renewable energy goals and climate change strategies."
  }
];

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <div className="container topbar-flex">
          <p>Breaking News: KDTV brings you the fastest live updates worldwide.</p>
          <div className="contact">
            <span><Phone size={16}/> 7887237876</span>
            <span><Mail size={16}/> info@kdtv.in</span>
          </div>
        </div>
      </header>

      <nav className="navbar">
        <div className="container nav-flex">
          <div className="logo-box">
            <img src="https://dummyimage.com/80x80/ff0000/ffffff.png&text=KDTV" alt="KDTV Logo"/>
            <div>
              <h1>KDTV</h1>
              <p>Truth Beyond Headlines</p>
            </div>
          </div>

          <ul className="nav-links">
            {categories.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <div className="nav-icons">
            <Search />
            <Menu />
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="overlay">
          <div className="container hero-content">
            <span className="live-tag">LIVE NEWS</span>
            <h2>India's Trusted Digital News Channel</h2>
            <p>
              Stay updated with breaking stories, politics, sports, business,
              technology and entertainment news from across the world.
            </p>
            <button>Watch Latest News</button>
          </div>
        </div>
      </section>

      <section className="latest-news container">
        <div className="section-title">
          <h2>Latest Headlines</h2>
          <p>Top trending stories updated every minute</p>
        </div>

        <div className="news-grid">
          {newsData.map((news) => (
            <div className="news-card" key={news.id}>
              <img src={news.image} alt={news.title} />
              <div className="news-content">
                <span>{news.category}</span>
                <h3>{news.title}</h3>
                <p>{news.desc}</p>
                <button>Read More</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="newsletter">
        <div className="container newsletter-box">
          <div>
            <h2>Subscribe For Breaking News</h2>
            <p>Get instant updates directly in your inbox.</p>
          </div>

          <div className="subscribe">
            <input type="email" placeholder="Enter your email"/>
            <button>Subscribe</button>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <h2>KDTV</h2>
            <p>
              KDTV is a modern digital news platform delivering trusted and
              real-time updates from India and around the globe.
            </p>
          </div>

          <div>
            <h3>Categories</h3>
            <ul>
              {categories.map((cat, index) => (
                <li key={index}>{cat}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Contact</h3>
            <p>Email: info@kdtv.in</p>
            <p>Phone: 7887237876</p>
            <p>24/7 Live News Support</p>
          </div>
        </div>

        <div className="copyright">
          © 2026 KDTV News Channel. All Rights Reserved.
        </div>
      </footer>
    </main>
  );
}
