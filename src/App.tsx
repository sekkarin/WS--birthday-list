import Listbirthay, { PropsListBirthday } from "./components/Listbirthay";
import infoUserJson from "./assets/data.json";
import { useState } from "react";

function App() {
  const infoUser: PropsListBirthday[] = infoUserJson;
  const [userInfo, setUserInfo] = useState<PropsListBirthday[]>(infoUser);
  const handleClearAll = () => {
    setUserInfo([]);
  };
  return (
    <section className="bg-mainPrimary h-screen">
      <div className="container mx-auto pt-12 ">
        <div className="flex justify-center flex-col align-middle  bg-white mx-auto w-1/2 gap-3 drop-shadow-lg rounded-md p-1">
          <h6 className="text-2xl p-3">{infoUser.length} birthdays today</h6>
          {userInfo.length < 1 && <p className="text-center text-neutral-400">No Data</p>}
          {userInfo.length > 0 &&
            userInfo.map((item) => (
              <Listbirthay
                age={item.age}
                id={item.id}
                image={item.image}
                name={item.name}
              />
            ))}
          <button
            onClick={handleClearAll}
            className="hover:scale-y-105 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md text-white p-2 mx-3 mb-5"
          >
            clear All
          </button>
        </div>
      </div>
    </section>
  );
}

export default App;
