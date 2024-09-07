import React, { useState } from 'react';
import { GrPrevious } from "react-icons/gr";
import { GoVerified } from "react-icons/go";

function App() {
  const [backgroundImage1, setBackgroundImage1] = useState(null);
  const [backgroundImage2, setBackgroundImage2] = useState(null);
  const [isEditing, setIsEditing] = useState(false); 
  const [bio, setBio] = useState(""); 

  const handleFileChange1 = (e) => {
    if (e.target.files[0]) {
      const fileURL = URL.createObjectURL(e.target.files[0]);
      setBackgroundImage1(fileURL);
    }
  };

  const handleFileChange2 = (e) => {
    if (e.target.files[0]) {
      const fileURL = URL.createObjectURL(e.target.files[0]);
      setBackgroundImage2(fileURL);
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    setBio(e.target.value);
  };

  const handleSaveClick = () => {
    setIsEditing(false);

  };

  return (
    <div className="h-[100vh] w-[100vw] bg-white flex justify-center items-center">
      <div className="h-[80vh] w-[90vw] bg-white boxshadoww rounded-[20px]">
        <div className="w-[100%] h-[45%] bg-[#ecc2f3] relative rd">
          <input
            type="file"
            className="absolute top-0 left-0 opacity-0 w-full h-full cursor-pointer"
            onChange={handleFileChange1}
          />
          <div
            className="w-[100%] h-[100%] rd"
            style={{
              backgroundImage: `url(${backgroundImage1})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div
              className="w-[200px] h-[200px] bg-[#6e009e] absolute top-[250px] rd2 left-[150px]"
            >
              <input
                type="file"
                className="absolute top-0 left-0 opacity-0 w-full h-full cursor-pointer"
                onChange={handleFileChange2}
              />
              <div
                className="w-[100%] rd2 h-[100%]"
                style={{
                  backgroundImage: `url(${backgroundImage2})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
            </div>
          </div>
          <div className='font-medium text-2xl pl-[400px] pt-[30px]'>UserName</div>
          <div className='h-[250px] w-[500px] pt-[30px] ml-[40vw] flex flex-col gap-[20px]'>
            <div className='font-medium text-2xl'>Bio :</div>
            <div className='flex items-center'>
              <input
                type='text'
                value={bio}
                onChange={handleInputChange}
                className='rminput ml-5 h-[200px] w-[350px] border-[1px] rounded-[20px] border-black'
                disabled={!isEditing}
              />
              <button
                onClick={isEditing ? handleSaveClick : handleEditClick}
                className='ml-5 px-4 py-2 bg-[#6e009e] text-white rounded-[15px]'
              >
                {isEditing ? 'Save' : 'Edit'}
              </button>
            </div>
          </div>
        </div>
        <div className='flex justify-start items-end h-[50%] gap-[30px]'>
          <button className='ml-10 h-[50px] w-[150px] bg-[#6e009e] rounded-[15px] flex justify-center items-center text-white gap-1'>
            <div className='font-medium text-xl'><GrPrevious /></div>
            {/* hna  fin ghadi dir useNavigate dyal skip*/}
            <div>Skip For Now</div>
          </button>
          <button className='h-[50px] w-[150px] bg-[#6e009e] rounded-[15px] flex justify-center items-center text-white gap-1'>
            <div className='font-medium text-xl'><GoVerified /></div>
             {/* dir nafs usenavigate lihom bjoj li hiya lhome*/}
            <div>Done</div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
