import React from 'react'
import "../App.css";
import arrow from '../assets/arrow.png'
const FAQ = () => {
  return (
    <div className='faqContain'>
       
        {/* Left Section */}
        <div className='mt-[80px] ml-[50px]'>
         <div className='w-[405px] h-[111px] flex flex-col gap-3'>
            <p className='stories' style={{fontSize:'32px',color:"#9E9D9D",textAlign:'start'}}>What’s on your mind</p>
            <p className='topText'>Ask Questions</p>
         </div>
         <img src={arrow} alt='arrow ' width={490} height={500} className='mt-10'/>
        </div>

        {/* Right Section */}
        <div className="mx-auto w-[581px] h-[538px] mt-24">
    <div className="divide-y divide-gray-300">
        <details className="py-6" open>
            <summary
                className="accordHead">
               Do you offer freelancers?
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" className="block h-5 w-5 group-open:hidden">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" className="hidden h-5 w-5 group-open:block">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                    </svg>
                </div>
            </summary>
            <div className="accordText">If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.</div>
        </details>
        <details className="py-6">
            <summary
                className="accordHead">
               What’s the guarantee that I will be satisfied with the hired talent?
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" className="block h-5 w-5 group-open:hidden">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" className="hidden h-5 w-5 group-open:block">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                    </svg>
                </div>
            </summary>
            <div className="accordText">This is the second item's accordion body.</div>
        </details>
        <details className="py-6">
            <summary
                className="accordHead">
             Can I hire multiple talents at once?
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" className="block h-5 w-5 group-open:hidden">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" className="hidden h-5 w-5 group-open:block">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                    </svg>
                </div>
            </summary>
            <div className="accordText">If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.</div>
        </details>
        <details className="py-6">
            <summary
                className="accordHead">
             Why should I not go to an agency directly?
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" className="block h-5 w-5 group-open:hidden">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" className="hidden h-5 w-5 group-open:block">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                    </svg>
                </div>
            </summary>
            <div className="accordText">If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.</div>
        </details>
        <details className="py-6">
            <summary
                className="accordHead">
         Who can help me pick a right skillset and duration for me?
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" className="block h-5 w-5 group-open:hidden">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" className="hidden h-5 w-5 group-open:block">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                    </svg>
                </div>
            </summary>
            <div className="accordText">If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.</div>
        </details>
    </div>
</div>
    </div>
  )
}

export default FAQ