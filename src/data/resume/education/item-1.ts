import type { Education } from '@/types/resume'

const props: Education = {
  active: false,
  institution: {
    title: 'Massachusetts Institute of Technology: MIT',
    domain: 'Media Arts and Sciences (MAS)',
    description: [
      'Ut ultrices justo eu mi aliquam, porta elementum purus aliquet, sed sed rhoncus ipsum, ac convallis augue; integer nec ultrices est, praesent semper luctus metus sed bibendum',
      'Praesent eu tincidunt augue, phasellus lacinia felis nulla, sit amet molestie magna sodales vitae; fusce finibus ante nunc, id ultricies metus accumsan nec, proin sed rutrum diam, sed et interdum elit, a cursus mauris',
      'Quisque et pellentesque mauris, sit amet venenatis turpis; nulla facilisi, phasellus pharetra ex eget tortor feugiat, ut tincidunt nisl aliquam; pellentesque sed hendrerit nisl, sit amet facilisis justo',
      //
    ],
  },
  date: {
    start: { month: 'September', year: 2018 },
    end: { month: 'August', year: 2021 },
  },
}

export default props
