"use client";

import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SignUpForm() {
  const router = useRouter();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isShowPassword1, setIsShowPassword1] = useState(false);
  const [isShowPassword2, setIsShowPassword2] = useState(false);

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      router.push("/");
    }
  }, []);
  const handleSignUp = async () => {
    try {
      if (!userName || !email || !password) {
        alert("Username or email or password required");
        return;
      }
      if (password != confirmPassword) {
        alert("Password and Confirm Password are not same!");
        return;
      }
      const res = await fetch("https://reqres.in/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userName, email, password }),
      });
      if (!res.ok) {
        if (res.status === 400) {
          const data = await res.json();
          if (data && data.error) {
            console.log(data.error);
            alert(`Failed Login: ${data.error} `);
          } else {
            alert("Failed Login. Try again");
          }
        } else {
          throw new Error("Fail to fetch data");
        }
      }
      console.log(res);
      const data = await res.json();
      console.log(data);

      if (data && data.token) {
        localStorage.setItem("token", data.token);
        alert("Login successful!");
        router.push("/");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <div className="w-[340px] flex flex-col">
        {/* User Name  */}
        <h1 className="text-[12px] mt-4">Username</h1>
        <input
          className="rounded-lg border-2 border-[#555FD9] bg-white h-10 px-3 focus:outline-none hover:bg-[#f0f0f0]"
          type="text"
          placeholder="Enter you username .."
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />

        {/* Email  */}
        <h1 className="text-[12px] mt-4">Email address</h1>
        <input
          className="rounded-lg border-2 border-[#555FD9] bg-white h-10 px-3 focus:outline-none hover:bg-[#f0f0f0]"
          type="text"
          placeholder="Enter you email address .."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {/* Password  */}
        <div className="flex flex-row justify-between mt-9">
          <h1 className="text-[12px] ">Password</h1>
          <div
            className="flex cursor-pointer"
            onClick={() => setIsShowPassword1(!isShowPassword1)}
          >
            {isShowPassword1 ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-eye"
                viewBox="0 0 16 16"
              >
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                className="mt-[2px]"
              >
                <path
                  d="M8.00001 10.6667C9.84 10.6667 11.3333 9.17333 11.3333 7.33333C11.3333 6.99333 11.2667 6.66667 11.1733 6.36L13.2133 4.32C14.14 5.14 14.8733 6.16667 15.3333 7.34C14.18 10.26 11.3333 12.3333 8.00001 12.3333C7.15334 12.3333 6.34 12.2 5.57334 11.9533L7.02001 10.5067C7.33334 10.6 7.66001 10.6667 8.00001 10.6667ZM1.80667 12.8933C1.54667 12.6333 1.54667 12.2133 1.80667 11.9533L3.12001 10.64C2.04 9.78 1.18001 8.64667 0.666672 7.33333C1.82001 4.40667 4.66667 2.33333 8.00001 2.33333C9.01334 2.33333 9.98001 2.53333 10.8733 2.88L12.6867 1.06667C12.9467 0.806666 13.3667 0.806666 13.6267 1.06667C13.8867 1.32667 13.8867 1.74667 13.6267 2.00667L2.75334 12.8933C2.49334 13.1533 2.06667 13.1533 1.80667 12.8933ZM8.00001 4C6.16001 4 4.66667 5.49333 4.66667 7.33333C4.66667 7.84667 4.78667 8.33333 4.99334 8.76L6.04001 7.71333C6.02001 7.59333 6.00001 7.46667 6.00001 7.33333C6.00001 6.22667 6.89334 5.33333 8.00001 5.33333C8.13334 5.33333 8.25334 5.35333 8.38 5.38L9.42667 4.33333C8.99334 4.12 8.51334 4 8.00001 4ZM9.98001 7.55333C9.88001 8.48667 9.14667 9.21333 8.22001 9.31333L9.98001 7.55333Z"
                  fill="black"
                />
              </svg>
            )}
            <p className="text-[12px]">Hide</p>
          </div>
        </div>
        <input
          className="rounded-lg border-2 border-[#555FD9] bg-white h-10 px-3 focus:outline-none hover:bg-[#f0f0f0]"
          type={isShowPassword1 ? "text" : "password"}
          placeholder="Enter your password .."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {/* Confirm Password */}
        <div className="flex flex-row justify-between mt-9">
          <h1 className="text-[12px] ">Confirm Password</h1>
          <div
            className="flex cursor-pointer"
            onClick={() => setIsShowPassword2(!isShowPassword2)}
          >
            {isShowPassword2 ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-eye"
                viewBox="0 0 16 16"
              >
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                className="mt-[2px]"
              >
                <path
                  d="M8.00001 10.6667C9.84 10.6667 11.3333 9.17333 11.3333 7.33333C11.3333 6.99333 11.2667 6.66667 11.1733 6.36L13.2133 4.32C14.14 5.14 14.8733 6.16667 15.3333 7.34C14.18 10.26 11.3333 12.3333 8.00001 12.3333C7.15334 12.3333 6.34 12.2 5.57334 11.9533L7.02001 10.5067C7.33334 10.6 7.66001 10.6667 8.00001 10.6667ZM1.80667 12.8933C1.54667 12.6333 1.54667 12.2133 1.80667 11.9533L3.12001 10.64C2.04 9.78 1.18001 8.64667 0.666672 7.33333C1.82001 4.40667 4.66667 2.33333 8.00001 2.33333C9.01334 2.33333 9.98001 2.53333 10.8733 2.88L12.6867 1.06667C12.9467 0.806666 13.3667 0.806666 13.6267 1.06667C13.8867 1.32667 13.8867 1.74667 13.6267 2.00667L2.75334 12.8933C2.49334 13.1533 2.06667 13.1533 1.80667 12.8933ZM8.00001 4C6.16001 4 4.66667 5.49333 4.66667 7.33333C4.66667 7.84667 4.78667 8.33333 4.99334 8.76L6.04001 7.71333C6.02001 7.59333 6.00001 7.46667 6.00001 7.33333C6.00001 6.22667 6.89334 5.33333 8.00001 5.33333C8.13334 5.33333 8.25334 5.35333 8.38 5.38L9.42667 4.33333C8.99334 4.12 8.51334 4 8.00001 4ZM9.98001 7.55333C9.88001 8.48667 9.14667 9.21333 8.22001 9.31333L9.98001 7.55333Z"
                  fill="black"
                />
              </svg>
            )}
            <p className="text-[12px]">Hide</p>
          </div>
        </div>
        <input
          className="rounded-lg border-2 border-[#555FD9] bg-white h-10 px-3 focus:outline-none hover:bg-[#f0f0f0]"
          type={isShowPassword2 ? "text" : "password"}
          placeholder="Enter your confirm password .."
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <button
          className="flex w-[340px] h-[36px] my-[19px] justify-center items-center text-white font-bold rounded-md bg-[#555FD9] hover:bg-[#1e2bb7] active:bg-[#040c6e]"
          onClick={() => handleSignUp()}
        >
          Sign up
        </button>

        <div className="border-b-[1px] border-black mt-4"></div>
        <h1 className="text-center py-3">Already have an account?</h1>
        <button
          className="flex w-[340px] h-[36px] mb-[19px] justify-center items-center text-white font-bold rounded-md bg-[#555FD9] hover:bg-[#1e2bb7] active:bg-[#040c6e]"
          onClick={() => router.push("/login")}
        >
          Log in
        </button>
      </div>
    </>
  );
}
