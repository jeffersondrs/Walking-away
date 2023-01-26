import "./App.scss";
import { GiElectric, GiJigsawPiece } from "react-icons/gi";
import { RiComputerLine } from "react-icons/ri";
import { FaSignal, FaCode } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";

function App() {
  return (
    <div className="App">
      <div className="App__left">
        <div className="flex flex-col justify-center items-center p-10 ">
          <span className="App__left__top__subtitle">A new way to learn</span>
          <span className="App__left__top__subtitle">A new way to learn</span>
          <span className="App__left__top__subtitle">A new way to learn</span>
        </div>
      </div>
      <div className="App__right">
        <div className="flex flex-col justify-center items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1602016082275-1c502e6d8100?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="Lights"
              className="bg-cover h-screen w-screen object-cover"
            />
          </div>
          <div className="w-full flex flex-col justify-end items-end">
            <p className="py-20 px-16 text-start leading-10">
              <strong>Lorem ipsum dolor sit amet</strong>, consectetur
              adipiscing elit. Sed scelerisque, nisl eget ultrices tincidunt,
              nisl nisl aliquam mauris, vitae ultrices nisl lorem non nisl. Sed
              euismod, nisl euismod lacinia lacinia, nisl nisl aliquam mauris,
              vitae ultrices nisl lorem non nisl. Sed euismod, nisl euismod
              lacinia lacinia, nisl nisl aliquam mauris, vitae ultrices nisl
              lorem non nisl. Sed
            </p>
            <div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1494959764136-6be9eb3c261e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  alt="Lights"
                  className="bg-cover p-20"
                />
              </div>
            </div>
          </div>
          <div className="px-20">
            <p className="text-start leading-10">
              <strong>Quaerat voluptas </strong>
              excepturi unde optio error architecto quis atque ratione ab minus
              saepe eligendi quam, officiis dolorem qui? Esse iure recusandae
              magni.
            </p>
            <div className="grid grid-flow-col grid-rows-3 justify-evenly w-full h-64 p-2 items-center text-4xl text-white my-4">
              <div className="flex flex-row justify-center items-center w-48">
                <span className="bg-gray-400/50 rounded-md p-1 mr-1">
                  <GiElectric />
                </span>
                <p className="text-sm">
                  lorem ipsum dolor sit amet, consectetur adip
                </p>
              </div>
              <div className="flex flex-row justify-center items-center w-48">
                <span className="bg-gray-400/50 rounded-md p-1 mr-1">
                  <RiComputerLine />
                </span>
                <p className="text-sm">
                  lorem ipsum dolor sit amet, consectetur adip
                </p>
              </div>
              <div className="flex flex-row justify-center items-center w-48">
                <span className="bg-gray-400/50 rounded-md p-1 mr-1">
                  <FaSignal />
                </span>
                <p className="text-sm">
                  lorem ipsum dolor sit amet, consectetur adip
                </p>
              </div>
              <div className="flex flex-row justify-center items-center w-48">
                <span className="bg-gray-400/50 rounded-md p-1 mr-1">
                  <GiJigsawPiece />
                </span>
                <p className="text-sm">
                  lorem ipsum dolor sit amet, consectetur adip
                </p>
              </div>
              <div className="flex flex-row justify-center items-center w-48">
                <span className="bg-gray-400/50 rounded-md p-1 mr-1">
                  <MdLocationPin />
                </span>
                <p className="text-sm">
                  lorem ipsum dolor sit amet, consectetur adip
                </p>
              </div>
              <div className="flex flex-row justify-center items-center w-48">
                <span className="bg-gray-400/50 rounded-md p-1 mr-1">
                  <FaCode />
                </span>
                <p className="text-sm">
                  lorem ipsum dolor sit amet, consectetur adip
                </p>
              </div>
            </div>
            <p className="text-start leading-10">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
              aliquam porro mollitia in, ab cupiditate dicta. Quaerat voluptas
              excepturi unde.
            </p>
          </div>
          <div className="px-20 py-10 text-start">
            <p className="text-start leading-10">
              <strong>Integer mollis </strong>
              egestas nam maximus erat id euismod egestas. Pellentesque sapien
              ac quam. Lorem ipsum dolor sit nullam.
            </p>
          </div>
        </div>
        <div className="px-10 my-5 mb-32">
          <img
            src="https://images.unsplash.com/photo-1506751470038-e579eb91f580?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=728&q=80"
            alt="street"
            className="cursor-pointer hover:scale-[101%] transform transition duration-500 ease-in-out"
          />
          <div className="flex flex-row justify-evenly w-full items-center my-3">
            <img
              src="https://images.unsplash.com/photo-1610317482217-2b660603f46a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="street"
              className="w-1/2 h-96 bg-contain bg-center py-2 pr-2 cursor-pointer hover:scale-[101%] transform transition duration-500 ease-in-out"
            />

            <img
              src="https://images.unsplash.com/photo-1517279509087-dd1bb691b553?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80"
              alt="street"
              className="w-1/2 h-96 bg-contain bg-center py-2 pl-2 cursor-pointer hover:scale-[101%] transform transition duration-500 ease-in-out"
            />
          </div>
          <img
            src="https://images.unsplash.com/photo-1494989615690-9900562a5b20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="cursor-pointer hover:scale-[101%] transform transition duration-500 ease-in-out"
          />
        </div>
        <div className="px-10 my-5">
          <img
            src="https://images.unsplash.com/photo-1538471726790-0f6b031f1982?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="street"
            className="cursor-pointer hover:scale-[101%] transform transition duration-500 ease-in-out"
          />
          <div className="flex flex-row justify-evenly w-full items-center my-3">
            <img
              src="https://images.unsplash.com/photo-1625178551411-62eea1351c82?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="street"
              className="w-1/2 h-96 bg-contain bg-center py-2 pr-2 cursor-pointer hover:scale-[101%] transform transition duration-500 ease-in-out"
            />

            <img
              src="https://images.unsplash.com/photo-1516380921530-f6b3b1cbfc8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
              alt="street"
              className="w-1/2 h-96 bg-contain bg-center py-2 pl-2 cursor-pointer hover:scale-[101%] transform transition duration-500 ease-in-out"
            />
          </div>
          <div>
            <div className="flex flex-row justify-evenly w-full items-center my-3">
              <img
                src="https://images.unsplash.com/photo-1610317482217-2b660603f46a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                alt="street"
                className="w-1/2 h-96 bg-contain bg-center py-2 pr-2 cursor-pointer hover:scale-[101%] transform transition duration-500 ease-in-out"
              />

              <img
                src="https://images.unsplash.com/photo-1517279509087-dd1bb691b553?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80"
                alt="street"
                className="w-1/2 h-96 bg-contain bg-center py-2 pl-2 cursor-pointer hover:scale-[101%] transform transition duration-500 ease-in-out"
              />
            </div>
            <img
              src="https://images.unsplash.com/photo-1477332552946-cfb384aeaf1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              className="cursor-pointer hover:scale-[101%] transform transition duration-500 ease-in-out"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
