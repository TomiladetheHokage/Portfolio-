import React, { useState } from 'react';

const experiences = [
  {
    icon: 'fa-laptop-code',
    title: 'Software Developer',
    company: 'VAS2Nets Africa',
    date: 'Apr ~ 2025 - present',
    bullets: [
      'Built a Healthcare Management System that allows patients to book appointments and connects doctors, nurses, and patients smoothly.',
      'Developed the full mobile Banking App using React Native and supported backend integration with third-party services.',
      'Worked mainly with PHP and React Native to deliver simple, effective solutions that improve user experience',
    ],
  },
  {
    icon: 'fa-rocket',
    title: 'Front-End intern',
    company: 'Smarthivetechsolution',
    date: 'Feb ~ 2025 - May ~ 2025',
    bullets: [
      'Helped build and improve the company website by turning designs into a responsive, user-friendly interface using Next.js.',
      'Worked closely with designers and backend engineers to ensure features worked well and enhanced user experience.',
    ],
  },
  {
    icon: 'fa-laptop-code',
    title: 'Software Engineer (Trainee)',
    company: 'Semicolon Africa',
    date: 'Feb ~ 2024 - Feb ~ 2025',
    bullets: [
      'Completed intensive training in full-stack software development, working with technologies like Java, Spring Boot, React, React Native, PHP, and SQL.',
      'Built real-world projects including blog applications, gas leakage detection systems, and mobile apps, applying best coding and testing practices.',
      'Gained hands-on experience with DevOps basics, Docker, CI/CD pipelines, and collaborative workflows using Git.',
      'Completed an entrepreneurship course focused on business management, learning about business models, scaling, and creating sustainable value alongside technical skills.',
    ],
  },
  {
    icon: 'fa-headset',
    title: 'IT support',
    company: 'Tulcan Energy resources limited',
    date: 'May ~ 2022 - Oct ~ 2022',
    bullets: [
      'Provided technical support to staff, resolving hardware and software issues, ensuring seamless workflow.',
      'Created a troubleshooting document for common IT issues, reducing repeated support requests.',
      'Installed and configured essential software applications, improving system functionality.',
      'Performed weekly printer and system checks, preventing downtime and ensuring operational efficiency.',
    ],
  },
];

const WorkExperience = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedExperiences = showAll ? experiences : experiences.slice(0, 2);

  return (
    <section id="experience" className="py-20 bg-white mt-[-20px] md:mt-0">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>
        <div className="space-y-8">
          {displayedExperiences.map((exp, idx) => (
            <div key={idx} className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <i className={`fa-solid ${exp.icon} text-2xl md:text-3xl`}></i>
                <div>
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <p className="text-gray-600">{exp.company} • {exp.date}</p>
                  <ul className="mt-4 space-y-2 text-gray-600">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i}>• {bullet}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-900 hover:text-white shadow-md"
          >
            {showAll ? 'View Less' : 'View More'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;