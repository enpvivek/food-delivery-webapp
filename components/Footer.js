export function Footer() {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full h-auto bg-slate-200 flex">
        <div className="w-full h-auto flex flex-row lg:px-32 p-5">
          <div className="flex flex-col px-8 basis-1/2 text-3xl font-bold text-gray-600 align-baseline">
            <div className="flex">For better experience,download </div>
            <div className="flex">the Foodie app now</div>
          </div>
          <div className="flex basis-1/4 px-8">
            <a href="#">
              <img
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png"
                alt="Download Play Store App"
              />
            </a>
          </div>
          <div className="flex basis-1/4 px-8">
            <a href="#">
              <img
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png"
                alt="Download iOS App"
              />
            </a>
          </div>
        </div>
      </div>
      {/* footer navbar starts here */}
      <div className="w-full h-auto bg-black text-slate-300">
        <div className="flex w-full h-auto lg:px-32 gap py-16">
          <div className="flex w-full flex-col base-1/4">
            <div className="flex text-2xl text-white font-extrabold my-2">
              Foodie
            </div>
            <div className="flex">© 2023 Foodie Technologies</div>
          </div>
          <div className="flex w-full flex-col base-1/4">
            <div className="flex text-xl text-white font-bold my-2">
              Company
            </div>
            <div className="flex">About</div>
            <div className="flex">Careers</div>
            <div className="flex">Team</div>
            <div className="flex">Foodie One</div>
            <div className="flex">Foodie Instamart</div>
            <div className="flex">Foodie Genie</div>
          </div>
          <div className="flex w-full flex-col base-1/4">
            <div className="flex text-xl text-white font-bold my-2">
              Contact us
            </div>
            <div className="flex">Help & Support</div>
            <div className="flex">Partner with us</div>
            <div className="flex mb-12">Ride with us</div>
            <div className="flex text-xl text-white font-bold my-2">Legal</div>
            <div className="flex">Terms & Conditions</div>
            <div className="flex">Cookie Policy</div>
            <div className="flex">Privacy Policy</div>
          </div>
          <div className="flex w-full flex-col base-1/4">
            <div className="flex text-xl text-white font-bold my-2">
              We deliver to:
            </div>
            <div className="flex">Banglore</div>
            <div className="flex">Delhi</div>
            <div className="flex">Hyderabad</div>
            <div className="flex">Chennai</div>
            <div className="flex">Mumbai</div>
            <div className="flex">Pune</div>
            <div className="flex ">
              <div className="border-[1px] rounded-md border-gray-600 px-2">
                599 cities {">"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
