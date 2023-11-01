'use client';

import { ChangeEvent } from 'react';

import { BsSearch } from 'react-icons/bs';
import { IoMdClose } from 'react-icons/io';
import { useRecoilState } from 'recoil';

import useFocus from '@/hooks/use-focus';
import useHover from '@/hooks/use-hover';
import { queryState } from '@/states/query';

export default function SearchBar() {
  const [query, setQuery] = useRecoilState(queryState);
  const { ref: hoverRef, isHovering } = useHover<HTMLDivElement>();
  const { ref: focusRef, isFocusing } = useFocus<HTMLInputElement>();

  const handleInputClear = () => {
    setQuery('');
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div
      ref={hoverRef}
      className="relative mx-auto w-full max-w-[24rem] md:mx-0"
    >
      <BsSearch className="absolute left-5 flex h-full items-center text-xl text-gray-400" />
      {query && (isHovering || isFocusing) && (
        <IoMdClose
          onClick={handleInputClear}
          className="absolute right-6 flex h-full items-center text-xl"
        />
      )}
      <input
        ref={focusRef}
        type="text"
        placeholder="Search posts"
        onChange={handleInputChange}
        value={query}
        className={`w-full mt-3 mb-3 rounded-md border-[2px] border-white py-2 pl-14 pr-4 hover:border-pink-500 focus:border-pink-500 focus:outline-none ${
          isHovering && 'border-pink-500'
        }`}
      />
    </div>
  );
}
