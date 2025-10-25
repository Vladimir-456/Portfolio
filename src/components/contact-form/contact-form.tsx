import useValidate from "../../hooks/useValidate";
type FormData = {
    name: string;
    email: string;
    message: string;
}
const ContactForm = ()  => {
    const { formData, errors, handleChange, handleSubmit } = useValidate({
    name: "",
    email: "",
    message: "",
  });

  const onSubmit = (data: FormData) => {
    console.log("Отправляем данные:", data);
  };

    return (
        <>
        <div className="min-h-screen flex justify-center items-center bg-gray-900 p-4">
            <form action="" method="post" onSubmit={handleSubmit(onSubmit)} className="w-full max-w-2xl flex flex-col gap-4 p-6 bg-gray-800 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-white">Свяжитесь со мной</h2>
                <p className="text-gray-400">Обязательно с вами свяжусь.</p>
                <input type="text" name="name" placeholder="Ваше имя" value={formData.name} onChange={handleChange} className="p-3 rounded-md bg-gray-700 mt-1 text-white focus:bg-gray-900" />
                {errors.name && <p className="text-red-500">{errors.name}</p>}
                <input type="email" name="email" placeholder="Email"  value={formData.email} onChange={handleChange} className="p-3 rounded-md mt-1 bg-gray-700 text-white focus:bg-gray-900"/>
                {errors.email && <p className="text-red-500">{errors.email}</p>}
                <textarea name="message" placeholder="Сообщение"  value={formData.message}  onChange={handleChange} className="p-3 rounded-md mt-1 bg-gray-700 text-white focus:bg-gray-900"></textarea>
                {errors.message && <p className="text-red-500">{errors.message}</p>}
                <button type="submit" className="p-3 mt-1 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition duration-300">Отправить</button>
            </form>
        </div>
    </>
    )
}

export default ContactForm