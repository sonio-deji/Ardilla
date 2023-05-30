import logo from "../assets/logo.png";
import frame from "../assets/Frame.png";
import {useLocation} from 'react-router-dom'

function Header() {
  const location = useLocation()

  interface PageColours {
    background: string;
    button: string;
  }
const pageColours: Record<string, PageColours> = {
  '/': {
    background: 'bg-[#240053] font-sans',
    button: 'bg-[#8807f7]'
  },
  '/interest-calculator': {
    background: 'bg-[#10001F] font-mono',
    button: 'bg-white text-[#3D0072;]'
  },
  '/career-page': {
    background: 'bg-[#8807F7]',
    button: 'bg-white text-[#8807F7]'
  }
}

 const {background, button} = pageColours[location.pathname]
  return (
    <header className={`${background} sticky top-0 z-10 h-[100px] text-white flex items-center`}>
      <nav className="max-w-[1250px] w-full mx-auto px-4 h-[50.07px] flex items-center justify-between">
        <div className="flex justify-between items-center">
          <a href="/">
            <img src={logo} alt="" />
          </a>
          <div className="ml-[120px] hidden lg:flex space-x-[47px] w-[458.7px]">
            <a href="/" className="text-14px">
              Products
            </a>
            <a href="/">
              Business{" "}
              <span className="ml-[4px] border-[1px] px-[1px] rounded-[3px] text-[13px]">
                Beta
              </span>
            </a>
            <a href="/" className="text-[14px]">
              Company
            </a>
            <a href="/" className="text-[14px]">
              Learn
            </a>
          </div>
        </div>
        <div className="lg:flex  hidden items-center h-full gap-[20px]">
          <div className="flex items-center gap-[30px]">
            <span className="mr text-[14px]">Sign In</span>
            <button className={`w-[176px] h-[50px] ${button} rounded-[79px]`}>
              Create Account
            </button>
          </div>
          <div className="h-[50px] w-[50px]">
            <img src={frame} alt="" className="w-full" />
          </div>
        </div>
        <div className="block lg:hidden">
          menu
        </div>
      </nav>
    </header>
  );
}

export default Header;
