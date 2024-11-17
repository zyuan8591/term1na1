import { doc } from 'firebase/firestore'
import { useDocument } from 'vuefire'
import { db } from '@/server/firebase'

export default function useFirebase(route: string) {
  const data = useDocument(doc(db, route))
  return { data }
}
