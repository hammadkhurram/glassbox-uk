
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Sample student data
const students = [
  { id: '1', name: 'Alex K.', university: 'Harvard', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158' },
  { id: '2', name: 'Sophia C.', university: 'Stanford', image: 'https://images.unsplash.com/photo-1592188657836-c9753b21a0a9' },
  { id: '3', name: 'Marcus J.', university: 'Princeton', image: 'https://images.unsplash.com/photo-1541535650810-10d26f5c2ab3' },
  { id: '4', name: 'Emily D.', university: 'Yale', image: 'https://images.unsplash.com/photo-1517256673644-36ad11246d21' },
  { id: '5', name: 'David W.', university: 'MIT', image: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6' },
  { id: '6', name: 'Rachel M.', university: 'Columbia', image: 'https://images.unsplash.com/photo-1516534775068-ba3e7458af70' },
  { id: '7', name: 'James P.', university: 'Brown', image: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca' },
  { id: '8', name: 'Olivia S.', university: 'Duke', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1' },
  { id: '9', name: 'Daniel T.', university: 'Cornell', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d' },
  { id: '10', name: 'Natalie B.', university: 'Dartmouth', image: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453' },
  // Repeating to ensure smooth scroll
  { id: '11', name: 'Alex K.', university: 'Harvard', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158' },
  { id: '12', name: 'Sophia C.', university: 'Stanford', image: 'https://images.unsplash.com/photo-1592188657836-c9753b21a0a9' },
  { id: '13', name: 'Marcus J.', university: 'Princeton', image: 'https://images.unsplash.com/photo-1541535650810-10d26f5c2ab3' },
  { id: '14', name: 'Emily D.', university: 'Yale', image: 'https://images.unsplash.com/photo-1517256673644-36ad11246d21' },
];

const StudentCard = ({ student }: { student: typeof students[0] }) => (
  <Link to={`/profile/${student.id}`} className="group">
    <div className="student-card flex flex-col items-center mx-4 transition-transform duration-300 group-hover:scale-105">
      <div className="w-20 h-20 rounded-full overflow-hidden mb-2 border-2 border-transparent group-hover:border-accent">
        <img 
          src={student.image} 
          alt={student.name} 
          className="w-full h-full object-cover"
        />
      </div>
      <p className="text-sm font-medium">{student.name}</p>
      <p className="text-xs text-neutral-500">{student.university}</p>
    </div>
  </Link>
);

const StudentsMarquee = () => {
  return (
    <div className="py-12 bg-white overflow-hidden">
      <div className="container-padding mb-6">
        <h2 className="text-2xl font-bold text-center">Get Inspired From Students Who Got In</h2>
      </div>
      <div className="relative">
        <motion.div 
          className="flex"
          animate={{
            x: ["0%", "-50%"]
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear"
            }
          }}
        >
          <div className="flex">
            {students.map((student, index) => (
              <StudentCard key={`${student.id}-${index}`} student={student} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default StudentsMarquee;
