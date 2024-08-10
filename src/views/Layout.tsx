import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col h-screen">
        <main className="flex-grow overflow-auto">
      <Outlet/>
        </main>
      <nav className="bg-gray-200 p-4 mt-auto">
        <ul className="flex justify-center space-x-4">
          <li><Link to="/" className="text-blue-500 hover:text-blue-700">LifeTotal</Link></li>
          <li><Link to="/coinflip" className="text-blue-500 hover:text-blue-700">CoinFlip</Link></li>
          <li><Link to="/counters" className="text-blue-500 hover:text-blue-700">Counters</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Layout;