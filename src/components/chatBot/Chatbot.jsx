import bot from '../../assets/chat.png'
import './Chatbot.scss'

export const Chatbot = () => {
  return (
    <div className='bot'>
      <button className= 'btn-bot'>
        <img src={bot} alt="botImage" className='bot-img' />
      </button>
    </div>
  )
}
