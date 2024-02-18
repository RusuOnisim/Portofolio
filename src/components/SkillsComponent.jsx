import { motion } from 'framer-motion';

const SkillsComponent = ({ isDarkMode }) => {
  const skills = [
    { name: 'React', level: 70 },
    { name: 'JavaScript', level: 55 },
    { name: 'TypeScript', level: 50 },
    { name: 'Html', level: 95 },
    { name: 'CSS', level: 85 },
    { name: 'Tailwind', level: 90 },
  ];

  return (
    <div className={`mt-1 w-[90%] h-5/8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
      {skills.map((skill, index) => (
        <div key={index} className="lg:mb-4 mb-2">
          <p className="font-semibold">{skill.name}</p>
          <motion.div
            className={`bg-navcolor h-2 lg:h-3 w-full rounded-full overflow-hidden`}
          >
            <motion.div
              className={`${isDarkMode ? 'bg-colordarklogo' : 'bg-colorbrightlogo'} h-2 lg:h-3 rounded-full`}
              initial={{ width: '0%' }}
              animate={{ width: `${skill.level}%` }}
              transition={{ duration: 2, ease: 'easeOut', delay: 2}}
            ></motion.div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default SkillsComponent;
