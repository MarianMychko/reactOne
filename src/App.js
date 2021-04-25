import logo from './logo.svg';
import './App.css';
import Post from './components/Post'
import './Post.css'
import './style.css'

const ANAKIN_IMAGE = 'https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg'
const RAY_IMAGE = 'https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale'
const dart_vader = 'https://lumiere-a.akamaihd.net/v1/images/wnd3050_311c5732.png?region=37%2C74%2C602%2C602'
const war = 'https://wallpapercave.com/wp/wp5876463.jpg'


const authors = [
  {
    name: "Anakin skywalker",
    nickname: "@Dart_vader",
      pic: ANAKIN_IMAGE,
      text: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
      photo: RAY_IMAGE
  
  },
  {
    name: "Dart Vader",
    nickname: "@Dart_vader",
    text:`Luke, I am your father. `,
    pic: dart_vader,
    photo: war
  }
]

function App() {
    return ( 
    <div className="container">
  
  {authors.map(author=> <Post {...author}/>)}
    </div>

    );
}

export default App;