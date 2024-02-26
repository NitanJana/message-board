import { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from '../components/Footer';
import { backendURI } from '../utils/constants';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import BarLoader from 'react-spinners/BarLoader';

const apiInstance = axios.create({
  baseURL: backendURI,
});

const App = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        setTimeout(async () => {
          const response = await apiInstance.get('/api/get');
          setMessages(response.data);
          setLoading(false);
        }, 2000);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="grid min-h-screen grid-rows-[auto,1fr,auto] justify-items-center gap-10 bg-primary-blue font-roboto text-primary-cream">
      <header className="m-4 text-3xl sm:text-7xl">Mini Message Board</header>

      <main className="grid h-full w-full grid-rows-[auto,1fr] items-center justify-items-center gap-10">
        <Link to={'/add'}>
          <Button>Add message</Button>
        </Link>

        <div
          className={`grid h-full w-full grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] ${loading ? 'place-items-center' : 'items-start'} gap-8 p-8`}
        >
          {loading ? (
            <BarLoader color="#FBEAEB" />
          ) : (
            messages?.map((message) => (
              <div key={message._id} className=" ml-10 flex flex-col gap-2 border-l-2 p-8 pt-0 sm:ml-20">
                <div className="gap-1">
                  <p className="text-xl font-bold">{message.author}</p>
                  <p className="text-xs ">({message.sendDate})</p>
                </div>
                <p className="text-md">{message.message}</p>
              </div>
            ))
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
