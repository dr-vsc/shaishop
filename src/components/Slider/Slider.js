// /* eslint-disable react-hooks/rules-of-hooks */

// // import { PriceChange } from '@mui/icons-material';
// import Box from '@mui/material/Box';
// import Slider from '@mui/material/Slider';
// import { useState } from 'react';
// // import TodoConntext from '../../contexts/TodoConntext';

// function valuetext(value) {
  

//   return `${value}°C`;
// }

// export default function RangeSlider() {
//   // const[filterSlider,originalproducts]=useContext(TodoConntext)
//   // let [leastExpensiveObj,mostEXpensiveObj]=filterSlider(originalproducts)
//   const [value, setValue] = useState(10,10000);
// console.log(value);
//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };
  
//   return (
//     <Box sx={{ width: 300 }}>
//       <Slider
//         getAriaLabel={() => 'Temperature range'}
//         value={value}
//         onChange={handleChange}
//         valueLabelDisplay="auto"
//         getAriaValueText={valuetext}
//         max={1000}
//         min={10}
//       />
//     </Box>
//   );
// }