'use client';

import { AnimatePresence, motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { cn } from '@/lib/utils';

type SocialMediaLinks = {
  facebook?: string;
  twitter?: string;
  instagram?: string;
  linkedin?: string;
  github?: string;
  website?: string;
  email?: string;
  dribbble?: string;
};

type TeamMember = {
  id: number;
  name: string;
  role: string;
  email?: string;
  bio?: string;
  image: string;
  backgroundColor?: string;
  socialMedia?: SocialMediaLinks;
  expertise?: string[];
  department?: string;
};

type TeamSectionProps = {
  title?: string;
  subtitle?: string;
  teamMembers: TeamMember[];
  backgroundColor?: string;
  textColor?: string;
  secondaryColor?: string;
  className?: string;
};

type Department =
  | 'all'
  | 'management'
  | 'product'
  | 'design'
  | 'marketing'
  | 'sales'
  | 'customer'
  | 'operations';

export interface ElegantTeamProps extends TeamSectionProps {
  departments?: Array<{
    id: Department;
    label: string;
  }>;
}

const elegantTeamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Emmy Rosum',
    role: 'Co-Founder and CEO',
    department: 'management',
    image:
      'https://img.freepik.com/premium-psd/3d-avatar-character_975163-690.jpg?ga=GA1.1.1818589012.1736774497&semt=ais_hybrid',
  },
  {
    id: 2,
    name: 'Orlando Diggs',
    role: 'Co-Founder and COO',
    department: 'management',
    image:
      'https://img.freepik.com/premium-psd/3d-avatar-character_975163-678.jpg?ga=GA1.1.1818589012.1736774497&semt=ais_hybrid',
  },
  {
    id: 3,
    name: 'Sophie Chamberlain',
    role: 'Head of Sales',
    department: 'sales',
    image:
      'https://img.freepik.com/premium-psd/3d-avatar-character_975163-725.jpg?ga=GA1.1.1818589012.1736774497&semt=ais_hybrid',
  },
  {
    id: 4,
    name: 'Lana Steiner',
    role: 'VP of Customer Success',
    department: 'customer',
    image:
      'https://img.freepik.com/premium-photo/female-character-3d-rendering-isolated-background_150525-107.jpg?ga=GA1.1.1818589012.1736774497&semt=ais_hybrid',
  },
  {
    id: 5,
    name: 'Emily Donnavan',
    role: 'Product Lead',
    department: 'product',
    image:
      'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671163.jpg?ga=GA1.1.1818589012.1736774497&semt=ais_hybrid',
  },
  {
    id: 6,
    name: 'Sasha Kindred',
    role: 'VP of Marketing',
    department: 'marketing',
    image:
      'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671132.jpg?ga=GA1.1.1818589012.1736774497&semt=ais_hybrid',
  },
  {
    id: 7,
    name: 'Jessica Dobrev',
    role: 'Backend Lead',
    department: 'operations',
    image:
      'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671159.jpg?ga=GA1.1.1818589012.1736774497&semt=ais_hybrid',
  },
  {
    id: 8,
    name: 'Drew Cano',
    role: 'Head of UX',
    department: 'design',
    image:
      'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671136.jpg?ga=GA1.1.1818589012.1736774497&semt=ais_hybrid',
  },
];

export default function Team4({
  title = 'Meet the team that makes the magic happen',
  subtitle = 'Meet our diverse team of world-class creators, designers, and problem solvers.',
  teamMembers = elegantTeamMembers,
  backgroundColor = '#ffffff',
  textColor = '#000000',
  secondaryColor = '#666666',
  className,
  departments = [
    { id: 'all', label: 'View all' },
    { id: 'management', label: 'Management' },
    { id: 'product', label: 'Product' },
    { id: 'design', label: 'Design' },
    { id: 'marketing', label: 'Marketing' },
    { id: 'sales', label: 'Sales' },
    { id: 'customer', label: 'Customer Success' },
    { id: 'operations', label: 'Operations' },
  ],
}: ElegantTeamProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const titleInView = useInView(sectionRef, { once: true, margin: '-20% 0px' });
  const [activeDepartment, setActiveDepartment] = useState<Department>('all');

  // Filter team members by department
  const filteredTeamMembers =
    activeDepartment === 'all'
      ? teamMembers
      : teamMembers.filter(
          (member) =>
            member.department?.toLowerCase() === activeDepartment ||
            member.role?.toLowerCase().includes(activeDepartment),
        );

  const titleWords = title.split(' ');

  return (
    <section
      ref={sectionRef}
      className={cn('w-full py-16', className)}
      style={{ backgroundColor, color: textColor }}
    >
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <motion.h2
            className="brandexa-team-animated-title mb-4 font-serif text-4xl leading-tight md:text-5xl"
            aria-label={title}
            initial="hidden"
            animate={titleInView ? 'visible' : 'hidden'}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.065, delayChildren: 0.12 } },
            }}
          >
            {titleWords.map((word, index) => (
              <span className="brandexa-word-mask" key={`${word}-${index}`}>
                <motion.span
                  variants={{
                    hidden: { y: '112%', opacity: 0, filter: 'blur(12px)', rotateX: -38 },
                    visible: {
                      y: '0%',
                      opacity: 1,
                      filter: 'blur(0px)',
                      rotateX: 0,
                      transition: { duration: 0.68, ease: [0.22, 1, 0.36, 1] },
                    },
                  }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </motion.h2>
          <motion.p
            className="mx-auto max-w-3xl text-base"
            style={{ color: secondaryColor }}
            initial={{ opacity: 0, y: 18 }}
            animate={titleInView ? { opacity: 1, y: 0 } : undefined}
            transition={{ delay: 0.48, duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
          >
            {subtitle}
          </motion.p>
        </div>

        <motion.div layout className="mb-12 flex flex-wrap justify-center gap-2">
          {departments.map((dept) => (
            <motion.button
              key={dept.id}
              layout
              onClick={() => setActiveDepartment(dept.id)}
              aria-pressed={activeDepartment === dept.id}
              className={cn(
                'rounded-md px-4 py-2 text-sm font-medium transition-colors',
                activeDepartment === dept.id
                  ? 'bg-gray-900 text-white'
                  : 'border border-gray-200 bg-white text-gray-800 hover:bg-gray-100',
              )}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            >
              {dept.label}
            </motion.button>
          ))}
        </motion.div>

        <motion.div layout className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filteredTeamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                layout
                className="relative overflow-hidden rounded-lg transition-all"
                initial={{ opacity: 0, y: 22, scale: 0.94, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -18, scale: 0.92, filter: 'blur(8px)' }}
                transition={{
                  layout: { duration: 0.52, ease: [0.22, 1, 0.36, 1] },
                  opacity: { duration: 0.28, delay: index * 0.035 },
                  y: { duration: 0.42, delay: index * 0.035, ease: [0.22, 1, 0.36, 1] },
                  scale: { duration: 0.42, delay: index * 0.035, ease: [0.22, 1, 0.36, 1] },
                  filter: { duration: 0.3 },
                }}
              >
                <motion.div
                  layout
                  className="relative aspect-square overflow-hidden"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                </motion.div>
                <motion.div
                  layout
                  className="relative z-10 mx-auto -mt-[2.5rem] max-w-[90%] rounded-lg border border-gray-100 bg-white px-2 py-3 text-center"
                >
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-sm" style={{ color: secondaryColor }}>
                    {member.role}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
