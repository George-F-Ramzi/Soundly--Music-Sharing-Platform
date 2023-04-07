function FormError({ text }: { text: string }) {
  return (
    <div className="-mt-1 mb-4 p-2 bg-red-500 rounded-[4px] font-bold">
      {text}
    </div>
  );
}

export default FormError;
