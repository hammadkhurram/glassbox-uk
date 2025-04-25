
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Check, Lock, ChevronDown, ChevronUp } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ProfileDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState('personal');
  const [showingSections, setShowingSections] = useState<{ [key: string]: boolean }>({});
  const { toast } = useToast();

  // Mock data for a single profile
  const profile = {
    id: id || '1',
    name: 'Alex Kim',
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22',
    universities: [
      {name: 'Harvard University', logo: '/universities/harvard.png'},
      {name: 'Stanford University', logo: '/universities/stanford.png'},
      {name: 'Yale University', logo: '/universities/yale.png'}
    ],
    stats: {
      gpa: '4.0 unweighted / 4.3 weighted',
      sat: '1570',
      act: '35',
      ap: '7 courses (all 5s)',
      honors: 'National Merit Scholar, Speech & Debate State Champion'
    },
    personalStatement: {
      title: "The Language of Chess",
      content: "The chess pieces stood silently on the board as my opponent and I faced off. As a shy immigrant still learning English, the universal language of chess had become my voice...",
      fullContent: "The chess pieces stood silently on the board as my opponent and I faced off. As a shy immigrant still learning English, the universal language of chess had become my voice. Each move told a story—my bishop's diagonal assault revealing my strategic thinking, my knight's L-shaped dance showcasing my creativity.\n\nI grew up in Seoul, moving to California when I was twelve. Unable to express myself clearly in English, I retreated into silence at school. But at the local chess club, I didn't need words. My pieces spoke for me, and with each tournament, I gained confidence that transcended language barriers.\n\nOne afternoon during my sophomore year, my English teacher asked me to tutor a recently arrived student from Vietnam. I recognized in Minh the same frustrated silence I had once worn. On impulse, I pulled out my travel chess set. As we played, Minh's hesitation melted away. Our shared understanding of the game created a bridge where verbal communication had failed.\n\nThis sparked an idea. With the principal's permission, I started an 'International Chess Club' specifically inviting ESL students. Watching participants transform from isolated individuals to animated strategists showed me how shared passions create community across differences.\n\nChess taught me that communication extends beyond words. This insight has shaped how I approach challenges—looking for universal patterns and connections whether in mathematical equations, scientific phenomena, or human relationships. As I pursue studies in international relations, I carry this lesson: sometimes the most profound connections begin in silence, with nothing but a checkered board between strangers."
    },
    activities: [
      {
        title: "International Chess Club",
        role: "Founder & President",
        description: "Founded club for ESL students to build community through chess; organized weekly meetings and tournaments; membership grew from 6 to 32 students; collaborated with local chess masters for guest lectures."
      },
      {
        title: "Debate Team",
        role: "Captain",
        description: "Led team to state championships; personally ranked 3rd in state for Lincoln-Douglas debate; mentored 8 novice debaters; developed research methodology that improved team performance by 40%."
      },
      {
        title: "Hospital Volunteer",
        role: "Patient Services Volunteer",
        description: "Provided 200+ hours of service at Memorial Hospital; assisted non-English speaking patients with translation; created multilingual welcome guides now used by hospital staff."
      },
      {
        title: "Research Assistant",
        role: "Summer Intern",
        description: "Collaborated with Dr. Lin on research examining multicultural communication patterns; gathered and analyzed data from 150 participants; co-authored paper published in undergraduate research journal."
      },
      {
        title: "Community Tutoring Initiative",
        role: "Lead Math & Science Tutor",
        description: "Provided free tutoring to underserved middle school students; developed comprehensive study materials; helped 85% of students improve grades by at least one letter grade."
      }
    ],
    supplementalEssays: [
      {
        university: "Harvard University",
        prompt: "Intellectual Experience (Optional): Describe an intellectual experience that was important to you.",
        essay: "The Russian literature seminar seemed intimidating—I was the only junior among seniors, many of whom had studied Russian. However, when we discussed Dostoevsky's 'Crime and Punishment,' I found unexpected parallels between Raskolnikov's psychological isolation and the alienation I had experienced as a new immigrant. Drawing from my multicultural background, I offered perspectives on the novel's themes of displacement that added new dimensions to our class discussion.\n\nThis experience taught me the value of bringing diverse viewpoints to intellectual conversations. I began to see how my identity as a cultural bridge between East and West gave me unique analytical tools. Rather than seeing my background as a limitation, I recognized it as intellectual capital—a different lens through which to examine literature, history, and human behavior.\n\nThe seminar became a weekly highlight, where I gradually found the courage to challenge interpretations and propose alternative readings based on cross-cultural insights. Professor Harlow later told me my comparative analysis between Dostoevsky's moral dilemmas and Confucian ethics was among the most original undergraduate perspectives she'd encountered.\n\nThis intellectual journey showed me that academic growth often happens at the intersection of different traditions and viewpoints. I've carried this understanding forward, deliberately seeking out conversations and courses that challenge me to reconcile diverse intellectual frameworks."
      },
      {
        university: "Stanford University",
        prompt: "Roommate Letter: Virtually all of Stanford's undergraduates live on campus. Write a note to your future roommate that reveals something about you or that will help your roommate—and us—know you better.",
        essay: "Dear future roommate,\n\nFair warning: you'll probably find me awake at odd hours. Sometimes I'm up late analyzing chess matches online—I promise to use headphones! Other times I'm brewing loose-leaf tea from my collection. I have varieties from five countries and believe each requires specific steeping times. I'd be happy to make you a cup of my specialty, Korean barley tea, anytime.\n\nI keep a small whiteboard next to my desk where I write quotes that inspire me. Currently featured is my grandmother's advice: \"The best conversations happen when you're curious, not when you're clever.\" I've found this especially true since moving to America and learning that asking thoughtful questions often matters more than having perfect English.\n\nWeekend mornings, I like to go for runs while listening to podcasts—everything from global politics to stories about immigrant experiences. If you're ever interested, we could run together. I'm not particularly fast, but I'm consistent.\n\nMy side of the room might occasionally have scattered chess pieces as I work through famous games or puzzles. I find something meditative about rearranging them silently. Don't worry though—I'm actually quite organized otherwise and believe strongly in keeping shared spaces clean.\n\nI'm looking forward to learning about your interests and habits. Perhaps we can teach each other new skills—I'd be happy to show you some chess openings in exchange for whatever expertise you'd like to share!\n\nSee you in September,\nAlex"
      },
      {
        university: "Yale University",
        prompt: "Why Yale?",
        essay: "When I attended Yale's Model UN conference last year, I wandered into Sterling Memorial Library during a break. In the Linonia and Brothers Reading Room, I overheard two students engaged in an animated discussion about game theory in international relations—exactly the intersection of disciplines that fascinates me. Their conversation exemplified what draws me to Yale: the intellectual vibrancy that thrives beyond classroom walls.\n\nYale's Ethics, Politics, and Economics major speaks directly to my academic goals. Having explored how cultural backgrounds influence ethical frameworks through both debate competitions and my work with immigrant communities, I'm eager to engage with Professor Alexander Kirshner's research on democratic theory across cultural contexts. Similarly, the Brady-Johnson Program in Grand Strategy would allow me to combine my interests in chess strategy, international relations, and cross-cultural communication.\n\nBeyond academics, I hope to contribute to Yale's community through the Yale International Relations Association, building on my experience founding my high school's International Chess Club. The opportunity to bring together students from diverse backgrounds through shared intellectual pursuit is something I value deeply.\n\nYale's residential college system appeals to me as someone who believes learning happens as much through late-night discussions as formal studies. Whether participating in Pierson College's cultural events or engaging in impromptu debates in common rooms, I see Yale as a place where I can grow not just as a student but as a global citizen ready to build bridges across different perspectives."
      }
    ],
    price: 30,
    hasCommonApp: true,
    hasPersonalEssays: true,
    hasActivityDescriptions: true,
    hasSupplementalEssays: true
  };

  const toggleSection = (section: string) => {
    setShowingSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handlePurchase = () => {
    toast({
      title: "Access Granted!",
      description: "You now have full access to Alex's profile.",
    });
  };

  return (
    <div className="min-h-screen bg-neutral-100">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="container-padding">
          {/* Profile Header */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
            <div className="md:flex">
              <div className="md:w-1/3 p-8 flex flex-col items-center justify-center text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-6">
                  <img 
                    src={profile.image} 
                    alt={profile.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h1 className="text-2xl font-bold mb-2">{profile.name}</h1>
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {profile.universities.map((uni, index) => (
                    <div key={index} className="flex items-center bg-neutral-100 px-3 py-1 rounded-full">
                      <img 
                        src={uni.logo} 
                        alt={uni.name}
                        className="h-5 w-auto mr-2"
                      />
                      <span className="text-sm">{uni.name}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col space-y-2">
                  {profile.hasCommonApp && (
                    <div className="flex items-center text-sm">
                      <span className="feature-dot"></span>
                      <span>Complete Application</span>
                    </div>
                  )}
                  {profile.hasPersonalEssays && (
                    <div className="flex items-center text-sm">
                      <span className="feature-dot"></span>
                      <span>Personal Essays</span>
                    </div>
                  )}
                  {profile.hasActivityDescriptions && (
                    <div className="flex items-center text-sm">
                      <span className="feature-dot"></span>
                      <span>Activity Descriptions</span>
                    </div>
                  )}
                  {profile.hasSupplementalEssays && (
                    <div className="flex items-center text-sm">
                      <span className="feature-dot"></span>
                      <span>Supplemental Essays</span>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="md:w-2/3 p-8 md:border-l border-neutral-200">
                <div className="md:flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-xl font-semibold mb-4">Academic Profile</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-neutral-500">GPA</p>
                        <p>{profile.stats.gpa}</p>
                      </div>
                      <div>
                        <p className="text-sm text-neutral-500">SAT</p>
                        <p>{profile.stats.sat}</p>
                      </div>
                      <div>
                        <p className="text-sm text-neutral-500">ACT</p>
                        <p>{profile.stats.act}</p>
                      </div>
                      <div>
                        <p className="text-sm text-neutral-500">AP Courses</p>
                        <p>{profile.stats.ap}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 md:mt-0">
                    <div className="bg-neutral-100 p-4 rounded-xl text-center">
                      <p className="text-2xl font-bold">${profile.price}</p>
                      <button 
                        onClick={handlePurchase}
                        className="mt-3 px-6 py-2 bg-black text-white rounded-full hover:bg-neutral-800 transition-colors"
                      >
                        Get Access
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h2 className="text-xl font-semibold mb-4">Honors & Awards</h2>
                  <p>{profile.stats.honors}</p>
                </div>
                
                <div>
                  <h2 className="text-xl font-semibold mb-4">Profile Contents</h2>
                  <div className="flex flex-col space-y-3">
                    <div className="flex justify-between items-center p-3 bg-neutral-100 rounded-lg">
                      <span>Personal Statement</span>
                      <Check className="w-5 h-5 text-green-500" />
                    </div>
                    <div className="flex justify-between items-center p-3 bg-neutral-100 rounded-lg">
                      <span>Activities & Descriptions</span>
                      <Check className="w-5 h-5 text-green-500" />
                    </div>
                    <div className="flex justify-between items-center p-3 bg-neutral-100 rounded-lg">
                      <span>Harvard Supplemental Essays</span>
                      <Check className="w-5 h-5 text-green-500" />
                    </div>
                    <div className="flex justify-between items-center p-3 bg-neutral-100 rounded-lg">
                      <span>Stanford Supplemental Essays</span>
                      <Check className="w-5 h-5 text-green-500" />
                    </div>
                    <div className="flex justify-between items-center p-3 bg-neutral-100 rounded-lg">
                      <span>Yale Supplemental Essays</span>
                      <Check className="w-5 h-5 text-green-500" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Profile Content Tabs */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
            <div className="border-b border-neutral-200">
              <div className="flex">
                <button
                  onClick={() => setActiveTab('personal')}
                  className={`px-6 py-4 font-medium text-sm ${
                    activeTab === 'personal' 
                      ? 'border-b-2 border-black text-black' 
                      : 'text-neutral-500 hover:text-black transition-colors'
                  }`}
                >
                  Personal Statement
                </button>
                <button
                  onClick={() => setActiveTab('activities')}
                  className={`px-6 py-4 font-medium text-sm ${
                    activeTab === 'activities' 
                      ? 'border-b-2 border-black text-black' 
                      : 'text-neutral-500 hover:text-black transition-colors'
                  }`}
                >
                  Activities
                </button>
                <button
                  onClick={() => setActiveTab('supplemental')}
                  className={`px-6 py-4 font-medium text-sm ${
                    activeTab === 'supplemental' 
                      ? 'border-b-2 border-black text-black' 
                      : 'text-neutral-500 hover:text-black transition-colors'
                  }`}
                >
                  Supplemental Essays
                </button>
              </div>
            </div>
            
            <div className="p-8">
              {activeTab === 'personal' && (
                <div>
                  <h3 className="text-2xl font-bold mb-4">{profile.personalStatement.title}</h3>
                  <div className="bg-neutral-100 p-6 rounded-xl mb-6">
                    <p className="italic mb-4">{profile.personalStatement.content}</p>
                    <div className="flex items-center justify-center">
                      <Lock className="w-5 h-5 mr-2" />
                      <span>Purchase profile to view complete essay</span>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <button 
                      onClick={handlePurchase}
                      className="px-6 py-3 bg-black text-white rounded-full hover:bg-neutral-800 transition-colors"
                    >
                      Get Access for ${profile.price}
                    </button>
                  </div>
                </div>
              )}
              
              {activeTab === 'activities' && (
                <div>
                  <h3 className="text-2xl font-bold mb-6">Activities & Leadership</h3>
                  
                  {profile.activities.map((activity, index) => (
                    <div key={index} className="mb-6 border-b border-neutral-200 pb-6 last:border-b-0 last:pb-0">
                      <div 
                        className="flex justify-between items-center cursor-pointer"
                        onClick={() => toggleSection(`activity-${index}`)}
                      >
                        <h4 className="text-lg font-semibold">{activity.title} <span className="text-neutral-500">• {activity.role}</span></h4>
                        {showingSections[`activity-${index}`] ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </div>
                      
                      {showingSections[`activity-${index}`] ? (
                        <div className="mt-3 bg-neutral-100 p-4 rounded-lg">
                          <p>{activity.description}</p>
                        </div>
                      ) : (
                        <div className="mt-3 bg-neutral-100 p-4 rounded-lg flex items-center justify-center">
                          <Lock className="w-5 h-5 mr-2" />
                          <span>Purchase profile to view details</span>
                        </div>
                      )}
                    </div>
                  ))}
                  
                  <div className="flex justify-center mt-6">
                    <button 
                      onClick={handlePurchase}
                      className="px-6 py-3 bg-black text-white rounded-full hover:bg-neutral-800 transition-colors"
                    >
                      Get Access for ${profile.price}
                    </button>
                  </div>
                </div>
              )}
              
              {activeTab === 'supplemental' && (
                <div>
                  <h3 className="text-2xl font-bold mb-6">Supplemental Essays</h3>
                  
                  {profile.supplementalEssays.map((supplemental, index) => (
                    <div key={index} className="mb-8">
                      <div className="flex items-center mb-4">
                        <img 
                          src={profile.universities.find(uni => uni.name === supplemental.university)?.logo} 
                          alt={supplemental.university}
                          className="h-6 w-auto mr-3"
                        />
                        <h4 className="text-lg font-semibold">{supplemental.university}</h4>
                      </div>
                      
                      <div className="bg-neutral-100 p-6 rounded-xl mb-4">
                        <p className="font-medium mb-4">Prompt: {supplemental.prompt}</p>
                        <p className="italic mb-4">{supplemental.essay.substring(0, 150)}...</p>
                        <div className="flex items-center justify-center">
                          <Lock className="w-5 h-5 mr-2" />
                          <span>Purchase profile to view complete essay</span>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  <div className="flex justify-center">
                    <button 
                      onClick={handlePurchase}
                      className="px-6 py-3 bg-black text-white rounded-full hover:bg-neutral-800 transition-colors"
                    >
                      Get Access for ${profile.price}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Related Profiles */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Similar Profiles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((num) => (
                <div key={num} className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="p-6 flex items-center">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4 bg-neutral-100"></div>
                    <div>
                      <h3 className="font-semibold">Student {num}</h3>
                      <div className="flex space-x-2 mt-1">
                        <img 
                          src={`/universities/harvard.png`} 
                          alt="University logo" 
                          className="h-5 w-auto"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-neutral-100 p-4 flex justify-between items-center">
                    <span className="font-bold">${20 + (num * 5)}</span>
                    <a href={`/profile/${num}`} className="px-3 py-1 bg-black text-white rounded-full text-sm hover:bg-neutral-800 transition-colors">
                      View Profile
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProfileDetail;
