import { messages } from '../../data'
import Message from './message'
import { BsFillPlusCircleFill, BsFillGiftFill, BsFillFileEarmarkSpreadsheetFill, BsFillEmojiLaughingFill } from 'react-icons/bs'

export default function ChatBox({ channel_id }:{ channel_id : string }) {
  return (
    <div className='flex flex-col flex-grow'>
        <div className='flex-grow'>
            {messages.map(message => <>{ channel_id === message.channel_id && <Message msg={message} />}</>)}
        </div>
        <Input />
    </div>
  )
}

function Input() {
  return (
    <div className='bg-gray-500 w-11/12 rounded-md flex justify-evenly mb-6 mx-auto'>
      <BsFillPlusCircleFill size={26} className="text-gray-300 hover:white hover:cursor-pointer my-4" />
      <textarea 
      onInput={(e) => {
        e.currentTarget.style.height='auto'; 
        const sh = e.currentTarget.scrollHeight;
        if(sh > 360) {
          e.currentTarget.style.height='360px';
        } else {
          e.currentTarget.style.height=sh + 'px';
        }
      }}
      className="resize-none w-10/12 border-none outline-none bg-gray-500 text-gray-300 text-base h-6" 
      placeholder='Message' />
      <BsFillGiftFill size={26} className="text-gray-300 hover:white hover:cursor-pointer my-4" />
      <BsFillFileEarmarkSpreadsheetFill size={26} className="text-gray-300 hover:white hover:cursor-pointer my-4" />
      <BsFillEmojiLaughingFill size={26} className="text-gray-300 hover:white hover:cursor-pointer my-4" />
    </div>
  )
}