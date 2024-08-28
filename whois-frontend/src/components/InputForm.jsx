import {infoTypeOptions} from "../common/constants.js";

function InputForm({domain, infoType, setDomain, setInfoType, handleSubmit, isSubmitting}) {
    return (
        <div className="container-submit flex gap-2 justify-center mt-16">
            <label className="mt-1.5">Domain:</label>
            <div className=" relative ">
                <input type="text"
                       value={domain}
                       onChange={(e) => setDomain(e.target.value)}
                       className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                       placeholder="Enter domain name"/>
            </div>
            <label className="mt-1.5">Type:</label>
            <select
                value={infoType}
                onChange={(e) => setInfoType(e.target.value)}
                className="block px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm w-52 focus:outline-none focus:ring-primary-500 focus:border-primary-500">
                {
                    infoTypeOptions.map(item => (<option key={item.value} value={item.value}>{item.text}</option>))
                }
            </select>
            <div className=" inline-flex rounded-md shadow">
                <button
                    type="button"
                    disabled={isSubmitting}
                    onClick={handleSubmit}
                    className="flex py-2 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                    {isSubmitting && (
                        <svg width="20" height="20" fill="currentColor" className="mr-2 animate-spin"
                             viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z">
                            </path>
                        </svg>
                    )}
                    Submit
                </button>
            </div>
        </div>
    );
}

export default InputForm;