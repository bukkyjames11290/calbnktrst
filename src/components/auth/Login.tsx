"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Image from "next/image";
import { mockAccounts } from "../mockData/MockData";
import Header from "../header/Header";

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userAccount = mockAccounts.find(
      (account) => account.holder.username === username
    );
    if (!userAccount) {
      setError("User not found");
      return;
    }
    if (userAccount.holder.password !== password) {
      setError("Invalid password");
      return;
    }
    // Store user data in localStorage
    localStorage.setItem("loggedInUser", JSON.stringify(userAccount));
    router.push("/dashboard");
  };

  return (
    <div className="h-screen bg-[#f2f2f2] relative">
      <Header />
      <div className="p-4 px-7 pt-14">
        <div className="mt-3">
          {error && (
            <p className="text-[20px] mb-4 text-center mx-auto max-w-[200px] rounded-md flex items-center justify-center text-red-600">
              {error}
            </p>
          )}
        </div>

        <div className="bg-white mx-auto rounded-xl  px-5 py-7">
          <h6 className="text-[#00205c] mb-7">Sign in to Personal Banking</h6>
          <form onSubmit={handleLogin}>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <label
                  htmlFor="Username"
                  className="text-[#5c5c5c] text-[16px]"
                >
                  Username
                </label>
                <input
                  type="text"
                  value={username}
                  className="p-4 rounded-[10px] text-[#5c5c5c] bg-transparent border border-gray-300 outline-none"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-3">
                <label
                  htmlFor="password"
                  className="text-[#5c5c5c] text-[16px]"
                >
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  className="p-4 rounded-[10px] text-[#5c5c5c] bg-transparent border border-gray-300 outline-none"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-col items-center justify-between gap-2 mt-6">
              <button
                type="submit"
                className="p-4 bg-[#f6a800] text-[#00205c] w-[200px] font-semibold rounded-full"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="w-full min-h-[70px] bg-[#00205c] text-white absolute bottom-0 z-50 flex flex-col gap-4 p-10">
        <p className="text-sm text-center">Equal Housing Lender, NMLS Registry 467014 or Swift ZFNBUS55</p>
        <p className="text-sm text-center">© 2025 Zions Bancorporation, N.A. All Rights Reserved.</p>
      </div>
    </div>
  );
}
