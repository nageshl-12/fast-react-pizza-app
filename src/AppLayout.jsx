import Header from "./features/ui/components/Header";
import { Outlet, useNavigation } from "react-router-dom";
import CartPreview from "./features/cart/CartPreview";
import SearchOrder from "./features/order/SearchOrder";
import Username from "./features/user/Username";
import Loader from "./features/ui/components/Loader";

function AppLayout() {
  const { state } = useNavigation();

  const isLoading = state === "loading";
  const isSubmitting = state === "submitting";
  return (
    <div className="grid h-screen min-h-0 grid-rows-[auto_1fr_auto]">
      {(isLoading || isSubmitting) && <Loader />}
      <header className="flex justify-between bg-yellow-400 px-3 py-3 items-center sticky top-0 sm:static">
        <Header />
        <SearchOrder />

        <Username />
      </header>
      <main className="max-w-3xl mx-auto min-h-0 w-full overflow-y-auto  ">
        <Outlet />
      </main>
      <footer className="sticky bottom-[0.1px]  sm:static">
        <CartPreview />
      </footer>
    </div>
  );
}

export default AppLayout;
