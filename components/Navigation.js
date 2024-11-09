import { useContext, useState } from "react";
import { authContext } from "@/lib/store/auth-context";
import { ImStatsBars } from "react-icons/im";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Nav() {
  const { user, logout } = useContext(authContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="container max-w-12xl px-6 py-4 mx-auto items-center">
      <div className="flex justify-between items-center">
        {/* Logo and Brand Name */}
        <div className="flex items-center gap-2">
          {user && (
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full overflow-hidden">
                <img
                  src={user.photoURL}
                  alt="User"
                  className="object-cover w-full h-full"
                  referrerPolicy="no-referrer"
                />
              </div>
              {}
              <p className="px-2 md:block">Hi, {user.displayName}</p>
            </div>
          )}
        </div>
        {/* Right side - Toggle button and collapsible menu */}
        {user &&(
          <div>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-3xl p-3 md:hidden">
              {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            </button>

            {/* Collapsible Menu */}
            <div className={`absolute right-5 mt-2 py-2 w-100 bg-white rounded-lg shadow-xl ${
                isMenuOpen ? "block" : "hidden"
              } md:block md:static md:shadow-none md:bg-transparent`}>
              <ul className="flex flex-col md:flex-row items-center">
                <li className="px-4 py-2 hover:bg-gray-100 md:hover:bg-transparent">
                  <a href="#stats" className="flex items-center gap-2 text-lg">
                    <ImStatsBars className="text-2xl" />
                    <span>Stats</span>
                  </a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 md:hover:bg-transparent">
                  <button onClick={logout} className="btn btn-danger">
                    Sign out
                  </button>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>

      <div style={{
        fontSize: '3.75rem', // Equivalent to text-6xl in Tailwind
        fontWeight: 'bold',
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundImage: 'linear-gradient(to right, #b388ff, #ff8a80, #ff8a80)',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
        textShadow: '1px 1px 6px rgba(0, 0, 0, 0.3)', // Soft subtle shadow
        marginBottom: "20px"
      }}>
        FiscallyFit
      </div>


    </header>
  );
}

export default Nav;
