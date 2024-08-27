import dynamic from 'next/dynamic';

const FavoritePage = dynamic(() => import('@/modules/favorites/page/page'), { ssr: false });

const Page = () => {
  return <FavoritePage />;
};

export default Page;
