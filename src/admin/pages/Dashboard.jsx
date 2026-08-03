import AdminLayout from "../layouts/AdminLayout";
import DashboardCard from "../components/DashboardCard";
import { useEffect, useState } from "react";
import api from "../../services/api";

import {
  MessageSquare,
  User,
  Activity,
  Server,
} from "lucide-react";

function Dashboard() {

  const [stats, setStats] = useState({
    totalMessages: 0,
    todayMessages: 0,
    totalAdmins: 0,
    serverStatus: "Online",
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await api.get("/dashboard/stats", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setStats(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AdminLayout>

      <h1 className="text-4xl font-bold">
        Dashboard
      </h1>

      <p className="text-gray-400 mt-2">
        Welcome back, Admin 👋
      </p>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mt-10">

        <DashboardCard
          title="Total Messages"
          value={stats.totalMessages}
          color="#3ECF8E"
          icon={<MessageSquare size={28} />}
        />

        <DashboardCard
          title="Today's Messages"
          value={stats.todayMessages}
          color="#3B82F6"
          icon={<Activity size={28} />}
        />

        <DashboardCard
          title="Total Admin"
          value={stats.totalAdmins}
          color="#F59E0B"
          icon={<User size={28} />}
        />

        <DashboardCard
          title="Server Status"
          value={stats.serverStatus}
          color="#EF4444"
          icon={<Server size={28} />}
        />

      </div>

    </AdminLayout>
  );
}

export default Dashboard;