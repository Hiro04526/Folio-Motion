'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { GlobalStyles } from '@mui/material'
import { siHtml5, 
         siReact, 
         siNextdotjs, 
         siNodedotjs, 
         siCss3, 
         siTailwindcss, 
         siJavascript, 
         siTypescript, 
         siPython,
         siJupyter,
         siKotlin,
         siDart } from 'simple-icons/icons'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'

const scrollbarStyles = (
  <GlobalStyles
    styles={{
      '*::-webkit-scrollbar': { width: '8px' },
      '*::-webkit-scrollbar-track': { background: 'transparent' },
      '*::-webkit-scrollbar-thumb': {
        background: 'rgba(255, 255, 255, 0.5)',
        borderRadius: '20px'
      },
      '*::-webkit-scrollbar-thumb:hover': {
        background: 'rgba(255, 255, 255, 0.7)'
      }
    }}
  />
)

const SimpleIcon = ({ icon, className = '' }: { icon: any; className?: string }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-8 h-8 fill-current ${className}`}
  >
    <title>{icon.title}</title>
    <path d={icon.path} />
  </svg>
)

const JavaIcon = () => (
  <svg
    role="img"
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8 fill-current"
  >
    <title>Java</title>
    <path d="M 28.1875 0 C 30.9375 6.363281 18.328125 10.292969 17.15625 15.59375 C 16.082031 20.464844 24.648438 26.125 24.65625 26.125 C 23.355469 24.109375 22.398438 22.449219 21.09375 19.3125 C 18.886719 14.007813 34.535156 9.207031 28.1875 0 Z M 36.5625 8.8125 C 36.5625 8.8125 25.5 9.523438 24.9375 16.59375 C 24.6875 19.742188 27.847656 21.398438 27.9375 23.6875 C 28.011719 25.558594 26.0625 27.125 26.0625 27.125 C 26.0625 27.125 29.609375 26.449219 30.71875 23.59375 C 31.949219 20.425781 28.320313 18.285156 28.6875 15.75 C 29.039063 13.324219 36.5625 8.8125 36.5625 8.8125 Z M 19.1875 25.15625 C 19.1875 25.15625 9.0625 25.011719 9.0625 27.875 C 9.0625 30.867188 22.316406 31.089844 31.78125 29.25 C 31.78125 29.25 34.296875 27.519531 34.96875 26.875 C 28.765625 28.140625 14.625 28.28125 14.625 27.1875 C 14.625 26.179688 19.1875 25.15625 19.1875 25.15625 Z M 38.65625 25.15625 C 37.664063 25.234375 36.59375 25.617188 35.625 26.3125 C 37.90625 25.820313 39.84375 27.234375 39.84375 28.84375 C 39.84375 32.46875 34.59375 35.875 34.59375 35.875 C 34.59375 35.875 42.71875 34.953125 42.71875 29 C 42.71875 26.296875 40.839844 24.984375 38.65625 25.15625 Z M 16.75 30.71875 C 15.195313 30.71875 12.875 31.9375 12.875 33.09375 C 12.875 35.417969 24.5625 37.207031 33.21875 33.8125 L 30.21875 31.96875 C 24.351563 33.847656 13.546875 33.234375 16.75 30.71875 Z M 18.1875 35.9375 C 16.058594 35.9375 14.65625 37.222656 14.65625 38.1875 C 14.65625 41.171875 27.371094 41.472656 32.40625 38.4375 L 29.21875 36.40625 C 25.457031 37.996094 16.015625 38.238281 18.1875 35.9375 Z M 11.09375 38.625 C 7.625 38.554688 5.375 40.113281 5.375 41.40625 C 5.375 48.28125 40.875 47.964844 40.875 40.9375 C 40.875 39.769531 39.527344 39.203125 39.03125 38.9375 C 41.933594 45.65625 9.96875 45.121094 9.96875 41.15625 C 9.96875 40.253906 12.320313 39.390625 14.5 39.8125 L 12.65625 38.75 C 12.113281 38.667969 11.589844 38.636719 11.09375 38.625 Z M 44.625 43.25 C 39.226563 48.367188 25.546875 50.222656 11.78125 47.0625 C 25.542969 52.695313 44.558594 49.535156 44.625 43.25 Z" />
  </svg>
);

interface Skill {
  name: string
  level: number
  icon: any
  description: string
}

export function SkillSection() {
  const [showLevel, setShowLevel] = useState<boolean>(false)

  const skills: Skill[] = [
    {
      name: 'ReactJS',
      level: 70,
      icon: siReact,
      description: 'Building dynamic web pages'
    },
    {
      name: 'Next.JS',
      level: 70,
      icon: siNextdotjs,
      description: 'Creating fast and SEO-friendly websites'
    },
    {
      name: 'Node.JS',
      level: 70,
      icon: siNodedotjs,
      description: 'Handling backend logic and APIs'
    },
    {
      name: 'HTML5',
      level: 70,
      icon: siHtml5,
      description: 'Structuring content for web pages'
    },
    {
      name: 'CSS3',
      level: 70,
      icon: siCss3,
      description: 'Styling layouts and UI elements'
    },
    {
      name: 'JavaScript',
      level: 70,
      icon: siJavascript,
      description: 'Adding interactivity to websites'
    },
    {
      name: 'TypeScript',
      level: 70,
      icon: siTypescript,
      description: 'Writing safer and more organized code'
    },
    {
      name: 'Tailwind CSS',
      level: 70,
      icon: siTailwindcss,
      description: 'Designing responsive pages quickly'
    },
    {
      name: 'Python',
      level: 90,
      icon: siPython,
      description: 'Scripting tasks and analyzing data'
    },
    {
      name: 'Jupyter Notebook',
      level: 70,
      icon: siJupyter,
      description: 'Testing and explaining Python code'
    },
    {
      name: 'Java',
      level: 70,
      icon: JavaIcon,
      description: 'Building apps and practicing OOP'
    },
    {
      name: 'Kotlin',
      level: 70,
      icon: siKotlin,
      description: 'Developing Android applications'
    },
    {
      name: 'Dart',
      level: 70,
      icon: siDart,
      description: 'Creating mobile apps using Flutter'
    }
  ]  

  return (
    <>
      {scrollbarStyles}
      <section id="skills" className="py-12 bg-gradient-to-br from-background to-secondary overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="container mt-2 mx-auto px-4"
        >
          <div className="text-center mb-6">
            <motion.h2
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-5xl font-bold mb-6 text-primary"
            >
              My Skills
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-lg md:text-xl text-muted-foreground mb-8"
            >
              Here's a collection of my skills with their proficiency levels.
            </motion.p>
            <Button
              onClick={() => setShowLevel(!showLevel)}
              className="transition-colors duration-300 hover:bg-purple-600"
            >
              {showLevel ? 'Hide Levels' : 'Show Levels'}
            </Button>
          </div>

          <Carousel className="relative" opts={{ loop: true }}>
            <CarouselPrevious />
            <CarouselContent>
              {skills.map((skill, index) => (
                <CarouselItem key={skill.name} className="px-2 md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    layout
                    initial={{ scale: 0.8, opacity: 0, y: 50 }}
                    animate={{
                      scale: 1,
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: index * 0.1,
                        duration: 0.5,
                        type: 'spring',
                        stiffness: 100,
                        damping: 10
                      }
                    }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
                      transition: { duration: 0.3 }
                    }}
                    className="relative overflow-hidden rounded-lg shadow-xl p-6"
                    style={{
                      background: `linear-gradient(135deg, hsl(${(index * 50) % 360}, 70%, 50%), hsl(${
                        (index * 50 + 180) % 360
                      }, 70%, 50%))`
                    }}
                  >
                    <div className="flex items-center justify-center mb-4">
                      {typeof skill.icon === 'function' ? (
                        <skill.icon />
                      ) : (
                        <SimpleIcon icon={skill.icon} />
                      )}
                    </div>
                    <h3 className="text-center text-2xl font-semibold text-white mb-2">{skill.name}</h3>
                    <p className={`text-center text-white ${!showLevel ? '' : 'mb-4'}`}>{skill.description}</p> 
                    {showLevel && (
                      <div className="w-full bg-white/30 rounded-full h-2.5 overflow-hidden">
                        <motion.div
                          className="bg-primary h-2.5 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1 }}
                        />
                      </div>
                    )}
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext />
          </Carousel>
        </motion.div>
      </section>
    </>
  )
}
