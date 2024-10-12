import dynamic from 'next/dynamic';

const StaticReactApp = dynamic(() => import('../App'), {
  ssr: false,
});

export default function App() {
  if (typeof window === 'undefined') {
    return null;
  }

  return <StaticReactApp />;
}
