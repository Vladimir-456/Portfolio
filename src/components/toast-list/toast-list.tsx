import Toast from "../toast/toast";

export type Toast = {
    id: string,
    type : string,
    message: string
}
type ToastProps = {
    toasts: Toast[]
}
const ToastList = ({ toasts } : ToastProps) => {
  return (
    <div className="fixed top-5 right-4 flex flex-col gap-4 z-50 max-w-xs sm:max-w-sm w-full">
      {toasts.map(t => (
        <Toast key={t.id} toast={t} />
      ))}
    </div>
  );
}

export default ToastList