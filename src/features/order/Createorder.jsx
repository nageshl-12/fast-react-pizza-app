import store from "../../store";

import Button from "../ui/components/Button";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getCart, getTotalCartValue } from "../cart/cartReducer";
import { createOrder } from "../services/apiRestorent";
import { clearItem } from "../cart/cartReducer";
import { useState } from "react";
import { formatCurrency } from "../services/helperFunctions";
import { fetchAddres } from "../user/userReducer";
import Emptycart from "../cart/Emptycart";

const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );
function Createorder() {
  const { state } = useNavigation();
  const isSubmiting = state === "submitting";
  const [priority, setPriority] = useState(false);
  const formErrors = useActionData();
  const cart = useSelector(getCart);
  const totalCartPrice = useSelector(getTotalCartValue);
  const totalAmount = priority ? totalCartPrice * 1.21 : totalCartPrice;

  const {
    status: addresLoadingStatus,
    position,
    address,
    error: addresError,
  } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const isLoading = addresLoadingStatus === "loading";
  console.log(cart);

  if (cart.length === 0) return <Emptycart />;
  return (
    <div className="mx-2 my-2">
      <span className="font-semibold ml-2  ">Ready to order? Let's go!</span>
      <Form
        method="POST"
        className="mt-10 flex flex-col gap-5 w-full max-w-2xl"
      >
        <input type="hidden" name="cart" value={JSON.stringify(cart)} />
        <input
          type="hidden"
          name="addressData"
          value={
            position?.latitude && position?.longitude
              ? `latitude:${position.latitude},longitude:${position.longitude}`
              : ""
          }
        />
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
          <label className="shrink-0 sm:w-29">Full Name</label>
          <input
            required
            name="customer"
            className="px-5 py-2 w-full text-stone-700 border transition-all duration-300 border-stone-200 rounded-full focus:outline-none focus:ring focus:ring-yellow-400"
            type="text"
          />
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 ">
          <label className="shrink-0  sm:w-29">Phone number</label>
          <input
            required
            name="phone"
            className="px-5 py-2 w-full text-stone-700 border transition-all duration-300 border-stone-200 rounded-full focus:outline-none focus:ring focus:ring-yellow-400"
            type="tel"
          />

          {formErrors?.phone && (
            <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
              {formErrors.phone}
            </p>
          )}
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 relative">
          <label className="shrink-0  sm:w-29">Address</label>
          <input
            required
            name="address"
            defaultValue={address}
            className="px-5 w-full py-2 text-stone-700 border transition-all duration-300 border-stone-200 rounded-full focus:outline-none focus:ring focus:ring-yellow-400"
            type="text"
          />
          {addresLoadingStatus === "error" && (
            <p className=" sm:absolute sm:left-32 sm:top-10 sm:text-xs rounded-md bg-red-100 absolute top-16 mt-1 p-1 text-[10px] text-red-700">
              {addresError}
            </p>
          )}
          {!address && (
            <span className="absolute right-1 bottom-0.5 ">
              <Button
                htmlType="button"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(fetchAddres());
                }}
                type="normal"
              >
                Get Location
              </Button>
            </span>
          )}
        </div>
        <span className="space-x-3 items-center flex mx-2 my-2">
          <input
            type="checkbox"
            id="priority"
            name="priority"
            className="cursor-pointer accent-yellow-400 "
            onChange={() => setPriority(!priority)}
          />
          <label htmlFor="priority">
            Want to you give your order priority?
          </label>
        </span>
        <span>
          <button
            disabled={isSubmiting || isLoading}
            className=" py-2 px-5 font-semibold hover:bg-yellow-200 cursor-pointer rounded-full focus:ring-yellow-500 transition-all duration-300 bg-yellow-300 uppercase text-md focus:outline-none focus:ring focus:ring-offset-2"
            type="submit"
          >
            {isSubmiting
              ? "Placing order..."
              : `Order Now from ${formatCurrency(totalAmount)}`}
          </button>
        </span>
      </Form>
    </div>
  );
}

export default Createorder;

export async function createOrderAction({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "on",
  };

  const errors = {};

  if (!isValidPhone(order.phone)) {
    errors.phone =
      "Please give us your correct phone number. We might need it to contact you.";
  }

  if (Object.keys(errors).length > 0) return errors;

  const newOrder = await createOrder(order);

  store.dispatch(clearItem());

  return redirect(`/order/${newOrder.id}`);
}
