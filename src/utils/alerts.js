import Swal from "sweetalert2";

export const successAlert = (title) => {
  Swal.fire({
    icon: "success",
    title,
    confirmButtonColor: "#3ECF8E",
    background: "#16213A",
    color: "#fff",
  });
};

export const errorAlert = (title) => {
  Swal.fire({
    icon: "error",
    title,
    confirmButtonColor: "#EF4444",
    background: "#16213A",
    color: "#fff",
  });
};

export const warningAlert = (title) => {
  Swal.fire({
    icon: "warning",
    title,
    confirmButtonColor: "#F59E0B",
    background: "#16213A",
    color: "#fff",
  });
};