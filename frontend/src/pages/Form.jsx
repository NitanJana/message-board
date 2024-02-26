import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import InputGroup from '../components/InputGroup';
import axios from 'axios';
import { backendURI } from '../utils/constants';

const apiInstance = axios.create({
  baseURL: backendURI,
});

const Form = () => {
  const navigate = useNavigate();

  const [author, setAuthor] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dateFormat = (date) =>
    new Date(date).toLocaleDateString('en-us', {
      weekday: 'long',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);
      const response = await apiInstance.post(
        '/api/save',
        {
          author,
          message,
          sendDate: dateFormat(new Date()),
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      if (response.status === 201) {
        console.log('Message saved successfully');
        navigate('/');
      } else {
        console.error('Failed to save message');
      }
    } catch (error) {
      console.error('Error saving message:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="grid h-screen place-items-center bg-primary-blue">
      <form onSubmit={handleSubmit} className="grid justify-items-center gap-6">
        <InputGroup
          labelText={'Author'}
          name={'messageAuthor'}
          id={'author'}
          placeholder={'Your name'}
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <InputGroup
          labelText={'Message'}
          name={'messageText'}
          id={'message'}
          placeholder={'Your message'}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <Button type="submit">
          {isSubmitting ? (
            <div className="group flex gap-2">
              Submitting{' '}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
                className="animate-spin fill-primary-blue group-hover:fill-primary-cream"
              >
                <path d="M204-318q-22-38-33-78t-11-82q0-134 93-228t227-94h7l-64-64 56-56 160 160-160 160-56-56 64-64h-7q-100 0-170 70.5T240-478q0 26 6 51t18 49l-60 60ZM481-40 321-200l160-160 56 56-64 64h7q100 0 170-70.5T720-482q0-26-6-51t-18-49l60-60q22 38 33 78t11 82q0 134-93 228t-227 94h-7l64 64-56 56Z" />
              </svg>
            </div>
          ) : (
            'Submit'
          )}
        </Button>
      </form>
    </div>
  );
};

export default Form;
