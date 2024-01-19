import { Posts } from '../../components/Posts';
import { CounterProvider } from '../../contexts/CounterProvider/examples';
import { PostsProvider } from '../../contexts/PostsProvider/posts';
import './App.css';

// eslint-disable-next-line


function App() {

    return (
        <CounterProvider>
            <PostsProvider>
                <div>
                    <h1> Hello World! </h1>
                    <Posts />
                </div>
            </PostsProvider>
        </CounterProvider>
    );
}

export default App;