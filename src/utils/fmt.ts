import type { Date } from '@/types/resume'

const formatDate = ({ month, year }: Date): string => `${month} ${year}`

export default {
  formatDate,
}

export { formatDate }
