// src/components/SkillCircle.jsx
import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const SkillCircle = ({ label, percentage, color }) => (
  <div className="flex flex-col items-center w-[120px]">
    <div className="w-[30px] h-[30px]">
      <CircularProgressbar 
        value={percentage} 
        text={`${percentage}%`}
        styles={buildStyles({
          textColor: 'white',
          pathColor: color,
          trailColor: '#1e293b', // bg-slate-800
          textSize: '28px',
        })}
      />
    </div>
    <span className="mt-2 text-white text-sm font-medium">{label}</span>
  </div>
);

export default SkillCircle;
