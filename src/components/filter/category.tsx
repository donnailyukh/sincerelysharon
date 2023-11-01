'use client';

import { useRecoilState, useSetRecoilState } from 'recoil';

import { categoriesState } from '@/states/categories';
import { pageState } from '@/states/page';
import { isTouchDevice } from '@/utils/is-touch-device';

export default function Category({ category }: { category: string }) {
  const [categories, setCategories] = useRecoilState(categoriesState);
  const setPage = useSetRecoilState(pageState);
  const checked = categories.selected.includes(category);
  const active = categories.active.includes(category);

  const handleCategoryClick = (category: string) => () => {
    setCategories((prevCategories) => {
      if (prevCategories.selected.includes(category)) {
        return {
          ...prevCategories,
          selected: prevCategories.selected.filter(
            (value) => value !== category
          ),
        };
      } else {
        return {
          ...prevCategories, ...prevCategories.selected,
          selected: [category],
        };
      }
    });

    setPage(1);
  };

  return (
    <button
      onClick={handleCategoryClick(category)}
      className={`my-2 mr-4 cursor-pointer rounded-md px-4 py-1 ring-pink-500 transition-all duration-300 hover:ring-offset-4 ${
        checked ? 'bg-black text-white ring-[3px] ring-offset-4' : 'bg-secondary'
      } ${!active && 'opacity-25'} ${
        active && !isTouchDevice() && 'hover:ring-[3px]'
      }`}
    >
      {category}
    </button>
  );
}
