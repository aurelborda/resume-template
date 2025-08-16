import type { PlainDate } from '@/types/resume'

const formatDate = ({ month, year }: PlainDate): string => `${month} ${year}`

export default {
  formatDate,
}

export { formatDate }
