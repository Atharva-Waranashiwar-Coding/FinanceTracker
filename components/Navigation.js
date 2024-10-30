import { useContext } from "react";

import { authContext } from "@/lib/store/auth-context";

import { ImStatsBars } from "react-icons/im";

function Nav() {
  const { user, loading, logout } = useContext(authContext);

  return (
    <header className="container max-w-6xl px-6 py-6 mx-auto ">
      <div className="flex items-center justify-center gap-20">
        {/* User information */}
        {user && !loading && (
          <div className="flex items-center gap-2">
            {/* img */}
            <div className="h-[40px] w-[40px] rounded-full overflow-hidden">
              <img
                className="object-cover w-full h-full"
                src={user.photoURL}
                alt={user.displayName}
                referrerPolicy="no-referrer"
              />
            </div>

            {/* name */}
            <small>Hi, {user.displayName}!</small>
          </div>
        )}
          <h1 className=" text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 drop-shadow-lg tracking-wide mb-6">
            Expense Tracker
          </h1>

        {/* Right side of our navigation */}
        {user && !loading && (
          <nav className="flex items-center gap-4">
            <div>
              <a href="#stats">
                <ImStatsBars className="text-2xl" />
              </a>
            </div>
            <div>
              <button onClick={logout} className="btn btn-danger">
                Sign out
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Nav;
