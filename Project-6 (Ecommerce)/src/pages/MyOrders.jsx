import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!user) return;

    const storedOrders = JSON.parse(localStorage.getItem(`orders_${user.id}`)) || [];
    setOrders(storedOrders);
  }, []);

  return (
    <>
      <Header />
      <Navbar />

      <div className="w-[90%] mx-auto py-12 min-h-[60vh]">
        <h2 className="text-2xl font-semibold mb-8">My Orders</h2>

        {/* 🔴 NO ORDERS */}
        {orders.length === 0 && (
          <div className="text-center text-gray-500 text-lg">
            No orders placed yet 🛒
          </div>
        )}

        {/* 🟢 ORDERS LIST */}
        {orders.length > 0 &&
          orders.map((order) => (
            <div
              key={order.id}
              className="border rounded p-6 mb-8 space-y-6"
            >
              {/* ORDER INFO */}
              <div className="flex justify-between text-sm text-gray-600">
                <span>Order Date: {order.date}</span>
                <span>Payment: {order.payment || "N/A"}</span>
              </div>

              <hr />

              {/* ITEMS */}
              <div className="space-y-4">
                {order.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center"
                  >
                    <div className="flex gap-4 items-center">
                      <img
                        src={item.thumbnail}
                        alt=""
                        className="w-14 h-14 object-cover"
                      />
                      <div>
                        <p className="font-medium">{item.title}</p>
                        <p className="text-sm text-gray-500">
                          Qty: {item.quantity}
                        </p>
                      </div>
                    </div>

                    <span className="font-medium">
                      ₹{Math.floor(item.price * item.quantity * 89.93).toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>

              <hr />

              {/* TOTAL */}
              <div className="flex justify-between font-semibold text-lg">
                <span>Total Amount</span>
                <span>₹{Math.floor(order.total).toLocaleString()}</span>
              </div>

              <hr />

              {/* BILLING */}
              <div className="text-sm text-gray-600">
                <p>
                  <strong>Name:</strong> {order.billing.firstName}
                </p>
                <p>
                  <strong>Phone:</strong> {order.billing.phone}
                </p>
                <p>
                  <strong>Email:</strong> {order.billing.email}
                </p>
                <p>
                  <strong>Address:</strong> {order.billing.streetAddress}, {order.billing.town}
                </p>
              </div>
            </div>
          ))}
      </div>

      <Footer />
    </>
  );
};

export default MyOrders;
