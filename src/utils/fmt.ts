import type { Date } from '@type/resume'

const formatDate = ({ month, year }: Date): string => `${month} ${year}`

export default {
  formatDate,
}

export { formatDate }
