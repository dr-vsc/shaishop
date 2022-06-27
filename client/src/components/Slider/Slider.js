
import Slider from '@mui/material/Slider';
import { useContext } from 'react';
import TodoConntext from '../../contexts/TodoConntext';


const RangeSlider = () => {
  const { priceValue, saliderPriceFilter, val, setVal } = useContext(TodoConntext)

  const handleChange = (newValue) => {
    setVal(newValue);
    // filterSlider(priceValue)
  };
  return (
    <Slider
      value={val}
      max={priceValue[1]}
      min={priceValue[0]}
      onChange={(e, value) => {
        saliderPriceFilter(value);
        handleChange(value);
      }}
      valueLabelDisplay="auto" />
  );
}

export default RangeSlider;