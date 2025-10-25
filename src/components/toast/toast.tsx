type ToastProps = {
    toast: {
        id: string;
        message: string;
        type: string;
    };
}
const Toast = ({ toast }: ToastProps) => {
  return (
    <div className="relative mb-2 rounded-md bg-slate-800 text-white p-4 max-w-lg shadow-lg ring-1 ring-white/20">
      <span className="inline-block max-w-full break-words">{toast.message}</span>
    </div>
  );
};

export default Toast