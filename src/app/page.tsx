import CategoryFilter from '@/components/filter/category-filter';
import PostsGrid from '@/components/posts/posts-grid';
import { getAllPostsFromNotion } from '@/services/posts';
import { toUniqueArray } from '@/utils/to-unique-array';

export const metadata = {
  title: 'Sincerely, Sharon',
  description: 'All posts are written by Sharon Zavlin.',
};

export default async function BlogPage() {
  const allPosts = await getAllPostsFromNotion();

  const allCategories = toUniqueArray(
    allPosts
      .filter((post) => post.published)
      .map((post) => post.categories)
      .flat()
  ).sort();

  return (
    <>
      <section className="mb-10 mt-0 space-y-8 md:mt-5">
        <CategoryFilter allCategories={allCategories} />
      </section>
      <PostsGrid allPosts={allPosts} />
    </>
  );
}

