import dynamic from 'next/dynamic';

const PokemonPage = dynamic(() => import('@/modules/pokemon/page/page'), { ssr: false });

const Page = () => {
  return <PokemonPage />;
};

export default Page;
