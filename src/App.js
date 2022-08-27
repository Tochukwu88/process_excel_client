import { useState, useEffect } from "react";
import Modal from "./components/modal";
import { getData } from "./utils/apiCalls";

function App() {
  const [data, setData] = useState([]);

  useEffect(async () => {
    const result = await getData();
    if (result.data && result.data.length > 0) {
      console.log(result.data.length);
      setData(result.data);
    }
  }, []);

  return (
    <div className=" grid grid-cols-1  w-full   place-items-center h-screen ">
      <div className="mt-5 ">
        <Modal />
        <div className="overflow-x-auto relative w-full shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  First name
                </th>
                <th scope="col" className="py-3 px-6">
                  Last name
                </th>
                <th scope="col" className="py-3 px-6">
                  Age
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => {
                return (
                  <tr
                    key={item?.id}
                    className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                  >
                    <td className="py-4 px-6">{item?.first_name}</td>
                    <td className="py-4 px-6">{item?.last_name}</td>
                    <td className="py-4 px-6">{item?.age}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
