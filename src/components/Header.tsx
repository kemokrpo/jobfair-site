import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold">JobFair Mostar</h1>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">Main</Link>
          </li>
          <li>
            <Link href="/agenda">Agenda</Link>
          </li>
          <li>
            <Link href="/partners">Partners</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
