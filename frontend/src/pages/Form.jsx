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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await apiInstance.post(
        '/api/save',
        {
          author,
          message,
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

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Form;
