import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DataContext from "@/src/Context/DataContext";
import "@/styles/globals.scss";
import UserContext from "@/src/Context/UserContext";
import Preloader from "@/src/Shared/Preloader/Preloader";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, [loader]);
  return (
    <>
      {loader && <Preloader />}
      <QueryClientProvider client={queryClient}>
        <DataContext>
          <UserContext>
            <Component {...pageProps} />
          </UserContext>
        </DataContext>
      </QueryClientProvider>
    </>
  );
}
