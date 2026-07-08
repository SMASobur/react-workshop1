import { CardSection } from "./components/CardSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <CardSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
