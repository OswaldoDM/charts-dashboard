import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import RightColumn from "./components/RightColumn/RightColumn";
import LeftColumn from "./components/LeftColumn/LeftColumn";

function App() {
  return (
    <main className="flex">
      <Sidebar />
      <div className="flex flex-col flex-1 relative">
        <Navbar />
        <div className="grid grid-cols-1 md:grid-cols-3 w-full">
          <div className="col-span-2">
            <LeftColumn />
          </div>
          <div className="w-full">
            <RightColumn />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
