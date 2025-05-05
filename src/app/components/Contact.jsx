'use client'
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
    const [state, handleSubmit] = useForm("xgvabvje");

    return (
        <section id="Contact" className="flex flex-col justify-center items-center pt-[120px]">
            <h2 className="text-4xl md:text-5xl">Contact</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 mt-10 md:mt-12 mx-4 md:mx-6 mb-3">
                <div className="max-w-lg px-8">
                    <p>
                        I’d love to hear from you! Whether it’s about a potential job opportunity, a collaborative project, or just to connect, please feel free to fill out the form. I’ll respond back as soon as possible. Thank you for reaching out, and I look forward to starting our conversation!
                    </p>
                </div>
                {state.succeeded ?
                    <div className="flex justify-center items-center">
                        <p>Thanks for contacting me!</p>
                    </div>
                    :
                    <div className="max-w-lg p-6 rounded-lg border-2 border-gray-700">
                        <h3 className="flex justify-center items-center font-bold text-2xl mb-4">Get In Touch!</h3>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="email" className="block">
                                Email Address
                            </label>
                            <input
                                id='email'
                                name='email'
                                type='email'
                                className="border-b-2 border-gray-700 mb-2 p-2 w-full"
                                required
                            />
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                            />
                            <label htmlFor='subject' className="block">
                                Subject
                            </label>
                            <input
                                id='subject'
                                name='subject'
                                type='text'
                                className="border-b-2 border-gray-700 w-full mb-2 p-2"
                                required
                            />
                            <ValidationError
                                prefix="Subject"
                                field="subject"
                                errors={state.errors}
                            />
                            <label htmlFor="message" className="block">
                                Message
                            </label>
                            <textarea
                                id='message'
                                name='message'
                                className="border-b-2 border-gray-700 w-full mb-2 p-2"
                                required
                            />
                            <ValidationError
                                prefix="Message"
                                field="message"
                                errors={state.errors}
                            />
                            <div className="flex justify-center mt-3">
                                <button type='submit' disabled={state.submitting} className="bg-gray-200 text-stone-950 py-2 px-4 font-semibold rounded-full hover:bg-blue-500 hover:text-white">Submit</button>
                            </div>
                        </form>
                    </div>
                }
            </div>
        </section>
    );
} 