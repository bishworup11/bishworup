import { v4 as uuidv4 } from 'uuid';

import duckHunting from '../images/duckHunting.jpeg'
import blood from '../images/BloodManagement.png'
import hotel from '../images/hotel.png'
import eco from '../images/EcoSync.png'


const projects = [
  {
    id: uuidv4(),
    name: 'Duck Hunting',
    desc:
      'This is a 2D game. There is a hunter who hunts ducks. Hunters face different obstacles like lions, eagles birds. This project was built using C++ language and IGraphics of Visual Studio 2013',
    img: duckHunting,
  },
  {
    id: uuidv4(),
    name: 'Blood DONATION SYSTEM',
    desc:
      'Main vision is to design a systematic blood donor management system and to validate the design using appropriate support. This is a PC-based application. It is implemented by Java Swing and the database is MySQL',
    img: blood,
  },
  {
    id: uuidv4(),
    name: ' Airbnb Front End',
    desc:
      'Design a frontend similar to Airbnb using HTML, CSS, and JavaScript, focusing on a clean, modern layout with interactive features. Ensure responsive design for various devices and screen sizes.',
    img: hotel,
  },
  {
    id: uuidv4(),
    name: 'EcoSync',
    desc:
      'EcoSync, developed during Code Samurai 2024, streamlines garbage collection from homes to designated grounds, ensuring efficient and eco-friendly waste management.',
    img: eco,
  },
  
];

export default projects;
