import { useRef,  } from 'react';



const Button = (Name) => {
const buttonref = useRef("");

  return (
    <>
      <button
  ref={buttonref}
  className=" px-3 py-2 flex justify-center items-center rounded-xl cursor-pointer text-gray-700  hover:text-amber-50 hover:bg-[#E85A4F] border-b-red-400 border-2 hover:border-0"
>
  {Name.Name}
</button>
    </> 
  );
};

export default Button;
