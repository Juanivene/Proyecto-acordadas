import Swal from 'sweetalert2';

const AlertForm = (message) => {
  const { message: msg } = message;
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  Toast.fire({
    icon: 'error',
    title: msg,
  });
  return null;
};

export default AlertForm;
