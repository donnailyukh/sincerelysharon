import Link from 'next/link';
import SearchBar from '@/components/filter/search-bar';

export default function Header(props) {
  return (
    <nav className="flex flex-col justify-between pt-12 pb-6 md:flex-row border-b-[2px]">
      <Link href="/" className="self-center md:self-auto">
        <h1 className="md:text-5xl sm:text-4xl text-3xl font-cursive">
          Sincerely, Sharon
          <img className="ml-4 mb-4 h-[.85em] inline" src="heart.png"></img>
        </h1>
      </Link>
      {props.showSearch && 
        <div className="flex space-x-8 self-center md:my-0 md:self-auto">
          <SearchBar />
        </div>
      }
    </nav>
  );
}
