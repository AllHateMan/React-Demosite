import atomImg from "./assets/react-core-concepts.png";
import componentsImg from "./assets/components.png";
const ReactDescription = ["Fundamental", "Core", "Crucial"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function CoreConcepts(props) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

function Header() {
  const description = ReactDescription[genRandomInt(2)]
  return (
    <header>
      <img src={atomImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for
        almost any app you are going to build!
      </p>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
        <h2>Time to get started!</h2>
        <ul>
          <CoreConcepts 
            title='Components'
            description='The core UI building block'
            image={componentsImg}/>
          <CoreConcepts />
          <CoreConcepts />
        </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
