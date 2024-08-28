import dynamic from 'next/dynamic';

const PokemonViewPage = dynamic(() => import('@/modules/pokemon/page/view-page'), { ssr: false });

const Page = () => {
  return <PokemonViewPage />;
};

export default Page;
