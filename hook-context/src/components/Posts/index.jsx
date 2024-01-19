import { useContext, useEffect, useRef } from "react"
import { PostsContext } from "../../contexts/PostsProvider/context"
import { CounterContext } from "../../contexts/CounterProvider/context"
import { loadPosts } from "../../contexts/PostsProvider/actions";
import { incrementCounter, decrementCounter } from "../../contexts/CounterProvider/actions";

export const Posts = (children) => {
    const isMounted = useRef(true);

    const postsContext = useContext(PostsContext)
    const { postsState, postsDispatch } = postsContext;

    const counterContext = useContext(CounterContext);
    const {counterState, counterDispatch} = counterContext;


    useEffect(()=> {
        loadPosts(postsDispatch).then((dispatch) => {
            if (isMounted.current) {
                dispatch();
            }
        })
        return () => {
            isMounted.current = false;
        }
    }, [postsDispatch])


    return (
        <div>
            <button onClick={() => decrementCounter(counterDispatch)}>Counter -{counterState.counter}</button>
            <button onClick={() => incrementCounter(counterDispatch)}>Counter +{counterState.counter}</button>
            <h1>POSTS</h1>
            {postsState.posts.map((p) => (<p key={p.id}>{ p.title }</p>))}
        </div>
    )
}