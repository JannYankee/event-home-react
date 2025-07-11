import React from "react";
import { useForm } from "react-hook-form";

const AddProductForm = ({ onAdd }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const newProduct = {
      id: Date.now(),
      title: data.title,
      price: parseFloat(data.price),
      images: [data.image || "https://via.placeholder.com/150"]
    };
    onAdd(newProduct);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="add-form">
      <input {...register("title", { required: true })} placeholder="Назва товару" />
      <input {...register("price", { required: true })} placeholder="Ціна" type="number" />
      <input {...register("image")} placeholder="URL зображення (необов'язково)" />
      <button type="submit">Додати товар</button>
    </form>
  );
};

export default AddProductForm;
