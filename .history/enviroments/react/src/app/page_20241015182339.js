import styles from "./page.module.css";
import "./styles.css";

export default function Home() {
  return (
    <div>
      <Header />
      <Nav />
      <MainContent />
      <Footer />
    </div>
  );
}
``;

function Header() {
  return (
    <header>
      <h1>Welcome to My Wbsite</h1>
    </header>
  );
}

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

function MainContent() {
  return (
    <main>
      <h2>Main Content Section</h2>
      <p>This is where the main content of the webpage goes.</p>
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <p>&copy; 2024 My Website. All rights reserved.</p>
    </footer>
  );
}
