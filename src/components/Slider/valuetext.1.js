import { useContext } from 'react';
import TodoConntext from '../../contexts/TodoConntext';

export function valuetext(price) {
    const [price] = useContext(TodoConntext);
    return `${value}°C`;
}
