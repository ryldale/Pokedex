import dynamic from 'next/dynamic';

const ItemPage = dynamic(() => import('@/modules/items/page/page'), { ssr: false });

const Page = () => {
  return <ItemPage />;
};

export default Page;
