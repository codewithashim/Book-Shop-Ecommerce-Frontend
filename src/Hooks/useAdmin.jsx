// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../Context/UserContext";
// import { isAdminUrl } from "@/src/Utils/Urls/AuthUrl";


// const useAdmin = () => {
//   const [isAdmin, setIsAdmin] = useState(false);
//   const [isAdminLoading, setIsAdminLoading] = useState(true);
//   const { user } = useContext(AuthContext);

//   console.log(isAdmin)

//   useEffect(() => {
//     if (user?.email) {
//       fetch(isAdminUrl(user?.email))
//         .then((res) => res.json())
//         .then((data) => {
//           const admin = data?.role === 'admin'




//         });
//     }
//   }, [user?.email, setIsAdmin]);
//   return [isAdmin, isAdminLoading];
// };

// export default useAdmin;

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/UserContext";
import { isAdminUrl } from "@/src/Utils/Urls/AuthUrl";

const useAdmin = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAdminLoading, setIsAdminLoading] = useState(true);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user?.email) {
      fetch(isAdminUrl(user?.email))
        .then((res) => res.json())
        .then((data) => {
          if(data?.data?.role === 'admin'){
            setIsAdmin(true); 
            setIsAdminLoading(false); 
          }
        })
        .catch((error) => {
          console.error("Error fetching admin data:", error);
          setIsAdminLoading(false); 
        });
    }
  }, [user?.email]);

  return [isAdmin, isAdminLoading];
};

export default useAdmin;
