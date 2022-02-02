import React from 'react';
import p0 from "../assets/turtles/0.jpg";
import p1 from "../assets/turtles/1.jpg";
import p2 from "../assets/turtles/2.jpg";
import p3 from "../assets/turtles/3.jpg";
import p4 from "../assets/turtles/4.jpg";
import p5 from "../assets/turtles/5.jpg";
import p6 from "../assets/turtles/6.jpg";
import p7 from "../assets/turtles/7.jpg";
import p8 from "../assets/turtles/8.jpg";
import p9 from "../assets/turtles/9.jpg";
import GenericSplide from './GenericSplide'; 

export default function TurtleSplide() {
  return <GenericSplide images={[p0, p1, p2, p3, p4, p5, p6, p7, p8, p9]}/>
}
