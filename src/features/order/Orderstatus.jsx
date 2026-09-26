import Totalorderprice from "./Totalorderprice";
import Ordercard from "./Ordercard";
import { useFetcher } from "react-router-dom";
import { useEffect } from "react";

function Orderstatus({ data }) {
  const fetcher = useFetcher();
  const {
    cart,
    customer,
    estimatedDelivery,
    id,
    orderPrice,
    priority,
    priorityPrice,
    status,
  } = data;

  const isLoading = fetcher.state === "loading";
  const deliveryTime = new Date(estimatedDelivery);
  const currentTime = new Date();
  const timeLeft = deliveryTime - currentTime;
  const minutesLeft = Math.floor(timeLeft / (1000 * 60));
  const formattedDelivery = deliveryTime.toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });

  useEffect(() => {
    if (!fetcher.data && fetcher.state === "idle") fetcher.load("/menu");
  }, [fetcher]);

  return (
    <div className="mx-2 my-3">
      <div className="flex justify-between">
        <h1 className="text-lg font-semibold">Order #{id} status</h1>

        <span className="flex sm:flex-row flex-col justify-between gap-2 ">
          {priority && (
            <h1 className="uppercase w-22  bg-red-500 rounded-full font-semibold px-3 text-sm items-center flex text-stone-200">
              priority
            </h1>
          )}

          <h1 className="uppercase bg-green-500 rounded-full font-semibold px-3 w-fit text-sm sm:text-md items-center flex text-stone-100">
            {status} <span className="hidden mx-1 sm:block "> order</span>
          </h1>
        </span>
      </div>

      <h1 className="uppercase">
        Hello {customer} Your order is{" "}
        {minutesLeft < 1 ? "deliveried" : "on it's way!"}
      </h1>

      <div className="bg-stone-200/80 my-5 flex sm:justify-between py-3 px-1 sm:flex-row text-sm flex-col gap-2">
        <p>
          {minutesLeft < 1 ? "Delivered" : `Only ${minutesLeft} minutes left`}
        </p>
        {minutesLeft > 1 && (
          <p className="text-sm">(Estimated delivery: {formattedDelivery})</p>
        )}
      </div>

      <div className="border-t max-h-75 overflow-y-auto">
        {cart.map((item) => (
          <Ordercard
            pizza={item}
            key={item.pizzaId}
            isLoading={isLoading}
            ingredients={
              fetcher.data?.find((el) => el.id === item.pizzaId)?.ingredients ||
              []
            }
          />
        ))}
      </div>

      <Totalorderprice
        orderPrice={orderPrice}
        priorityPrice={priorityPrice}
        priority={priority}
        order={data}
      />
    </div>
  );
}

export default Orderstatus;
