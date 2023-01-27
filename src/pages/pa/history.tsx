// ====================================
// /pa/history - Tashi Wangchuk
// ====================================

import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const History: NextPage = () => {
    return (
        <>
            <Head>
                <title>History</title>
                <meta name="description" content="History Tab" />
            </Head>
            <main className="flex flex-col">
                <ul className="fixed flex w-full border-b-2 border-gray-100 gap-10 shadow-xl">
                    <li className="flex group border rounded-xl bg-white">
                        <a className="relative block p-4 transition duration-700 group-hover:bg-blue-600 rounded-xl" href="/ham">
                            <span
                                className="absolute inset-x-0 -bottom-px h-px w-full"
                            ></span>

                            <div className="flex items-center justify-center">
                                <svg fill="none" stroke="currentColor" className="h-5 w-5 flex-shrink-0 text-gray-900 transition duration-700  group-hover:text-white" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"></path>
                                </svg>
                            </div>
                        </a>
                    </li>

                    <span className="flex items-center w-1/2 mx-auto gap-10">
                        <li className="flex-1 group bg-white">
                            <a className="relative block p-4 rounded-full transition duration-700  group-hover:bg-blue-600" href="/">
                                <span
                                    className="absolute inset-x-0 -bottom-px h-px w-full"
                                ></span>

                                <div className="flex items-center justify-center">
                                    <svg fill="none" stroke="currentColor"
                                        className="h-5 w-5 flex-shrink-0 text-gray-900 group-hover:text-white transition duration-700 " stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"></path>
                                    </svg>

                                    <span className="ml-3 text-sm font-medium text-gray-900 group-hover:text-white transition duration-700 "> Home</span>
                                </div>
                            </a>
                        </li>

                        <li className="flex-1 group bg-white">
                            <a className="relative block p-4 rounded-full group-hover:bg-blue-600 transition duration-700 " href="">
                                <div className="flex items-center justify-center">
                                    <svg fill="none" stroke="currentColor"
                                        className="h-5 w-5 flex-shrink-0 text-gray-900 group-hover:text-white transition duration-700 " stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"></path>
                                    </svg>

                                    <span className="ml-3 text-sm font-medium transition duration-700 text-gray-900 group-hover:text-white"> History </span>
                                </div>
                            </a>
                        </li>
                    </span>
                </ul>

                <div className="mt-24"></div>


                {/* History Card */}
                <div className="mx-auto w-2/3">
                    <div className="relative w-full">
                        <div
                            className="relative block rounded-xl border-gray-100 p-8 mb-4 shadow-xl hover:shadow-none border-2"
                        >
                            <div className="border-b">
                                <span className="absolute top-2 text-sm font-medium text-gray-500">Vehicle No:</span>

                                <span className="absolute ml-20 top-2 text-sm font-medium text-gray-900"> BP-A-A1111 </span>

                                <svg className="absolute top-2 right-4 h-5 w-5 flex-shrink-0 text-red-600 transition duration-700  group-hover:text-white" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>

                            <div className="p-3 flex">
                                <svg className="absolute h-5 w-5 flex-shrink-0 text-gray-500 transition duration-700  group-hover:text-white" fill=" none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                <span className="ml-5 text-sm font-medium text-gray-500">Previous Report:</span>
                                <span className="ml-5 text-sm font-medium text-gray-900">02:30 pm </span>
                            </div>
                            <div className="p-3 flex">
                                <svg className="absolute h-5 w-5 flex-shrink-0 text-gray-500 transition duration-700  group-hover:text-white" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"></path>
                                </svg>
                                <span className="ml-5 text-sm font-medium text-gray-500">Time Remaining:</span>
                                <span className="ml-5 text-sm font-medium text-gray-900">00:30:00</span>
                            </div>

                            <Link href="" className="flex items-center justify-center">
                                <button type="button" className="w-30 px-4 py-2 ml-2 inline rounded-full text-white bg-blue-600 hover:bg-white hover:outline-double hover:text-blue-600">
                                    Report
                                </button>
                            </Link>




                        </div>
                        <div
                            className="relative block rounded-xl border-gray-100 p-8 mb-4 shadow-xl hover:shadow-none border-2"
                        >
                            <div className="border-b">
                                <span className="absolute top-2 text-sm font-medium text-gray-500">Vehicle No:</span>

                                <span className="absolute ml-20 top-2 text-sm font-medium text-gray-900"> BP-A-A1111 </span>

                                <svg className="absolute top-2 right-4 h-5 w-5 flex-shrink-0 text-red-600 transition duration-700  group-hover:text-white" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>

                            <div className="p-3 flex">
                                <svg className="absolute h-5 w-5 flex-shrink-0 text-gray-500 transition duration-700  group-hover:text-white" fill=" none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                <span className="ml-5 text-sm font-medium text-gray-500">Previous Report:</span>
                                <span className="ml-5 text-sm font-medium text-gray-900">02:30 pm </span>
                            </div>
                            <div className="p-3 flex">
                                <svg className="absolute h-5 w-5 flex-shrink-0 text-gray-500 transition duration-700  group-hover:text-white" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"></path>
                                </svg>
                                <span className="ml-5 text-sm font-medium text-gray-500">Time Remaining:</span>
                                <span className="ml-5 text-sm font-medium text-gray-900">00:30:00</span>
                            </div>

                            <Link href="/vehicle/status" className="flex items-center justify-center">
                                <button type="button" className="w-30 px-4 py-2 ml-2 inline rounded-full text-white bg-blue-600 hover:bg-white hover:outline-double hover:text-blue-600">
                                    Report
                                </button>
                            </Link>




                        </div>
                        <div
                            className="relative block rounded-xl border-gray-100 p-8 mb-4 shadow-xl hover:shadow-none border-2"
                        >
                            <div className="border-b">
                                <span className="absolute top-2 text-sm font-medium text-gray-500">Vehicle No:</span>

                                <span className="absolute ml-20 top-2 text-sm font-medium text-gray-900"> BP-A-A1111 </span>

                                <svg className="absolute top-2 right-4 h-5 w-5 flex-shrink-0 text-red-600 transition duration-700  group-hover:text-white" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>

                            <div className="p-3 flex">
                                <svg className="absolute h-5 w-5 flex-shrink-0 text-gray-500 transition duration-700  group-hover:text-white" fill=" none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                <span className="ml-5 text-sm font-medium text-gray-500">Previous Report:</span>
                                <span className="ml-5 text-sm font-medium text-gray-900">02:30 pm </span>
                            </div>
                            <div className="p-3 flex">
                                <svg className="absolute h-5 w-5 flex-shrink-0 text-gray-500 transition duration-700  group-hover:text-white" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"></path>
                                </svg>
                                <span className="ml-5 text-sm font-medium text-gray-500">Time Remaining:</span>
                                <span className="ml-5 text-sm font-medium text-gray-900">00:30:00</span>
                            </div>

                            <Link href="/vehicle/status" className="flex items-center justify-center">
                                <button type="button" className="w-30 px-4 py-2 ml-2 inline rounded-full text-white bg-blue-600 hover:bg-white hover:outline-double hover:text-blue-600">
                                    Report
                                </button>
                            </Link>




                        </div>


                        <br></br>

                        <ol className="group flex justify-center gap-1 text-xs font-medium">
                            <li>
                                <a
                                    href="#"
                                    className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 hover:bg-blue-200"
                                >
                                    <span className="sr-only">Prev Page</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-3 w-3"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="block h-8 w-8 rounded border border-gray-100 text-center leading-8 hover:bg-blue-200"
                                >
                                    1
                                </a>
                            </li>

                            <li
                                className="block h-8 w-8 rounded border-blue-600 bg-blue-600 text-center leading-8 text-white hover:bg-blue-200"
                            >
                                2
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="block h-8 w-8 rounded border border-gray-100 text-center leading-8 hover:bg-blue-200"
                                >
                                    3
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="block h-8 w-8 rounded border border-gray-100 text-center leading-8 hover:bg-blue-200"
                                >
                                    4
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 hover:bg-blue-200"
                                >
                                    <span className="sr-only">Next Page</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-3 w-3"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </a>
                            </li>
                        </ol>
                    </div>
                </div>
            </main >



            {/* Footer */}
            <footer aria-label="Site Footer" className="bg-white" >
                <div className="max-w-screen-xl px-4 pt-16 pb-8 mx-auto sm:px-6 lg:px-8 lg:pt-24">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-5xl">
                            Druk Park
                        </h2>

                        <p className="max-w-sm mx-auto mt-4 text-gray-500">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum maiores
                            ipsum eos temporibus ea nihil.
                        </p>

                    </div>

                    <div
                        className="pt-8 mt-16 border-t border-gray-100 sm:flex sm:items-center sm:justify-between lg:mt-24"
                    >
                        <nav aria-label="Footer Navigation - Support">
                            <ul className="flex flex-wrap justify-center gap-4 text-xs lg:justify-end">
                                <li>
                                    <a href="#" className="text-gray-500 transition hover:opacity-75">
                                        Terms & Conditions
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="text-gray-500 transition hover:opacity-75">
                                        Privacy Policy
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="text-gray-500 transition hover:opacity-75">
                                        Cookies
                                    </a>
                                </li>
                            </ul>
                        </nav>

                        <ul className="flex justify-center gap-6 mt-8 sm:mt-0 lg:justify-end">
                            <li>
                                <a
                                    href="/"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-gray-700 transition hover:opacity-75"
                                >
                                    <span className="sr-only">Facebook</span>

                                    <svg
                                        className="w-6 h-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-gray-700 transition hover:opacity-75"
                                >
                                    <span className="sr-only">Instagram</span>

                                    <svg
                                        className="w-6 h-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-gray-700 transition hover:opacity-75"
                                >
                                    <span className="sr-only">Twitter</span>

                                    <svg
                                        className="w-6 h-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                                        />
                                    </svg>
                                </a>
                            </li>



                        </ul>
                    </div>
                </div>
            </footer >
        </>
    );
};

export default History;
