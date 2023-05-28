import logo from "../assets/logo.png";
import frame from "../assets/Frame.png";
function Header() {
  return (
    <header className="bg-[#240053]  h-[100px] text-white flex items-center">
      <nav className="w-[1250px] mx-auto px-4 h-[50.07px] flex items-center justify-between">
        <div className="flex justify-between items-center">
          <a href="/">
            <img src={logo} alt="" />
          </a>
          <div className="ml-[120px] space-x-[47px] w-[458.7px]">
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
        <div className="flex items-center h-full gap-[20px]">
          <div className="flex items-center gap-[30px]">
            <span className="mr text-[14px]">Sign In</span>
            <button className="w-[176px] h-[50px] bg-[#8807F7] rounded-[79px]">
              Create Account
            </button>
          </div>
          <div className="h-[50px] w-[50px]">
            <img src={frame} alt="" className="w-full" />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
