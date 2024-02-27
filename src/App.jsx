import Header from './Header.jsx'
import Card from './Card.jsx'
import Title from './Title.jsx'

function App() {
  const pirates = [
    {
      id: 1,
      image: "src/assets/luffy.jpg",
      name: "Luffy",
      age: 22,
      pirate: true,
    },
    {
      id: 2,
      image: "src/assets/zoro.jpg",
      name: "Zoro",
      age: 23,
      pirate: true,
    },
    {
      id: 3,
      image: "src/assets/nami.png",
      name: "Nami",
      age: 23,
      pirate: true,
    },
    {
      id: 4,
      image: "src/assets/sanji.png",
      name: "Sanji",
      age: 23,
      pirate: true,
    },
    {
      id: 5,
      image: "src/assets/chopper.png",
      name: "Chopper",
      age: 20,
      pirate: true,
    },
    {
      id: 6,
      image: "src/assets/vivi.png",
      name: "Vivi",
      age: 23,
      pirate: false,
    },
    {
      id: 7,
      image: "src/assets/robin.png",
      name: "Robin",
      age: 25,
      pirate: true,
    },
    {
      id: 8,
      image: "src/assets/ussopp.jpg",
      name: "Usopp",
      age: 23,
      pirate: true,
    },
    {
      id: 9,
      image: "src/assets/brook.jpg",
      name: "Brook",
      age: "???",
      pirate: true,
    },
    {
      id: 10,
      image: "src/assets/franky.png",
      name: "Franky",
      age: 23,
      pirate: true,
    },
    {
      id: 11,
      image: "src/assets/jinbe.png",
      name: "Jinbe",
      age: 45,
      pirate: true,
    },
    {
      id: 12,
      image: "src/assets/bartolomeo.jpg",
      name: "Bartolomeo",
      age: 23,
      pirate: true,
    },
  ];

  return (
    <>
      <div className="wrapper">
        <Header />
        <Title />
        <div className="container">
          {pirates.map((pirate, index) => (
            <Card key={pirate.id} pirate={pirate} />))
          }
        </div>
      </div>
    </>
  );

}

export default App
