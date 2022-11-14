import { v4 } from 'uuid'
export const makeFragmentId = () => v4().toString().split('-').join('')