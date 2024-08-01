import Swal from "sweetalert2";

function error(message: string) {
    Swal.fire({
        title: message,
        icon: "error",
        timer: 2500
    });
}

function success(message: string) {
    Swal.fire({
        title: message,
        icon: "success",
    });
}

const alerts = {
    error,
    success
}

export default alerts