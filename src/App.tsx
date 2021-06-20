import { useEffect, useState } from 'react';
import { getARandomJoke, getRefetch } from './services/jokeApi';

type ApiType = {
  categories: [];
  created_at: Date;
  id: string;
  updated_at: Date;
  value: string;
};

function App() {
  const [joke, setJoke] = useState<ApiType>();
  const [loading, setLoading] = useState(false);

  const getARandom = async () => {
    setLoading(true);
    const data = await getARandomJoke();
    setLoading(false);
    return data;
  };

  const handleRefresh = async () => {
    const joke = await getRefetch();
    setJoke(joke);
  };

  useEffect(() => {
    getARandom().then((response) => setJoke(response));
  }, []);

  if (loading) {
    return <div>Loading!!!</div>;
  }

  return (
    <div className="w-full h-full font-customFont bg-main text-customBlackFontColor">
      <span data-testid="new-joke">{joke?.value}</span>
      <br />
      <button data-testid="joke-button" onClick={handleRefresh}>
        Fetch new joke
      </button>
    </div>
  );
}

export default App;
