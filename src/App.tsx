import Navbar from "./component/Navbar";
import About from "./component/About";


export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0618] text-white">
      <Navbar />
      <main className="pt-[86px]">
        <About />
      </main>
    </div>
  );
}
