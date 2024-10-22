const { useState } = React;

function MyApp() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
      <div>
          <h1>Лічільники, які оновлюються окремо</h1>
          <MyButton count={count} onClick={handleClick}/>
          <MyButton count={count} onClick={handleClick}/>
      </div>
    );
}

function MyButton({count, onClick}) {
    return (
        <button onClick={onClick}>
            Натиснуто {count} разів
        </button>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<MyApp />);