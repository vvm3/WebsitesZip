import { NewInfo } from "@/components/ProductPage/newInfo";

export default function ProductPage() {
    return (
        <>
            <div className="m-auto flex lg:flex-row flex-col gap-5 w-full justify-center items-center my-10">
                <NewInfo 
                    heading="Admission CRM"
                    description="Digitize the lead generation, inquiry tracking, and follow-up procedures.   You may increase the speed at which you turn prospects into registered students by using real-time data and automated reminders."
                    link="#"
                />
                <NewInfo
                    heading=" Handling the Student Lifecycle"
                    description="Manage the entire student journey, from admission to graduation.   Integrate profiles, disciplinary activities, academic records, and placement data into a single, comprehensive platform."
                    link=""
                 />
                <NewInfo
                    heading=" Faculty site"
                    description=" Provide teachers with a dedicated website for class planning, performance evaluations, and assignment grading.   Make HR processes like obtaining leaves and filing appraisals simpler. " 
                    link=""
                />
            </div>
        </>
    );
}
