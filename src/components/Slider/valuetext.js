import { useContext } from 'react';

// import TodoConntext from '../../contexts/TodoConntext';
export function valuetext(value) {
    const { value, handleChange, leastExpensiveObj, mostEXpensiveObj } = useContext(TodoConntext);
    return `${value}°C`;
}
