"use client";
import AuthProvider from "@/context/AuthContext";
import AuthenticatedLayout from "./ProtectedLayout";

const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthProvider>
      <AuthenticatedLayout>{children}</AuthenticatedLayout>
    </AuthProvider>
  );
};

export default AppWrapper;
