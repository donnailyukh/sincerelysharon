'use client';

import { useRecoilState } from 'recoil';

import Category from '@/components/filter/category';
import { categoriesState } from '@/states/categories';

export default function CategoryFilter({
  allCategories,
}: {
  allCategories: string[];
}) {
  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex min-h-[56px] shrink justify-center gap-y-[0.3rem]">
        {allCategories.map((category) => (
          <Category key={category} category={category} />
        ))}
      </div>
    </div>
  );
}
