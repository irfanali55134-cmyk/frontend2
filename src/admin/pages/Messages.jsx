import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Search, Trash2, Eye } from "lucide-react";
import api from "../../services/api";
import AdminLayout from "../layouts/AdminLayout";

function Messages() {
  const [messages, setMessages] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedMessage, setSelectedMessage] = useState(null);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await api.get("/contact", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setMessages(res.data.messages || []);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteMessage = async (id) => {
    const result = await Swal.fire({
      title: "Delete Message?",
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#EF4444",
      cancelButtonColor: "#6B7280",
      confirmButtonText: "Delete",
    });

    if (!result.isConfirmed) return;

    try {
      const token = localStorage.getItem("token");

      await api.delete(`/contact/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      Swal.fire(
        "Deleted!",
        "Message deleted successfully.",
        "success"
      );

      fetchMessages();
    } catch (error) {
      Swal.fire(
        "Error",
        "Unable to delete message.",
        "error"
      );
    }
  };

  const markRead = async (id) => {
    try {
      const token = localStorage.getItem("token");

      await api.put(
        `/contact/${id}/read`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      fetchMessages();
    } catch (error) {
      console.log(error);
    }
  };

  const filteredMessages = messages.filter((msg) =>
    msg.name.toLowerCase().includes(search.toLowerCase()) ||
    msg.email.toLowerCase().includes(search.toLowerCase()) ||
    msg.message.toLowerCase().includes(search.toLowerCase())
  );

  const totalMessages = messages.length;

  const newMessages = messages.filter(
    (msg) => msg.status === "New"
  ).length;

  const readMessages = messages.filter(
    (msg) => msg.status === "Read"
  ).length;

  return (
    <AdminLayout>

      <h1 className="text-2xl md:text-3xl font-bold text-white">
        Contact Messages
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-8">

        <div className="bg-[#16213A] border border-[#263353] rounded-2xl p-6">
          <h3 className="text-gray-400">
            Total Messages
          </h3>

          <h1 className="text-4xl font-bold mt-3">
            {totalMessages}
          </h1>
        </div>

        <div className="bg-[#16213A] border border-[#263353] rounded-2xl p-6">
          <h3 className="text-gray-400">
            New Messages
          </h3>

          <h1 className="text-4xl font-bold text-red-400 mt-3">
            {newMessages}
          </h1>
        </div>

        <div className="bg-[#16213A] border border-[#263353] rounded-2xl p-6">
          <h3 className="text-gray-400">
            Read Messages
          </h3>

          <h1 className="text-4xl font-bold text-green-400 mt-3">
            {readMessages}
          </h1>
        </div>

      </div>

      <div className="relative mb-6">

        <Search
          size={20}
          className="absolute left-3 top-3 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-[#16213A] border border-[#263353] rounded-xl pl-10 pr-4 py-3 text-white outline-none"
        />

      </div>
            <div className="overflow-x-auto rounded-xl border border-[#263353]">

        <table className="min-w-[950px] w-full">

          <thead className="bg-[#16213A]">

            <tr>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Message</th>
              <th className="p-4 text-left">Date</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-center">Action</th>
            </tr>

          </thead>

          <tbody>

            {filteredMessages.length === 0 ? (
              <tr>
                <td
                  colSpan="6"
                  className="text-center py-8 text-gray-400"
                >
                  No Messages Found
                </td>
              </tr>
            ) : (
              filteredMessages.map((msg) => (
                <tr
                  key={msg._id}
                  className="border-t border-[#263353] hover:bg-[#1d2b4a] transition-all"
                >
                  <td className="p-4">{msg.name}</td>

                  <td className="p-4">
                    <a
                      href={`mailto:${msg.email}`}
                      className="text-blue-400 hover:underline"
                    >
                      {msg.email}
                    </a>
                  </td>

                  <td className="p-4 max-w-xs truncate">
                    {msg.message}
                  </td>

                  <td className="p-4">
                    {new Date(msg.createdAt).toLocaleDateString()}
                  </td>

                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        msg.status === "New"
                          ? "bg-red-500/20 text-red-400"
                          : "bg-green-500/20 text-green-400"
                      }`}
                    >
                      {msg.status}
                    </span>
                  </td>

                  <td className="p-4 text-center">

                    <button
                      onClick={() => {
                        setSelectedMessage(msg);

                        if (msg.status === "New") {
                          markRead(msg._id);
                        }
                      }}
                      className="bg-blue-500 hover:bg-blue-600 p-2 rounded-lg mr-2 transition"
                    >
                      <Eye size={18} />
                    </button>

                    <button
                      onClick={() => deleteMessage(msg._id)}
                      className="bg-red-500 hover:bg-red-600 p-2 rounded-lg transition"
                    >
                      <Trash2 size={18} />
                    </button>

                  </td>

                </tr>
              ))
            )}

          </tbody>

        </table>

      </div>

      {selectedMessage && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 p-4">

          <div className="bg-[#16213A] border border-[#263353] rounded-2xl w-full max-w-3xl p-8">

            <h2 className="text-2xl font-bold mb-6">
              📩 Message Details
            </h2>

            <div className="space-y-5">

              <div>
                <p className="text-[#3ECF8E] font-semibold">
                  Name
                </p>

                <p>{selectedMessage.name}</p>
              </div>

              <div>
                <p className="text-[#3ECF8E] font-semibold">
                  Email
                </p>

                <a
                  href={`mailto:${selectedMessage.email}`}
                  className="text-blue-400"
                >
                  {selectedMessage.email}
                </a>
              </div>

              <div>
                <p className="text-[#3ECF8E] font-semibold">
                  Date
                </p>

                <p>
                  {new Date(
                    selectedMessage.createdAt
                  ).toLocaleString()}
                </p>
              </div>

              <div>
                <p className="text-[#3ECF8E] font-semibold">
                  Message
                </p>

                <div className="bg-[#0B1220] rounded-xl border border-[#263353] p-4 mt-2 leading-7">
                  {selectedMessage.message}
                </div>
              </div>

            </div>

            <div className="flex justify-end mt-8">

              <button
                onClick={() => setSelectedMessage(null)}
                className="bg-[#3ECF8E] hover:bg-[#34b877] text-black font-semibold px-6 py-2 rounded-xl transition"
              >
                Close
              </button>

            </div>

          </div>

        </div>
      )}

    </AdminLayout>
  );
}

export default Messages;