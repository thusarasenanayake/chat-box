import { useState } from 'react'
import Me from './Me'
import ChatBot from './ChatBot'
import { Fragment } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'

const sampleConversations = [
  {
    "question": "Hi, Good morning",
    "answer": "Hi Anna, Good morning! ",
  },
  {
    "question": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita minus voluptatum nesciunt reprehenderit quo, aliquam inventore tempore eveniet culpa deleniti tempora explicabo repellat. Sit nobis laudantium id dolore dolores. Eligendi.",
    "answer": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus recusandae expedita sint.",
  },

]

function App() {

  const [loading, setLoading] = useState(true)
  const [conversations, setConversations] = useState(sampleConversations)
  const chatBottomRef = useRef(null)

  function addQuestion(eve) {
    eve.preventDefault()

    const data = new FormData(eve.target)
    setConversations(messages => [...messages, { question: data.get('question') }])

    eve.target.reset()

  }

  function scrollToBottomOfChat() {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' })

  }

  useEffect(function () {
    const timeOut = setTimeout(function () {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timeOut)
  }, [])

  useEffect(function () {
    scrollToBottomOfChat()
  }, [conversations.length])

  if (loading) {
    return (
      <span className="relative flex h-6 w-6">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-6 w-6 bg-violet-500"></span>
      </span>
    )
  }

  return (
    <div className="h-[500px] flex flex-col flex-grow w-full max-w-xl bg-white shadow-xl rounded-lg overflow-hidden">
      <div className="flex flex-col flex-grow h-0 p-4 pb-0 overflow-y-scroll scrollbar-thumb-gray-500 scrollbar-thin scrollbar-track-gray-200">


        {conversations.map((conversations, index) => (
          <Fragment key={index}>
            {conversations.question && <Me content={conversations.question} />}
            {conversations.answer && <ChatBot content={conversations.answer} />}
          </Fragment>
        ))}
        <div className='mb-3' ref={chatBottomRef} ></div>
      </div>

      <div className="bg-gray-300 p-4">

        <form onSubmit={addQuestion}>
          <input
            className="flex items-center h-10 w-full rounded px-3 text-sm"
            type="text"
            name='question'
            placeholder="Type your message…"
          />
        </form>


      </div>
    </div>

  )
}

export default App
