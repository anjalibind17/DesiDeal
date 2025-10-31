"use client";
import React, { useEffect, useState } from "react";
import { assets, orderDummyData } from "@/assets/assets";
import Image from "next/image";
import { useAppContext } from "@/context/AppContext";
import Footer from "@/components/seller/Footer";
import Loading from "@/components/Loading";
import Navbar from "@/components/Navbar";

const Orders = () => {
  const { currency } = useAppContext();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchSellerOrders = async () => {
    setOrders(orderDummyData);
    setLoading(false);
  };

  useEffect(() => {
    fetchSellerOrders();
  }, []);

  return (
    <>
      {/* Navbar added */}
      <Navbar />

      {/* Main container */}
      <div className="flex-1 min-h-screen overflow-y-auto flex flex-col justify-between text-sm bg-gray-50 pt-28 pb-10 px-4 md:px-10">
        {loading ? (
          <Loading />
        ) : (
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Orders
            </h2>

            <div className="max-w-5xl mx-auto bg-white shadow-md rounded-xl divide-y divide-gray-200">
              {orders.map((order, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row gap-5 justify-between p-6"
                >
                  {/* Order Items */}
                  <div className="flex-1 flex gap-5 max-w-80">
                    <Image
                      className="w-16 h-16 object-cover"
                      src={assets.box_icon}
                      alt="box_icon"
                    />
                    <p className="flex flex-col gap-2 text-gray-700">
                      <span className="font-medium">
                        {order.items
                          .map(
                            (item) => item.product.name + ` x ${item.quantity}`
                          )
                          .join(", ")}
                      </span>
                      <span>Items: {order.items.length}</span>
                    </p>
                  </div>

                  {/* Address */}
                  <div className="text-gray-600">
                    <p>
                      <span className="font-medium">
                        {order.address.fullName}
                      </span>
                      <br />
                      <span>{order.address.area}</span>
                      <br />
                      <span>{`${order.address.city}, ${order.address.state}`}</span>
                      <br />
                      <span>{order.address.phoneNumber}</span>
                    </p>
                  </div>

                  {/* Amount */}
                  <p className="font-semibold my-auto text-gray-800">
                    {currency}
                    {order.amount}
                  </p>

                  {/* Payment Info */}
                  <div className="text-gray-600">
                    <p className="flex flex-col">
                      <span>Method: COD</span>
                      <span>
                        Date: {new Date(order.date).toLocaleDateString()}
                      </span>
                      <span className="text-red-500 font-medium">
                        Payment: Pending
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        <Footer />
      </div>
    </>
  );
};

export default Orders;
