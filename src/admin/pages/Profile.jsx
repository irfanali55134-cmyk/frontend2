import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import AdminLayout from "../layouts/AdminLayout";
import api from "../../services/api";

function Profile() {

  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    bio: "",
    github: "",
    linkedin: "",
    portfolio: "",
    image: "",
  });

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  const uploadImage = () => {
    if (!selectedImage) {
      Swal.fire("No Image Selected", "Please choose an image first.", "info");
      return;
    }

    const reader = new FileReader();

    reader.onloadend = () => {
      setProfile((prev) => ({
        ...prev,
        image: reader.result,
      }));

      Swal.fire({
        icon: "success",
        title: "Image Ready",
        text: "Click Save Changes to update your profile picture.",
        timer: 1800,
        showConfirmButton: false,
      });
    };

    reader.readAsDataURL(selectedImage);
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {

    try {

      const token = localStorage.getItem("token");

      const res = await api.get("/admin/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

setProfile(res.data.admin || res.data);
    } catch (error) {
      console.log(error);
    }

  };

  const handleChange = (e) => {

    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });

  };

  const saveProfile = async () => {

    try {

      const token = localStorage.getItem("token");

      const res = await api.put(
        "/admin/profile",
        profile,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      Swal.fire({
        icon: "success",
        title: res.data.message,
        timer: 1500,
        showConfirmButton: false,
      });

      localStorage.setItem(
        "admin",
        JSON.stringify(res.data.admin)
      );

      fetchProfile();

    } catch (error) {

      Swal.fire(
        "Error",
        "Unable to update profile",
        "error"
      );

    }

  };

    return (
    <AdminLayout>

      <h1 className="text-3xl font-bold">
        My Profile
      </h1>

      <div className="mt-8 bg-[#16213A] rounded-2xl border border-[#263353] p-8">

       <div className="flex flex-col items-center">

  <img
    src={profile?.image || "/irrrfan.png"}
    alt="Profile"
    className="w-40 h-40 rounded-full object-cover border-4 border-[#3ECF8E]"
  />

  <input
    type="file"
    accept="image/*"
    onChange={handleImageChange}
    className="mt-5"
  />

  <button
    onClick={uploadImage}
    className="mt-4 bg-[#3ECF8E] hover:bg-[#2db977] text-black px-6 py-3 rounded-xl font-semibold"
  >
    Upload Image
  </button>

</div>

        <div className="grid md:grid-cols-2 gap-5 mt-10">

          <input
            type="text"
            name="name"
            value={profile?.name}
            onChange={handleChange}
            placeholder="Name"
            className="bg-[#0B1220] border border-[#263353] rounded-xl p-3 outline-none"
          />

          <input
            type="email"
            value={profile?.email}
            disabled
            className="bg-[#0B1220] border border-[#263353] rounded-xl p-3 opacity-70"
          />

          <input
            type="text"
            name="phone"
            value={profile?.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="bg-[#0B1220] border border-[#263353] rounded-xl p-3 outline-none"
          />

          <input
            type="text"
            name="location"
            value={profile?.location}
            onChange={handleChange}
            placeholder="Location"
            className="bg-[#0B1220] border border-[#263353] rounded-xl p-3 outline-none"
          />

          <input
            type="text"
            name="github"
            value={profile?.github}
            onChange={handleChange}
            placeholder="Github URL"
            className="bg-[#0B1220] border border-[#263353] rounded-xl p-3 outline-none"
          />

          <input
            type="text"
            name="linkedin"
            value={profile?.linkedin}
            onChange={handleChange}
            placeholder="LinkedIn URL"
            className="bg-[#0B1220] border border-[#263353] rounded-xl p-3 outline-none"
          />

          <input
            type="text"
            name="portfolio"
            value={profile?.portfolio}
            onChange={handleChange}
            placeholder="Portfolio URL"
            className="bg-[#0B1220] border border-[#263353] rounded-xl p-3 outline-none md:col-span-2"
          />

          <textarea
            rows="5"
            name="bio"
            value={profile?.bio}
            onChange={handleChange}
            placeholder="Write About Yourself..."
            className="bg-[#0B1220] border border-[#263353] rounded-xl p-3 outline-none md:col-span-2"
          />

        </div>

        <button
          onClick={saveProfile}
          className="mt-8 bg-[#3ECF8E] hover:bg-[#2bbd75] text-black font-semibold px-8 py-3 rounded-xl"
        >
          Save Changes
        </button>

      </div>

    </AdminLayout>
  );
}

export default Profile;