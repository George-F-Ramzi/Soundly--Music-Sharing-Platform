interface Prop {
  name: string;
  type: string;
  placeholder: string;
  margin?: string;
}

function Input({ name, type, placeholder, margin }: Prop) {
  return (
    <input
      required
      name={name}
      type={type}
      placeholder={placeholder}
      className={`w-full ${margin} valid:border-green-500 
        h-12 rounded-[4px] border border-gray-500 text-gray-300 
        bg-transparent p-4
        `}
    />
  );
}

export default Input;
