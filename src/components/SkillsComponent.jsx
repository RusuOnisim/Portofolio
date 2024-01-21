import { motion } from 'framer-motion';

const SkillsComponent = ({ isDarkMode }) => {
  const skills = [
    { name: 'Html', level: 95 },
    { name: 'CSS', level: 90 },
    { name: 'Tailwind', level: 85 },
    { name: 'React', level: 70 },
    { name: 'JavaScript', level: 55 },
    { name: 'TypeScript', level: 50 },
  ];

  return (
    <div className={`mt-4 w-[90%] ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
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
