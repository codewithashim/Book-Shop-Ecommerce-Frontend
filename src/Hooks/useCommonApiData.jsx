import {useContext} from 'react';
import { AuthContext } from '../Context/UserContext';
import Swal from "sweetalert2";
import { useRouter } from "next/router";

const useCommonApiData = () => {
    const {logOut} = useContext(AuthContext) 
    const router = useRouter();

    const handleLogout = () => {
        logOut()
          .then(() => {
            Swal.fire({
              position: "top-end",
              timerProgressBar: true,
              title: "Successfully Logout Done !",
              iconColor: "#ED1C24",
              toast: true,
              icon: "success",
              showClass: {
                popup: "animate__animated animate__fadeInRight",
              },
              hideClass: {
                popup: "animate__animated animate__fadeOutRight",
              },
              customClass: {
                confirmButton: "blue",
              },
              showConfirmButton: false,
              timer: 3500,
            });
            localStorage.removeItem("user-uid");
            router.push("/");
          })
          .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something warn!",
              confirmButtonColor: "#0077b6",
            });
          });
      };

    return{
        handleLogout
    }
};

export default useCommonApiData;