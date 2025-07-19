import { notFound } from 'next/navigation';
import citiesData from '@/data/cities.json';
import { City } from '@/types';
import CityDetail from '@/components/cities/CityDetail';

interface CityPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function CityPage({ params }: CityPageProps) {
  const { id } = await params;
  const cityId = parseInt(id);
  const city = citiesData.find((c: City) => c.id === cityId);

  if (!city) {
    notFound();
  }

  return <CityDetail city={city} />;
}

export async function generateStaticParams() {
  return citiesData.map((city: City) => ({
    id: city.id.toString(),
  }));
}

export async function generateMetadata({ params }: CityPageProps) {
  const { id } = await params;
  const cityId = parseInt(id);
  const city = citiesData.find((c: City) => c.id === cityId);

  if (!city) {
    return {
      title: 'City Not Found',
    };
  }

  return {
    title: `${city.name} - ${city.tagline} | K-NOMAD HUB`,
    description: city.description || `${city.name}에서의 디지털 노마드 라이프를 경험해보세요.`,
  };
}