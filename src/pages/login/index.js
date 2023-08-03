import LoginForm from "@/components/LoginForm";


export default function LoginPage() {

  return (
    <section className="m-auto">
      <div className="text-center justify-center h-[60px] text-[40px] mt-16 my-10">Login</div>
      <div className="flex justify-between max-w-[1012px] w-full m-auto pt-[32px]">

        <LoginForm/>

        <div className="border-l border-gray-400 w-1 h-auto"></div>

        <div className="w-[340px] flex flex-col items-center place-content-center ">
          <button className="flex flex-row w-[340px] h-[40px] my-[21px]   items-center text-[#303233] font-bold rounded-lg border border-[#303233] bg-[#FFF]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="24" viewBox="0 0 22 24" fill="none" className="ml-[41px] mr-[21px]">
              <path d="M21.7861 9.30516H20.9V9.25714H11V13.8857H17.2167C16.3097 16.5801 13.8727 18.5143 11 18.5143C7.35515 18.5143 4.4 15.4056 4.4 11.5714C4.4 7.73724 7.35515 4.62857 11 4.62857C12.6825 4.62857 14.2131 5.29624 15.3786 6.38685L18.4899 3.11387C16.5253 1.18781 13.8974 0 11 0C4.92525 0 0 5.18111 0 11.5714C0 17.9618 4.92525 23.1429 11 23.1429C17.0748 23.1429 22 17.9618 22 11.5714C22 10.7956 21.9241 10.0382 21.7861 9.30516Z" fill="#FFC107"/>
              <path d="M1.26828 6.18551L4.88233 8.97364C5.86023 6.42677 8.22853 4.62857 11 4.62857C12.6824 4.62857 14.2131 5.29624 15.3785 6.38685L18.4899 3.11387C16.5253 1.18781 13.8974 0 11 0C6.77488 0 3.11078 2.50926 1.26828 6.18551Z" fill="#FF3D00"/>
              <path d="M11 23.1429C13.8413 23.1429 16.423 21.999 18.375 20.1389L14.9705 17.1084C13.8661 17.9884 12.4933 18.5143 11 18.5143C8.13893 18.5143 5.70958 16.5952 4.79438 13.917L1.20728 16.8243C3.02778 20.5717 6.72488 23.1429 11 23.1429Z" fill="#4CAF50"/>
              <path d="M21.786 9.30519H20.9V9.25716H11V13.8857H17.2167C16.7811 15.18 15.9896 16.2961 14.9688 17.109C14.9693 17.1084 14.9699 17.1084 14.9704 17.1078L18.375 20.1384C18.1341 20.3686 22 17.3572 22 11.5714C22 10.7956 21.9241 10.0382 21.786 9.30519Z" fill="#1976D2"/>
            </svg>
            Continue with Google
          </button>

          <button className="flex flex-row w-[340px] h-[40px] my-[21px]   items-center text-[#303233] font-bold rounded-lg border border-[#303233] bg-[#FFF]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="ml-[41px] mr-[21px]">
              <path d="M24 12C24 5.37188 18.6281 0 12 0C5.37188 0 0 5.37188 0 12C0 17.9906 4.3875 22.9547 10.1249 23.8547V15.4688H7.07812V12H10.1249V9.35625C10.1249 6.34922 11.9157 4.68751 14.6578 4.68751C15.9704 4.68751 17.3437 4.92188 17.3437 4.92188V7.875H15.8296C14.339 7.875 13.8751 8.80078 13.8751 9.75V12H17.2031L16.6711 15.4688H13.8751V23.8547C19.6125 22.9547 24 17.9906 24 12Z" fill="#1877F2"/>
              <path d="M16.6711 15.4688L17.2031 12H13.8751V9.74999C13.8751 8.80077 14.339 7.87499 15.8296 7.87499H17.3437V4.92187C17.3437 4.92187 15.9704 4.6875 14.6578 4.6875C11.9157 4.6875 10.1249 6.34922 10.1249 9.35624V12H7.07812V15.4688H10.1249V23.8547C10.7367 23.9508 11.3625 24 12 24C12.6375 24 13.2633 23.9508 13.8751 23.8547V15.4688H16.6711Z" fill="white"/>
            </svg>
            Continue with Facebook
          </button><button className="flex flex-row w-[340px] h-[40px] my-[21px]   items-center text-[#303233] font-bold rounded-lg border border-[#303233] bg-[#FFF]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="ml-[41px] mr-[21px]">
              <path d="M20 4.00002H4.00002C2.90002 4.00002 2.01002 4.90002 2.01002 6.00002L2.00002 18C2.00002 19.1 2.90002 20 4.00002 20H20C21.1 20 22 19.1 22 18V6.00002C22 4.90002 21.1 4.00002 20 4.00002ZM20 8.00002L12 13L4.00002 8.00002V6.00002L12 11L20 6.00002V8.00002Z" fill="black"/>
            </svg>
            Continue with Email
          </button>
        </div>
      </div>
    </section>


  );
}


