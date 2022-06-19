
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useContext, useState } from 'react';
import TodoConntext from '../../contexts/TodoConntext';



function valuetext(value) {
    return `${value}°C`;
}

export default function RangeSlider() {
    const {priceValue,filterSlider,val}=useContext(TodoConntext)
    // const [val, setVal] = useState([10,200]);
    // const min=priceValue[priceValue.length-1].price
    // const max= priceValue[0].price 
    // setVal(max)
    
    //   const [value, setValue] = useState(priceValue);
    console.log(priceValue);
    const [value, setValue] = useState(10,520);
    const handleChange = (event, newValue) => {
        setValue(newValue);
        filterSlider(priceValue)
    };

  return (
    <Box sx={{ width: 300 }}>
      <Slider
      max={val[1]}
      min={val[0]}
        // getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        // valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
    </Box>
  );
}