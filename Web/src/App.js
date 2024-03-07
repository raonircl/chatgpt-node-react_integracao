import { useStates } from 'react';

import './styles/App.css';
import './styles/reset.css';

import { makeRequest } from './api/api.js';
import { SideMenu } from './components/SideMenu/SideMenu.js';
import { ChatMessage } from './components/ChatMessage/ChatMessage.js';

function App() {

  async function handleSubmit(e) {
    e.preventDefault();

    let response = await makeRequest({ prompt: input });

    response = response.data.split('\n')
      .map(line => <p>{line}</p>);

    setChatlog([...chatlog, {
      user: 'me',
      message: `${input}`
    },
    {
      user: 'gpt',
      message: response
    }
    ]);

    setInput();
  }

  const [input, setInput] = useStates('');
  const [chatlog, setChatlog] = useStates([{
    user: 'gpt',
    message: 'Como posso te ajudar?'
  }]);

  return (
    <div className="App">
      <SideMenu></SideMenu>

      <section className='chatbox'>
        <div className='chat-log'>
          {chatlog.map((message, index) => (
            <ChatMessage>
              key={index}
              message={message}
            </ChatMessage>
          ))}
        </div>

        <div className='chat-input-holder'>
          <form onSubmit={handleSubmit}>
            <input
              row='1'
              className='chat-input-textarea'
              value={input}
              onChange={e => setInput(e.target.value)}
            >
            </input>
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;
