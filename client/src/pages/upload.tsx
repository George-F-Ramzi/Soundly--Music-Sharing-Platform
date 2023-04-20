import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { RiLoader2Fill } from "react-icons/ri";
import Input from "../lib/input";
import HandleFileUpload from "../lib/handle_file";

function UploadPage() {
  const navigate = useNavigate();
  const [Loading, setLoading] = useState(false);
  let myId = localStorage.getItem("myId");
  return (
    <div className="grid phone:bg-transparent  tablet:grid-cols-1 tablet:mt-8 grid-cols-2 mx-auto mt-[100px] max-w-[800px] rounded-xl h-[500px] bg-gray-800">
      <div className="py-[40px]  phone:px-3 relative text-white px-8">
        <h5 className="font-bold mb-12 text-2xl">Upload</h5>
        <form
          encType="multipart/form-data"
          onSubmit={async (e) => {
            e.preventDefault();
            setLoading(true);
            let form: FormData = new FormData(e.currentTarget);
            await HandleFileUpload({ form });
            navigate(`/artist/${myId}`);
          }}
        >
          <Input
            name="name"
            placeholder="Enter Song Name"
            type="text"
            margin="mb-4"
          />
          <div className="w-full relative  mb-4 text-sm flex items-center justify-center text-black  bg-gray-300 rounded h-12">
            <input
              className="w-full absolute top-0 right-0 cursor-pointer h-full opacity-0"
              type="file"
              accept="audio/*"
              required
              name="song"
            />
            Click Here To Choose Song File
          </div>
          <div className="w-full relative text-sm flex items-center justify-center text-black  bg-gray-300 rounded h-12">
            <input
              className="w-full absolute top-0 right-0 cursor-pointer h-full opacity-0"
              type="file"
              required
              accept="image/*"
              name="photo"
            />
            Click Here To Choose Thumbnail File
          </div>
          {!Loading ? (
            <div className="w-full phone:p-3 p-8 -translate-x-1/2 rounded -translate-y-1/2  bottom-10 left-1/2 h-12  absolute ">
              <button className=" bg-gradient1 w-full rounded text-black font-bold h-12">
                Upload
              </button>
            </div>
          ) : (
            <div className="w-full phone:p-3 p-8 -translate-x-1/2 rounded -translate-y-1/2  bottom-10 left-1/2 h-12  absolute ">
              <div className=" bg-gradient1 text-xl flex items-center justify-center w-full rounded text-black font-bold h-12">
                <RiLoader2Fill className="mr-3 animate-spin" size={"24px"} />
                Uploading...
              </div>
            </div>
          )}
        </form>
      </div>
      <div className="bg-upload p-7 tablet:hidden flex items-center text-white text-[40px]  leading-[150%] font-bold">
        Share Your Work With Thousands Of Peoples
      </div>
    </div>
  );
}

export default UploadPage;
