// import illustration from "@/assets/illustration.svg"
import FormComponent from "@/components/forms/FormComponent"

function HomePage() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-16 bg-black">
            <div className="my-12 flex h-full min-w-full flex-col items-center justify-evenly sm:flex-row sm:pt-0">

                <div className="flex w-full items-center justify-center sm:w-1/2">
                    <FormComponent />
                </div>
            </div>
    
        </div>
    )
}

export default HomePage
