import { Link } from 'react-router-dom'
import { useAtomValue } from 'jotai';
import { loginAtom } from '../20/loginAtom';

interface PageMapItem {
  name: string;
  url: string;
  isHide?: boolean;
}

interface HeaderProps {
  pageMap: PageMapItem[];
}

export default function Header({ pageMap }: HeaderProps) {

  const isLogin = useAtomValue(loginAtom)

  return (
    <header className='bg-blue-600 text-white shadow-md'>
      <nav className='container h-16 mx-auto flex justify-between items-center'>
        <div className='text-2xl font-bold text-blue-50'>KDT03</div>
        <ul className='flex space-x-4'>
          {
            isLogin && pageMap.map((item, index) => {
              return !item["isHide"] ? <li key={"headerli" + index} className='hover:font-bold hover:cursor-pointer'>
                <Link to={item["url"]}>
                  {item["name"]}
                </Link>
              </li> : ""
            })
          }
        </ul>
      </nav>
    </header>
  )
}