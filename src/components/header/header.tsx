import Link from 'next/link';
import SearchBar from '@/components/filter/search-bar';

export default function Header() {
  return (
    <nav className="flex flex-col justify-between py-12 md:flex-row">
      <Link href="/" className="self-start md:self-auto">
        <h1 className="text-5xl font-cursive">
          Sincerely, Sharon
          <img className="ml-4 mb-4 h-[.85em] inline" src="heart.png"></img>
        </h1>
      </Link>
      <div className="my-6 flex space-x-8 self-center md:my-0 md:self-auto">
        <SearchBar />
      </div>
    </nav>
  );
}
