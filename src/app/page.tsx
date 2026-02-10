import {redirect} from 'next/navigation';

export default function RootPage() {
  redirect('/en'); // أو اللغة التي تفضلها كبداية
}