
import Link from 'next/link'
import CourseCard from '/src/components/CourseCard'
import ReviewCard from '/src/components/ReviewCard'
async function getData(){
    const res = await fetch("https://psmhrv-8080.csb.app/lecturers",{ next: { revalidate: 60 } })
    if (!res.ok) {
        throw new Error('Fail to fetch data')
    }
    return res.json();
}

export default async function DetailedLecturer({params}){

    const {id} = params || {}
    console.log(id)
    const data = await getData()
    console.log(data)

    //Filter lecturer id by id
    const lecturerX = data.find((lecturer) => lecturer.id === parseInt(id))
    // console.log(lecturerX)
    const reviews = 
        {
          userName: "User 1",
          rating: 4.5,
          createdAt: "2023-07-08T12:34:56Z",
          comment: "Auctor dui class sollicitudin interdum. Convallis sed. Nonummy, urna leo consectetuer integer maecenas mus netus et eget ullamcorper luctus, morbi turpis maecenas Pulvinar. Erat integer vel adipiscing aliquet class aenean sapien.",
          avatar: "https://cdn-icons-png.flaticon.com/512/147/147142.png",
        }

    const { avatar, name, introduction, phone, experiment, education, courses } = lecturerX     

    return(
        <section className='m-auto'>
            <div className="flex  max-w-[1027px] w-full m-auto pt-20">
                <div className="w-1/3">
                    <img 
                        src={avatar} 
                        alt={name}
                        className='bg-gray-300 bg-cover bg-no-repeat object-cover h-full w-full rounded-xl border-[10px] border-[#555FD9]'
                    />
                </div>
                <div className="w-2/3 ml-[28px]">
                    <p className='text-gray-900 text-6xl title-font font-medium '>{name}</p>
                    <p className='text-2xl title-font text-gray-500 tracking-widest'>{education}</p>
                    <p className="title-font  text-xl text-[#555FD9] mt-4">Experiment: {experiment}</p>
                    <p className="text-[#6e6c6c] font-light text-xl leading-relaxed my-4">{introduction}</p>
                    <p className="text-[#b31717] text-2xl">Tel: {phone}</p>
                </div>
            </div>

            <div class="mt-24 mb-12 bg-[#CCCCCC]">
                <p className='text-center text-[40px] font-bold py-6'>COURSES</p>
                <div className="flex width-full mx-auto justify-center">
                    <div className='flex relative mb-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none" 
                            className='mt-3 ml-4 absolute '
                        >
                            <path d="M22.5955 20.9923L18.8855 17.3123C20.3256 15.5167 21.023 13.2376 20.8343 10.9436C20.6456 8.6496 19.5852 6.51508 17.871 4.97894C16.1569 3.4428 13.9193 2.62181 11.6184 2.68477C9.31755 2.74773 7.12823 3.68986 5.50065 5.31744C3.87307 6.94502 2.93094 9.13433 2.86798 11.4352C2.80502 13.7361 3.62602 15.9737 5.16215 17.6878C6.69829 19.402 8.83281 20.4624 11.1268 20.6511C13.4208 20.8398 15.6999 20.1424 17.4955 18.7023L21.1755 22.3823C21.2685 22.476 21.3791 22.5504 21.5009 22.6012C21.6228 22.652 21.7535 22.6781 21.8855 22.6781C22.0175 22.6781 22.1482 22.652 22.2701 22.6012C22.3919 22.5504 22.5025 22.476 22.5955 22.3823C22.7757 22.1958 22.8765 21.9466 22.8765 21.6873C22.8765 21.428 22.7757 21.1788 22.5955 20.9923ZM11.8855 18.7023C10.501 18.7023 9.14766 18.2918 7.99652 17.5226C6.84537 16.7534 5.94817 15.6602 5.41835 14.3811C4.88854 13.102 4.74992 11.6945 5.02001 10.3367C5.29011 8.9788 5.95679 7.73152 6.93576 6.75255C7.91473 5.77358 9.16201 5.1069 10.5199 4.8368C11.8777 4.5667 13.2852 4.70533 14.5643 5.23514C15.8434 5.76495 16.9366 6.66216 17.7058 7.8133C18.475 8.96445 18.8855 10.3178 18.8855 11.7023C18.8855 13.5588 18.148 15.3393 16.8353 16.652C15.5225 17.9648 13.742 18.7023 11.8855 18.7023Z" fill="#181B1A"/>
                        </svg>
                        <input 
                            className='w-[540px] h-[52px] pl-16 rounded-[20px] focus:outline-none bg-[#F6F6F5]'
                            type='text'
                            placeholder='Search'
                        />
                    </div>                    
                </div>
                <div className="grid grid-cols-2 gap-4 bg-[#CCCCCC] ">
                    {courses.map((course) => (
                    <CourseCard key={course.id} course={course} name={name} />
                    ))}
                </div>
            </div>
            
            <div className="max-w-[1027px] w-full m-auto">
                <p className="text-[40px] font-bold mb-10">Featured Reviews</p>
                <div className="grid grid-cols-3 gap-4 ">
                    <ReviewCard reviews={reviews}/>
                    <ReviewCard reviews={reviews}/>
                    <ReviewCard reviews={reviews}/>
                </div>
            </div>





        </section>

        // <div> 
        //     <section class="text-gray-600 body-font overflow-hidden">
        //         <div class="container px-5 py-24 mx-auto">
        //             <div class="lg:w-4/5 mx-auto flex flex-wrap">
        //                 <img 
        //                     alt={name} 
        //                     class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" 
        //                     src={avatar}
        //                 />
        //                 <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        //                     <h2 class="text-lg title-font text-gray-500 tracking-widest"> {education} </h2>
        //                     <h1 class="text-gray-900 text-4xl title-font font-medium mb-1"> {name} </h1>
        //                     <div class="flex mb-4"></div>
        //                     <p class="leading-relaxed">{introduction}</p>
        //                     <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
        //                         <div class="flex">
        //                             <span class="mr-3">Tel: {phone}</span>
        //                         </div>
        //                     <div class="flex ml-6 items-center"></div>
        //                     </div>
        //                     <div class="flex">
        //                         <span class="title-font font-light text-xl text-[#555FD9] ">Experiment: {experiment}</span>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </section>

        //     <br></br>
        //     <br></br> 
        //     <br></br>

            // <div class="mb-3">
            //     <div className="relative  flex w-2/3 flex-wrap items-stretch mx-auto">
            //         <input
            //         type="search"
            //         class="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
            //         placeholder="Search courses, ex: Pascal ..."
            //         aria-label="Search"
            //         aria-describedby="button-addon1" />

                    
            //         <button
            //         class="relative z-[2] flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
            //         type="button"
            //         id="button-addon1"
            //         data-te-ripple-init
            //         data-te-ripple-color="light">
            //         <svg
            //             xmlns="http://www.w3.org/2000/svg"
            //             viewBox="0 0 20 20"
            //             fill="currentColor"
            //             class="h-5 w-5">
            //             <path
            //             fill-rule="evenodd"
            //             d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
            //             clip-rule="evenodd" />
            //         </svg>
            //         </button>
            //     </div>
            // </div>

            
        //     <div className="container flex flex-wrap px-5 py-12 mx-auto">
        //         {courses.map((course) => (
                    // <div key={course.id} className="w-full md:w-1/3 p-4 cursor-pointer"> 
                    // <div className="h-96 border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
                    //     <img 
                    //         className="h-48 w-full object-cover object-center" 
                    //         src={course.image} 
                    //         alt={course.name} 
                    //     />
                    //     <div className="p-4">
                    //     <p className="tracking-widest text-sm title-font font-medium text-gray-700 mb-1">  
                    //         {name}
                    //     </p>
                    //     <Link 
                    //         className="title-font text-lg font-medium text-[#555FD9] hover:text-red-500 mb-3" 
                    //         href=""
                    //     >
                    //         {course.name}
                    //     </Link>
                    //     <p className="text-[#ab2727] font-bold mb-3 pt-2"> {course.price} VND </p>
                    //     <p className="leading-relaxed mb-3"> {course.desc} </p>
                    //     </div>
                    // </div>
                    // </div>
        //         ))}
        //     </div>
        // </div>
    )
}

