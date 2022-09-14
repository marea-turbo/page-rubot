import './styles/input.css'
import './styles/font.css'

interface ButtonProps {
  title: string;
}

function Button(props: ButtonProps) {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold text-4xl py-10 px-20 rounded my-40">
      <a href="https://t.me/RUHBOT_BOT">
        {props.title}
      </a>
    </button>
  )
}

function App() {

  return (
    <div className="max-w-7xl mx-auto flex flex-col items-center my-40">
      <h1 className="text-center text-6xl font-extrabold text-white text-shadow">Marea-Turbo Hackerclub</h1>
      <Button title="Chamar RUbot para Telegram"></Button>
    </div>
  )
}

export default App
