import { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from './components/Footer';
import { baseURL } from './utils/constants';

const App = () => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    axios
      .get('/api/get', { baseURL })
      .then((res) => {
        setMessages(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="bg-primary-blue font-roboto text-primary-cream grid min-h-screen grid-rows-[auto,1fr,auto] justify-items-center gap-10">
      <header className="m-4 text-3xl sm:text-7xl">Mini Message Board</header>

      <main className="grid h-full w-full grid-rows-[auto,1fr] items-center justify-items-center gap-10">
        <button className="bg-primary-cream text-primary-blue hover:bg-primary-blue hover:text-primary-cream rounded-md border px-4 py-3 font-bold transition duration-300">
          Add message
        </button>

        <div className="grid h-full w-full grid-cols-[repeat(auto-fit,minmax(25rem,1fr))] items-start gap-8">
          {messages?.map((message) => (
            <div key={message._id} className="grid grid-cols-[8rem,1fr] gap-8 pl-10">
              <div className="border-r-2"></div>
              <div>
                <p className="text-xl font-bold">{message.author}</p>
                <p className="text-md">{message.message}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
