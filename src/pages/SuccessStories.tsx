
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

interface SuccessStory {
  id: string;
  name: string;
  image: string;
  university: {
    name: string;
    logo: string;
  };
  quote: string;
  story: string;
}

const successStories: SuccessStory[] = [
  {
    id: '1',
    name: 'Sophia Chen',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    university: {
      name: 'Stanford University',
      logo: '/universities/stanford.png'
    },
    quote: 'Glassbox showed me what successful Stanford applicants actually wrote about. It was exactly what I needed to find my voice.',
    story: 'I spent months struggling with my application essays, unsure if I was highlighting the right experiences or using the right tone. After purchasing a few profiles from Stanford admits on Glassbox, I immediately saw patterns in what worked. The personal statements were authentic and showed vulnerability, not just achievements. I rewrote my essays to focus on my genuine passion for neuroscience and how my research experience shaped my goals. Three months later, I got the acceptance email I'd been dreaming of!'
  },
  {
    id: '2',
    name: 'Michael Washington',
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22',
    university: {
      name: 'Harvard University',
      logo: '/universities/harvard.png'
    },
    quote: 'The activity descriptions in the Harvard profiles I studied were game-changing. I completely rethought how to present my extracurriculars.',
    story: 'As a student without access to expensive college counselors, I was flying blind when it came to my Harvard application. The profiles on Glassbox showed me that it wasn\'t about listing every activity I\'d ever done, but about demonstrating impact and growth. I restructured my activities section to highlight leadership and community contribution rather than just participation. I also noticed that successful applicants were specific about their unique contributions in each role. This insight completely transformed my application and ultimately helped me get accepted to Harvard.'
  },
  {
    id: '3',
    name: 'Jamal Rodriguez',
    image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843',
    university: {
      name: 'Yale University',
      logo: '/universities/yale.png'
    },
    quote: 'Reading the supplemental essays from successful Yale applicants gave me the confidence to be more creative with my approach.',
    story: 'The "Why Yale" essays I read from Glassbox profiles showed me that generic responses about prestige and rankings weren\'t going to cut it. Successful applicants demonstrated deep research about specific programs, professors, and opportunities that connected to their personal goals. I rewrote my supplement to focus on Yale\'s unique residential college system and how it would support my interest in interdisciplinary learning between computer science and ethics. The profiles also showed me how to balance academic interests with personality in the shorter Yale supplements. I\'m convinced this approach is what helped me stand out.'
  },
  {
    id: '4',
    name: 'Aisha Patel',
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
    university: {
      name: 'Princeton University',
      logo: '/universities/princeton.png'
    },
    quote: 'Looking at complete profiles from multiple Princeton admits helped me understand the overall narrative they built across all application components.',
    story: 'Before Glassbox, I was treating each part of my application as a separate entity. The Princeton profiles I studied showed me how successful applicants created a coherent story across their personal statement, activities, and supplemental essays. One profile in particular demonstrated how to weave a passion for environmental policy through academic achievements, extracurriculars, and future goals. This inspired me to restructure my application around my interest in educational equity, connecting my research experience, volunteer work, and career aspirations. The holistic approach worked—I got into Princeton and am now studying public policy!'
  },
  {
    id: '5',
    name: 'David Lee',
    image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901',
    university: {
      name: 'MIT',
      logo: '/universities/mit.png'
    },
    quote: 'As a first-generation student, I had no idea how to approach MIT\'s unique application questions until I found Glassbox.',
    story: 'No one in my family had attended college in the US, so I was completely lost when it came to the college application process. The MIT profiles on Glassbox were invaluable—they showed me that MIT values authenticity and intellectual curiosity over perfection. I noticed successful applicants weren\'t afraid to discuss failures and what they learned from them. This gave me the courage to write about a failed engineering project and how it taught me perseverance and creative problem-solving. The profiles also helped me understand how to balance technical achievements with personality in my essays. I\'m now thriving at MIT and have recommended Glassbox to everyone at my high school.'
  },
  {
    id: '6',
    name: 'Emma Wilson',
    image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04',
    university: {
      name: 'Columbia University',
      logo: '/universities/columbia.png'
    },
    quote: 'Glassbox helped me realize that Columbia wasn\'t looking for perfect students, but authentic ones with a clear sense of purpose.',
    story: 'I had strong academics but was worried my extracurriculars weren\'t impressive enough compared to other applicants. The Columbia profiles I studied on Glassbox showed me that depth of commitment and genuine passion mattered more than having a long list of activities. One profile in particular inspired me—a student who had dedicated significant time to just two main pursuits but demonstrated remarkable growth and leadership in those areas. I restructured my application to focus on my dedicated involvement in journalism and community service rather than trying to pad my resume. The essays I read also showed me how to connect my interests to Columbia\'s unique core curriculum and NYC location. I received my acceptance letter last spring!'
  }
];

const SuccessStories: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-100">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="container-padding">
          <div className="text-center mb-16">
            <h1 className="heading-lg mb-4">Success Stories</h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Real students who used Glassbox to gain admission to their dream schools.
            </p>
          </div>
          
          {/* Stories Grid */}
          <div className="max-w-5xl mx-auto">
            {successStories.map((story, index) => (
              <motion.div
                key={story.id}
                className="mb-12 bg-white rounded-2xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="md:flex">
                  <div className="md:w-1/3 bg-neutral-100 p-8 flex flex-col items-center justify-center text-center">
                    <div className="w-28 h-28 rounded-full overflow-hidden mb-6">
                      <img 
                        src={story.image} 
                        alt={story.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{story.name}</h3>
                    <div className="flex items-center justify-center mb-4">
                      <img 
                        src={story.university.logo} 
                        alt={story.university.name}
                        className="h-6 w-auto"
                      />
                      <span className="ml-2 text-neutral-600">
                        {story.university.name}
                      </span>
                    </div>
                  </div>
                  
                  <div className="md:w-2/3 p-8">
                    <blockquote className="text-xl italic mb-6 text-neutral-800">
                      "{story.quote}"
                    </blockquote>
                    <p className="text-neutral-600">
                      {story.story}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* CTA Section */}
          <div className="mt-20 text-center bg-white rounded-2xl shadow-lg p-10 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Join Our Success Stories</h2>
            <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
              Get access to the application profiles that helped these students and many others get accepted to their dream schools.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/browse" className="button-primary">
                Browse Profiles
              </a>
              <a href="/howitworks" className="button-secondary">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default SuccessStories;
