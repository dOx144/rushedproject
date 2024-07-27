import keyboard_one from '../assets/images/computer/Keyboard/Keyboard_one.jpg'
import keyboard_two from '../assets/images/computer/Keyboard/keyboard_two.jpg'
import keyboard_three from '../assets/images/computer/Keyboard/Keyboard_three.jpg'

import monitor_one from '../assets/images/computer/monitor/Monitor-One.jpg'
import monitor_two from '../assets/images/computer/monitor/Monitor-Two.jpg'
import monitor_three from '../assets/images/computer/monitor/Monitor-Three.jpg'

import mouse1 from '../assets/images/computer/mouse/mouse_one.jpg'
import mouse2 from '../assets/images/computer/mouse/mouse_two.jpg'
import mouse3 from '../assets/images/computer/mouse/mouse_three.jpg'

import processor from '../assets/images/computer/projessor/Processor.jpg'
import processor1 from '../assets/images/computer/projessor/processor1.jpg'
import processor2 from '../assets/images/computer/projessor/processor3.jpg'

import laptop from '../assets/images/computer/laptop/Laptop-One.jpg'
import laptop1 from '../assets/images/computer/laptop/Laptop-Two.jpg'
import laptop2 from '../assets/images/computer/laptop/Laptop-Three.jpg'

import ItemCards from './ItemCards'


const items = () => {

  const latest = [
    {
      title:'Monitor One',
      price:250,
      image:monitor_one
    },{
      title:'Keyboard One',
      price:300,
      image:keyboard_one
    },{
      title:'Mouse One',
      price:100,
      image:mouse1
    },{
      title:'Processor Two',
      price:750,
      image:processor1
    },{
      title:'Laptop Two',
      price:1150,
      image:laptop1
    },{
      title:'Processor Two',
      price:750,
      image:processor1
    },{
      title:'Monitor Three',
      price:450,
      image:monitor_three
    }
  ]


  const monitor = [{
    title:'Monitor One',
    price:250,
    image:monitor_one
  },{
    title:'Monitor Two',
    price:300,
    image:monitor_two
  },{
    title:'Monitor Three',
    price:450,
    image:monitor_three
  }]

  const keyboards = [{
    title:'Keyboard One',
    price:300,
    image:keyboard_one
  },{
    title:'Keyboard Two',
    price:350,
    image:keyboard_two
  },{
    title:'Keyboard Three',
    price:500,
    image:keyboard_three
  }]

  const mouse = [{
    title:'Mouse One',
    price:100,
    image:mouse1
  },
  // {
  //   title:'Mouse Two',
  //   price:150,
  //   image:mouse2
  // },
  {
    title:'Mouse Three',
    price:250,
    image:mouse3
  }]

  const processors = [{
    title:'Processors One',
    price:500,
    image:processor
  },{
    title:'Processor Two',
    price:750,
    image:processor1
  },{
    title:'Processor Three',
    price:2500,
    image:processor2
  }]

  const Laptop = [{
    title:'Laptop One',
    price:900,
    image:laptop
  },{
    title:'Laptop Two',
    price:1150,
    image:laptop1
  },{
    title:'Laptop Three',
    price:2500,
    image:laptop2
  }]

  return ( 
     <div className='flex flex-col gap-8 w-full *:p-4 '>
         <div className='flex w-full max-w-max gap-4 justify-around'>
          <p className='text-xl'>{'Latest >'}</p>
          {
            latest.map((item, index) => (
              <ItemCards key={index} image={item.image} title={item.title} price={item.price}/>
            ))
          }
        </div>
        <div className='flex w-full max-w-max gap-4 justify-around'>
          <p>Monitors:</p>
          {
            monitor.map((item, index) => (
              <ItemCards key={index} image={item.image} title={item.title} price={item.price}/>
            ))
          }
        </div>
        <div className='flex w-full max-w-max gap-4 justify-around'>
          <p>Mouse:</p>
          {
            mouse.map((item, index) => (
              <ItemCards key={index} image={item.image} title={item.title} price={item.price}/>
            ))
          }
        </div>
     </div>
  );
}
 
export default items;