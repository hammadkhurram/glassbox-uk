
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
      name: 'University of Cambridge',
      logo: '/universities/cambridge.png'
    },
    quote: 'Glassbox showed me what successful Cambridge applicants actually wrote about. It was exactly what I needed to find my voice.',
    story: 'I spent months struggling with my personal statement, unsure if I was highlighting the right academic achievements or using the right tone. After purchasing a few profiles from Cambridge admits on Glassbox, I immediately saw patterns in what worked. The personal statements were authentic and showed genuine academic passion, not just extracurricular achievements. I rewrote my statement to focus on my genuine interest in biochemistry and how my independent reading shaped my academic goals. Three months later, I got the acceptance email I\'d been dreaming of!'
  },
  {
    id: '2',
    name: 'Michael Washington',
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22',
    university: {
      name: 'University of Oxford',
      logo: '/universities/oxford.png'
    },
    quote: 'The interview preparation materials in the Oxford profiles I studied were game-changing. I completely rethought how to approach academic discussions.',
    story: 'As a state school student without access to expensive university counselors, I was flying blind when it came to my Oxford application. The profiles on Glassbox showed me that it wasn\'t about memorizing facts, but about demonstrating flexible thinking and genuine subject passion. I restructured my interview preparation to focus on discussing ideas rather than just reciting knowledge. I also noticed that successful applicants were comfortable with uncertainty and willing to work through problems aloud. This insight completely transformed my approach to interviews and ultimately helped me get accepted to Oxford.'
  },
  {
    id: '3',
    name: 'Jamal Rodriguez',
    image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843',
    university: {
      name: 'Imperial College London',
      logo: '/universities/imperial.png'
    },
    quote: 'Reading the personal statements from successful Imperial applicants gave me the confidence to be more technical in my approach.',
    story: 'The personal statements I read from Glassbox profiles showed me that Imperial values specific technical knowledge and research understanding. Successful applicants demonstrated familiarity with current developments in their field and connected their academic interests to real-world applications. I rewrote my statement to focus on my independent programming projects and how they connected to my interest in artificial intelligence. The profiles also showed me how to balance technical discussion with personal motivation. I\'m convinced this approach is what helped me stand out in a competitive field.'
  },
  {
    id: '4',
    name: 'Aisha Patel',
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
    university: {
      name: 'UCL',
      logo: '/universities/ucl.png'
    },
    quote: 'Looking at complete profiles from multiple UCL admits helped me understand how to structure a personal statement for a competitive London university.',
    story: 'Before Glassbox, I was treating my personal statement as a list of achievements. The UCL profiles I studied showed me how successful applicants created a coherent narrative that demonstrated both academic ability and genuine intellectual curiosity. One profile in particular demonstrated how to weave a passion for urban development through academic readings, relevant work experience, and future research interests. This inspired me to restructure my statement around my interest in sustainable architecture, connecting my design projects, technical knowledge, and career aspirations. The approach worked—I got into UCL\'s competitive architecture program!'
  },
  {
    id: '5',
    name: 'David Lee',
    image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901',
    university: {
      name: 'LSE',
      logo: '/universities/lse.png'
    },
    quote: 'As an international student, I had no idea how to approach the UK university application process until I found Glassbox.',
    story: 'No one in my family had attended university in the UK, so I was completely lost when it came to the UCAS application process. The LSE profiles on Glassbox were invaluable—they showed me that LSE values analytical thinking and engagement with current economic and political issues. I noticed successful applicants weren\'t afraid to discuss complex theories and demonstrate how they\'d engaged with them beyond the classroom curriculum. This gave me the confidence to write about my independent reading and analysis of economic trends in my home country. The profiles also helped me understand how to balance academic discussion with personal motivation. I\'m now thriving at LSE and have recommended Glassbox to everyone at my school.'
  },
  {
    id: '6',
    name: 'Emma Wilson',
    image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04',
    university: {
      name: 'University of Edinburgh',
      logo: '/universities/edinburgh.png'
    },
    quote: 'Glassbox helped me realize that Edinburgh wasn\'t looking for perfect students, but authentic ones with a clear passion for their subject.',
    story: 'I had strong grades but was worried my personal statement wasn\'t academic enough compared to other applicants. The Edinburgh profiles I studied on Glassbox showed me that demonstrating genuine intellectual curiosity and independent engagement with my subject mattered more than trying to sound impressive with complex vocabulary. One profile in particular inspired me—a student who had written thoughtfully about how various books and articles had shaped their understanding of their chosen field. I restructured my statement to focus on my intellectual journey and what specifically drew me to my course at Edinburgh rather than trying to list achievements. I received my acceptance letter last spring and couldn\'t be happier with my choice!'
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
              Real students who used Glassbox to gain admission to their dream UK universities.
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
              Get access to the application profiles that helped these students and many others get accepted to their dream UK universities.
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
