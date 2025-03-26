import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { FiCopy } from 'react-icons/fi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    background-color: #282c34;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #20232a;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  color: white;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  margin: 0.5rem;
  width: 300px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  background-color: #61dafb;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #21a1f1;
  }
`;

const ShortenedURLContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
`;

const ShortenedURL = styled.a`
  margin-right: 0.5rem;
  color: #61dafb;
  text-decoration: none;
  font-size: 1.2rem;
`;

const CopyIcon = styled(FiCopy)`
  cursor: pointer;
  color: #61dafb;
  &:hover {
    color: #21a1f1;
  }
`;

const Loader = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

function App() {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setShortUrl('');

    try {
      const response = await fetch('https://url-shortener-service.p.rapidapi.com/shorten', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'x-rapidapi-host': 'url-shortener-service.p.rapidapi.com',
          'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY,
        },
        body: new URLSearchParams({
          url,
        }),
      });

      if (!response.ok) {
        throw new Error('Something went wrong, please try again later');
      }

      const data = await response.json();
      setShortUrl(data.result_url);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortUrl);
    toast.success('Copied to clipboard!');
  };

  return (
    <>
      <GlobalStyle />
      <ToastContainer />
      <AppContainer>
        <Title>Link Shortener</Title>
        <Form onSubmit={handleSubmit}>
          <Input 
            type="url" 
            value={url} 
            onChange={(e) => setUrl(e.target.value)} 
            placeholder="Enter URL" 
            required 
          />
          <Button type="submit" disabled={loading}>
            {loading ? <Loader /> : 'Shorten'}
          </Button>
        </Form>
        {shortUrl && (
          <ShortenedURLContainer>
            <ShortenedURL href={shortUrl} target="_blank" rel="noopener noreferrer">
              {shortUrl}
            </ShortenedURL>
            <CopyIcon size={24} onClick={copyToClipboard} />
          </ShortenedURLContainer>
        )}
      </AppContainer>
    </>
  );
}

export default App;