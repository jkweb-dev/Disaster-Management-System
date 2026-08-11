"use client";

import { useState } from "react";

import AdminSidebar from "@/components/Admin/sideBar";
import AdminTopbar from "@/components/Admin/topBar";

const AdminLayout = ({ children }) => {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (

        <div className="flex h-screen bg-gray-50">

            <AdminSidebar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
            />

            <div className="flex flex-1 flex-col">

                <AdminTopbar
                    setSidebarOpen={setSidebarOpen}
                />

                <main className="flex-1 p-6  overflow-y-auto">

                    {children}

                </main>

            </div>

            {
                sidebarOpen && (

                    <div
                        onClick={() => setSidebarOpen(false)}
                        className="
                        fixed
                        inset-0
                        z-40
                        bg-black/50
                        lg:hidden
                        "
                    />

                )
            }

        </div>

    );

};

export default AdminLayout;