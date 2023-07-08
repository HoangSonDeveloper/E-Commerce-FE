
import Link from 'next/link'
async function getData(){
    const res = await fetch("https://psmhrv-8080.csb.app/lecturers",{ next: { revalidate: 60 } })
    if (!res.ok) {
        throw new Error('Fail to fetch data')
    }
    return res.json();
}

export default async function DetailedLecturer({params}){

    const {slug} = params || {}
    console.log(slug)
    const data = await getData()
    console.log(data)

    //Filter lecturer id by slug
    const lecturerX = data.find((lecturer) => lecturer.id === parseInt(slug))
    console.log(lecturerX)

    if(lecturerX) {
    const { avatar, name, introduction, phone, experiment, education, courses } = lecturerX 
    

    return(
        <div> 
            <section class="text-gray-600 body-font overflow-hidden">
                <div class="container px-5 py-24 mx-auto">
                    <div class="lg:w-4/5 mx-auto flex flex-wrap">
                        <img 
                            alt={name} 
                            class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" 
                            src={avatar}
                        />
                        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 class="text-lg title-font text-gray-500 tracking-widest"> {education} </h2>
                            <h1 class="text-gray-900 text-4xl title-font font-medium mb-1"> {name} </h1>
                            <div class="flex mb-4"></div>
                            <p class="leading-relaxed">{introduction}</p>
                            <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                                <div class="flex">
                                    <span class="mr-3">Tel: {phone}</span>
                                </div>
                            <div class="flex ml-6 items-center"></div>
                            </div>
                            <div class="flex">
                                <span class="title-font font-light text-xl text-[#555FD9] ">Experiment: {experiment}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <br></br>
            <br></br> 
            <br></br>

            <div class="mb-3">
                <div className="relative  flex w-2/3 flex-wrap items-stretch mx-auto">
                    <input
                    type="search"
                    class="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                    placeholder="Search courses, ex: Pascal ..."
                    aria-label="Search"
                    aria-describedby="button-addon1" />

                    {/* Search btn */}
                    <button
                    class="relative z-[2] flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                    type="button"
                    id="button-addon1"
                    data-te-ripple-init
                    data-te-ripple-color="light">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        class="h-5 w-5">
                        <path
                        fill-rule="evenodd"
                        d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                        clip-rule="evenodd" />
                    </svg>
                    </button>
                </div>
            </div>

            
            <div className="container flex flex-wrap px-5 py-12 mx-auto">
                {courses.map((course) => (
                    <div key={course.id} className="w-full md:w-1/3 p-4 cursor-pointer"> 
                    <div className="h-96 border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
                        <img 
                            className="h-48 w-full object-cover object-center" 
                            src={course.image} 
                            alt={course.name} 
                        />
                        <div className="p-4">
                        <p className="tracking-widest text-sm title-font font-medium text-gray-700 mb-1">  
                            {name}
                        </p>
                        <Link 
                            className="title-font text-lg font-medium text-[#555FD9] hover:text-red-500 mb-3" 
                            href=""
                        >
                            {course.name}
                        </Link>
                        <p className="text-[#ab2727] font-bold mb-3 pt-2"> {course.price} VND </p>
                        <p className="leading-relaxed mb-3"> {course.desc} </p>
                        </div>
                    </div>
                    </div>
                ))}
            </div>


            {/* <div className="container flex flex-wrap px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    <div className="p-4 md:w-1/3"> 
                        {courses.map((course) => (
                            <div 
                            key={course.id} 
                            className="h-96 border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden"
                            >
                                <img 
                                    className="lg:h-48 md:h-36 w-full object-cover object-center" 
                                    src={course.image} 
                                    alt={course.name}
                                />
                                <div class="p-4">
                                    <p className="tracking-widest text-sm title-font font-medium text-gray-700 mb-1 "> {name} </p>
                                    <Link  
                                        className="title-font text-lg font-medium text-[#555FD9] hover:text-red-500 mb-3" 
                                        href="/"
                                    > 
                                        {course.name} 
                                    </Link>
                                    <p className="text-[#ab2727] font-bold mb-3 pt-2"> {course.price} VND </p>
                                    <p className="leading-relaxed mb-3">{ course.desc} </p>
                                    
                                </div>
                                
                            </div>
                        ))}
                    </div>
                </div>
            </div> */}

                {/* {courses.map((course) => (
                    <div
                    key={course.id}
                    className="bg-white rounded-lg shadow-md p-4 flex items-center space-x-4"
                    >
                    <img
                        src={course.image}
                        alt={course.name}
                        className="w-16 h-16 rounded-full"
                    />
                    <div>
                        <h3 className="font-bold">{course.name}</h3>
                        <p className="text-gray-500">Price: {course.price}</p>
                    </div>
                    </div>
                ))}          
             */}
        </div>
     
    
            
    )
}
}
