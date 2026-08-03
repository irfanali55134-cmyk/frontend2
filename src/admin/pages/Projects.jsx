import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import {
  Plus,
  Trash2,
  Globe,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import AdminLayout from "../layouts/AdminLayout";
import api from "../../services/api";

function Projects() {

  const [projects, setProjects] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    github: "",
    live: "",
    technologies: "",
  });

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {

    const res = await api.get("/projects");

    setProjects(res.data);

  };

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const addProject = async () => {

    try {

      const token = localStorage.getItem("token");

      await api.post(
        "/projects",
        {
          ...formData,
          technologies: formData.technologies.split(","),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      Swal.fire({
        icon: "success",
        title: "Project Added",
        timer: 1500,
        showConfirmButton: false,
      });

      setFormData({
        title: "",
        description: "",
        image: "",
         
        live: "",
        technologies: "",
      });

      fetchProjects();

    } catch (error) {

      Swal.fire(
        "Error",
        "Unable to add project",
        "error"
      );

    }

  };
    const deleteProject = async (id) => {
    const result = await Swal.fire({
      title: "Delete Project?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Delete",
    });

    if (!result.isConfirmed) return;

    try {
      const token = localStorage.getItem("token");

      await api.delete(`/projects/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      Swal.fire(
        "Deleted!",
        "Project deleted successfully.",
        "success"
      );

      fetchProjects();

    } catch (error) {
      Swal.fire(
        "Error",
        "Unable to delete project",
        "error"
      );
    }
  };

  return (
    <AdminLayout>

      <h1 className="text-3xl font-bold">
        Projects
      </h1>

      {/* Add Project Form */}

      <div className="bg-[#16213A] border border-[#263353] rounded-2xl p-6 mt-8">

        <div className="grid md:grid-cols-2 gap-5">

          <input
            type="text"
            name="title"
            placeholder="Project Title"
            value={formData.title}
            onChange={handleChange}
            className="bg-[#0B1220] border border-[#263353] rounded-xl p-3 outline-none"
          />

          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
            className="bg-[#0B1220] border border-[#263353] rounded-xl p-3 outline-none"
          />

          <input
            type="text"
            name="github"
            placeholder="GitHub Link"
            value={formData.github}
            onChange={handleChange}
            className="bg-[#0B1220] border border-[#263353] rounded-xl p-3 outline-none"
          />

          <input
            type="text"
            name="live"
            placeholder="Live Demo Link"
            value={formData.live}
            onChange={handleChange}
            className="bg-[#0B1220] border border-[#263353] rounded-xl p-3 outline-none"
          />

          <input
            type="text"
            name="technologies"
            placeholder="React, Node, MongoDB"
            value={formData.technologies}
            onChange={handleChange}
            className="bg-[#0B1220] border border-[#263353] rounded-xl p-3 outline-none md:col-span-2"
          />

          <textarea
            rows="4"
            name="description"
            placeholder="Project Description"
            value={formData.description}
            onChange={handleChange}
            className="bg-[#0B1220] border border-[#263353] rounded-xl p-3 outline-none md:col-span-2"
          />

        </div>

        <button
          onClick={addProject}
          className="mt-6 bg-[#3ECF8E] text-black px-6 py-3 rounded-xl flex items-center gap-2 font-semibold hover:bg-[#31b977]"
        >
          <Plus size={20} />
          Add Project
        </button>

      </div>

      {/* Projects Table */}

      <div className="mt-10 overflow-x-auto rounded-xl border border-[#263353]">

        <table className="min-w-[1000px] w-full">

          <thead className="bg-[#16213A]">

            <tr>

              <th className="p-4 text-left">Image</th>
              <th className="p-4 text-left">Title</th>
              <th className="p-4 text-left">Technologies</th>
              <th className="p-4 text-center">GitHub</th>
              <th className="p-4 text-center">Live</th>
              <th className="p-4 text-center">Delete</th>

            </tr>

          </thead>

          <tbody>

            {projects.map((project) => (

              <tr
                key={project._id}
                className="border-t border-[#263353] hover:bg-[#1B2844]"
              >

                <td className="p-4">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-24 h-16 rounded-lg object-cover"
                  />

                </td>

                <td className="p-4 font-semibold">
                  {project.title}
                </td>

                <td className="p-4">
                  {project.technologies.join(", ")}
                </td>

                <td className="text-center">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub className="mx-auto hover:text-[#3ECF8E]" />
                  </a>

                </td>

                <td className="text-center">

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Globe className="mx-auto hover:text-[#3ECF8E]" />
                  </a>

                </td>

                <td className="text-center">

                  <button
                    onClick={() => deleteProject(project._id)}
                    className="bg-red-500 hover:bg-red-600 p-2 rounded-lg"
                  >
                    <Trash2 size={18} />
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </AdminLayout>
  );
}

export default Projects;