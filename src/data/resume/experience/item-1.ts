import type { Experience } from '@/types/resume'

const props: Experience = {
  active: true,
  role: 'Alumni & research data scientist',
  company: {
    name: 'MIT Media Lab',
    description:
      'Interdisciplinary research lab that encourages the unconventional mixing and matching of seemingly disparate research areas',
    industries: [
      'Research',
      'Academy',
      'Technology',
      'Science',
      //
    ],
    url: 'https://www.media.mit.edu',
  },
  date: {
    start: {
      month: 'September',
      year: 2021,
    },
    end: {
      month: 'December',
      year: 2023,
    },
  },
  location: 'Cambridge, Massachusetts, US',
  description: [
    'Nullam urna magna, gravida eget facilisis eu, vulputate in enim. Maecenas tortor nisi, ultricies id hendrerit ac, condimentum ac enim; sed ultricies gravida ante sit amet bibendum',
    'Aenean ante mi, tincidunt gravida ornare ut, tempor ut erat, sed ultrices vel justo eu cursus, donec pulvinar porttitor arcu et vulputate, nunc vel mattis erat',
    'Quisque dapibus sodales felis, vel ornare tellus varius in, nulla mollis condimentum interdum, etiam gravida sapien sed placerat convallis, praesent at consectetur arcu',
    'Nunc dolor ipsum, lacinia eget molestie et, dapibus at sapien, duis quis tellus aliquam, ultricies erat vel, dignissim dui; morbi at magna justo, nunc non urna eu urna scelerisque fringilla eget in dolor',
  ],
  technologies: [
    'HTML',
    'CSS',
    'JavaScript',
    'Node.js',
    'MySQL',
    'Postgres',
    'Python',
    'Pandas',
    'SciPy',
    'Matplotlib',
  ],
}

export default props
