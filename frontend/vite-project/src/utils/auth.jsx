import {jwtDecode} from "jwt-decode";

export const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  return !!token;
};

export const getUserRole = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    console.warn("No token found in localStorage");
    //  window.location.href = "/login"; 
    return null;
  }
  // if (token.split(".").length !== 3) {
  //   console.error("Invalid token format. Removing token from localStorage.");
  //   localStorage.removeItem("token"); // Remove the invalid token
  //   return null;
  // }
  try {
    const decoded = jwtDecode(token);
    // console.log(decoded)
    return decoded.role || "user"; // Default to 'user' if no role is found
  } catch (error) {
    console.error("Failed to decode token:", error);
    localStorage.removeItem("token"); // Clear invalid token
    window.location.href = "/login";
    return null;
  }
};

export const login = async (credentials) => {
  const response = await fetch("/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });
  if (!response.ok) {
    throw new Error("Invalid credentials");
  }
  const { token } = await response.json();
  const decoded = jwtDecode(token);
  localStorage.setItem("token", token);
  return decoded.role;
};

export const register = async (data) => {
  const response = await fetch("/api/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error("Registration failed");
  }
  return response.json();
};

export const logout = () => {
  localStorage.removeItem("token");
};
export const isNewUser = () => {
  const isNew = localStorage.getItem("isNewUser");
  if (isNew === null) {
    // Mark the user as "not new" for subsequent visits
    localStorage.setItem("isNewUser", "false");
    return true;
  }
  return false;
};
