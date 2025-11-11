export const tableRows = [
  { id: 'mod-01', title: 'Foundations of insight', owner: 'Avery', status: 'Live', learners: 1280 },
  { id: 'mod-02', title: 'Research workflows', owner: 'Mina', status: 'In review', learners: 864 },
  { id: 'mod-03', title: 'Storytelling lab', owner: 'Theo', status: 'Draft', learners: 642 },
]

export const kanbanColumns = [
  {
    id: 'backlog',
    title: 'Backlog',
    items: ['Course brief template', 'Interview snippets'],
  },
  {
    id: 'active',
    title: 'In build',
    items: ['Module 4 worksheets', 'Lesson promo set'],
  },
  {
    id: 'review',
    title: 'Review',
    items: ['Capstone checklist'],
  },
]

export const calendarEvents = [
  { id: 1, day: 'Mon', label: 'Kickoff AMA', time: '9:00a' },
  { id: 2, day: 'Wed', label: 'Studio recording', time: '1:00p' },
  { id: 3, day: 'Fri', label: 'Cohort retro', time: '11:30a' },
]

export const announcements = [
  {
    id: 'toast-1',
    title: 'Captions ready',
    body: 'Lesson 3 captions passed QA — publish when ready.',
    tone: 'success',
  },
  {
    id: 'toast-2',
    title: 'Action required',
    body: 'Upload compliance doc for Module 2.',
    tone: 'warning',
  },
]
