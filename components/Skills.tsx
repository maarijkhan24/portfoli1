
// components/Skills.js
const skills  = [
  { name: "JavaScript", level: 90 },
  { name: "React", level: 80 },
  { name: "Next.js", level: 85 },
  { name: "Tailwind CSS", level: 75 },
];


export default function Skills() {
  return  (
    <div id="skill" className="flex justify-center items-center min-h-screen bg-white dark:bg-sky-900">
      <div className="p-8 space-y-6 w-full max-w-lg bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-center text-blue-500 mb-6">My Skills</h2>
        {skills.map((skill, index) => (
          <div key={index} className="w-full">
            <h3 className="text-xl font-semibold text-sky-700 dark:text-sky-300">{skill.name}</h3>
            <div className="w-full h-4 bg-sky-200 rounded-lg overflow-hidden mt-2">
              <div
                style={{ width: `${skill.level}%` }}
                className="h-full bg-gradient-to-r from-sky-400 to-sky-600 animate-skill"
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
