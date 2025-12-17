import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";
import bcrypt from "bcryptjs";

const Login = () => {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const SubmitHandler = (e) => {
    e.preventDefault();

    /* ✅ GET ALL REGISTERED USERS */
    const users =
      JSON.parse(localStorage.getItem("registeredUsers")) || [];

    if (users.length === 0) {
      toast.error("Please Sign Up First");
      return;
    }

    /* ================= ADMIN LOGIN ================= */
    if (email === "admin@123" && password === "123") {
      const adminUser = {
        id: "admin_1",
        name: "Admin",
        email: "admin@123",
        role: "admin",
      };

      localStorage.setItem(
        "loggedInUser",
        JSON.stringify(adminUser)
      );

      toast.success("Admin Login Success");
      navigate("/");
      return;
    }

    /* ================= NORMAL USER LOGIN ================= */
    const user = users.find((u) => u.email === email);

    if (!user) {
      toast.error("User not found");
      return;
    }

    const isMatch = bcrypt.compareSync(password, user.password);

    if (!isMatch) {
      toast.error("Invalid password");
      return;
    }

    /* ✅ SAVE LOGGED IN USER WITH ID */
    const loggedUser = {
      id: user.id,          // 🔥 VERY IMPORTANT
      name: user.name,
      email: user.email,
      role: "user",
    };

    localStorage.setItem(
      "loggedInUser",
      JSON.stringify(loggedUser)
    );

    toast.success("Login Success");
    navigate("/");
  };

  return (
    <div>
      <form className="flex flex-col gap-5" onSubmit={SubmitHandler}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          className="border-b py-3 outline-none"
        />

        <div className="relative">
          <input
            type={visible ? "text" : "password"}
            placeholder="Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            className="border-b py-3 outline-none w-full"
          />
          <span
            className="absolute right-3 top-4 cursor-pointer"
            onClick={() => setVisible(!visible)}
          >
            {visible ? <FaEye /> : <FaEyeSlash />}
          </span>
        </div>

        <button className="bg-[#db4444] text-white py-3 rounded">
          Log in
        </button>

        {/* ================= GOOGLE LOGIN ================= */}
        <GoogleLogin
          onSuccess={(res) => {
            const gUser = jwtDecode(res.credential);

            const googleUser = {
              id: gUser.sub,          // ✅ UNIQUE ID
              name: gUser.name,
              email: gUser.email,
              img: gUser.picture,
              role: "user",
            };

            /* SAVE IN REGISTERED USERS IF NOT EXISTS */
            const users =
              JSON.parse(localStorage.getItem("registeredUsers")) || [];

            const exists = users.find(
              (u) => u.email === googleUser.email
            );

            if (!exists) {
              users.push(googleUser);
              localStorage.setItem(
                "registeredUsers",
                JSON.stringify(users)
              );
            }

            localStorage.setItem(
              "loggedInUser",
              JSON.stringify(googleUser)
            );

            toast.success("Google Login Success");
            navigate("/");
          }}
          onError={() => toast.error("Google Login Failed")}
        />
      </form>
    </div>
  );
};

export default Login;
