import { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from '../components/Footer';
import { backendURI } from '../utils/constants';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const apiInstance = axios.create({
  baseURL: backendURI,
});

const App = () => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiInstance.get('/api/get');
        setMessages(response.data);
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

        <div className="grid h-full w-full grid-cols-[repeat(auto-fit,minmax(10rem,1fr))] items-start gap-8 p-8 sm:grid-cols-[repeat(auto-fit,minmax(20rem,1fr))]">
          {messages?.map((message) => (
            <div key={message._id} className=" ml-10 flex flex-col border-l-2 p-8 pt-0 sm:ml-20">
              <p className="text-xl font-bold">{message.author}</p>
              <p className="text-md">{message.message}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
