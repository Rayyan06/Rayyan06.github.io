// src/components/FeaturedProjects.js
import React from 'react';
import ProjectCard from './ProjectCard';

// Define your featured projects here
const projects = [
  {
    title: 'DIY Hot-Wire Foam Cutting CNC',
    imageUrl: 'https://placehold.co/600x400', // Make sure this path is correct!
    description:
      'A 4-axis CNC machine built from scratch to cut intricate wing airfoils and fuselage sections out of foam for RC planes.',
    linkUrl: '/projects/foam-cutter-cnc',
  },
  {
    title: '3D Printed Optical Encoder',
    imageUrl: 'https://placehold.co/600x400', // Make sure this path is correct!
    description:
      'A high-resolution optical encoder using 3D printed parts and an AVR microcontroller to get precise feedback on shaft position and speed.',
    linkUrl: '/projects/optical-encoder',
  },
  // // Add another project here if you like
  // {
  //   title: 'Upcoming Project: Robot Arm',
  //   imageUrl: 'https://placehold.co/600x400/334155/e2e8f0?text=Coming+Soon',
  //   description:
  //     'A 6-axis robotic arm with custom PCB controllers and firmware, designed for light pick-and-place tasks.',
  //   linkUrl: '#',
  // },
];

export default function FeaturedProjects() {
  return (
    <section className="container padding-vert--lg">
      <div className="text--center margin-bottom--lg">
        <h2>Featured Projects</h2>
      </div>
      <div className="row">
        {projects.map((project, idx) => (
          <div key={idx} className="col col--4 margin-bottom--lg">
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </section>
  );
}
