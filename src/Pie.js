import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Pie } from '@vx/shape';
import { Group } from '@vx/group';
import { GradientPinkRed } from '@vx/gradient';
import { scaleBand, scaleLinear, scaleOrdinal } from '@vx/scale';

const Task =[
    { task: 'New', frequency:40 },
    { task: 'Started', frequency:50 },
    { task: 'Done', frequency:76  },
    { task: 'Overdue', frequency:314 },
    { task: 'Discarded', frequency:65 },
    ];

    
function Label({ x, y, children }) {
  return (
    <text
      fill="black"
      textAnchor="middle"
      x={x}
      y={y}
      dy=".33em"
      fontSize={16}
    >
      {children}
    </text>
  );
}


const width = 800;
const height = 295;
const margin = { top: 3, bottom: 20, left: 20, right: 20 }




 export default function Piegraph ()  {
   
    if (width < 10) return null;
  const radius = (height) / 2;
  return (
    <div>
     
    <svg width={width} height={height}>
      
           
      <Group top={height/2-margin.top} left={width/2}>
      
     <Pie
          data={Task}
          pieValue={d => d.frequency}
          outerRadius={radius - 20}
          innerRadius={radius - 80}
          fill="#ff3399"
          fillOpacity={d => 1 / (d.index + 2) }
          cornerRadius={3}
          stroke="darkgray"
          strokeWidth={0.7}
          padAngle={0}
          centroid={(centroid, arc) => {
                        const [x, y] = centroid;
                        const { startAngle, endAngle } = arc;
            if (endAngle - startAngle < .1) return null;
                        return <Label x={x} y={y}> {arc.data.task} </Label>;
                         
                                  }}
                                      />

                                      <Pie
          data={Task}
          pieValue={d => d.frequency}
          outerRadius={radius - 85}
          fill="darkgray"
          fillOpacity={d => 1 / (d.index + 2) }
          centroid={(centroid, arc) => {
            const [x, y] = centroid;
            return <Label x={x} y={y}>{arc.data.frequency}</Label>;
          }}
        />
       </Group>
        
    </svg>

</div>
 );
   }

