function FormError({ text }: { text: string }) {
  return (
    <div className="my-4 p-2 bg-red-500 rounded-[4px] font-bold">{text}</div>
  );
}

export default FormError;
