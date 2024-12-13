import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Route from "@/components/Route";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Route />
      <div className="h-[100vh]"></div>
      <Footer />
    </div>
  );
}
