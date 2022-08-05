import { Form, useActionData } from "@remix-run/react";
import { ActionArgs, redirect } from "@remix-run/server-runtime";
import invariant from "tiny-invariant";
import { createFeedback } from "~/models/feedback.server";
import { getUser } from "~/session.server";

export async function action({ request }: ActionArgs) {
  const user = await getUser(request);
  if (!user) {
    return redirect("/login");
  }

  const formData = await request.formData();

  const email = formData.get("email");
  const feedback = formData.get("feedback");

  invariant(typeof email === "string", "Email is required");
  invariant(typeof feedback === "string", "Feedback is required");

  return createFeedback({ email, feedback, userId: user.id });
}

export default function ContactUS() {
  const actionData = useActionData<typeof action>();

  return (
    <section>
      <div className="pt-10 pb-20 text-gray-500">
        <div className="container mx-auto flex flex-col justify-center md:flex-row">
          <div className="mr-2 flex w-full flex-col bg-gray-100 p-8 p-6 dark:bg-gray-800 sm:rounded-lg lg:w-1/3">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-800 dark:text-white sm:text-5xl">
              Get in touch
            </h1>
            <p className="text-normal mt-2 text-lg font-medium text-gray-600 dark:text-gray-400 sm:text-2xl">
              Fill in the form to start a conversation
            </p>

            {/* <div className="mt-8 flex items-center text-gray-600 dark:text-gray-400">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                className="h-8 w-8 text-gray-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <div className="text-md ml-4 w-40 font-semibold tracking-wide">
                Acme Inc, Street, State, Postal Code
              </div>
            </div> */}

            <div className="mt-4 flex items-center text-gray-600 dark:text-gray-400">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                className="h-8 w-8 text-gray-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <div className="text-md ml-4 w-40 font-semibold tracking-wide">
                +44 1234567890
              </div>
            </div>

            <div className="mt-2 flex items-center text-gray-600 dark:text-gray-400">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                className="h-8 w-8 text-gray-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <div className="text-md ml-4 w-40 font-semibold tracking-wide">
                info@acme.org
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col justify-center lg:w-1/3">
            <div className="container w-full px-4">
              <div className="flex flex-wrap justify-center">
                <div className="w-full px-4">
                  <div className="relative mb-6 flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-lg">
                    <div className="flex-auto p-5 lg:p-10">
                      <h4 className="mb-4 text-2xl font-semibold text-black">
                        Have a suggestion?
                      </h4>
                      <Form method="post">
                        <div className="relative mb-3 w-full">
                          <label className="mb-2 block text-xs font-bold uppercase text-gray-700">
                            Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            className="w-full rounded border-0 px-3 py-3 text-sm
                    text-gray-800 placeholder-black shadow outline-none focus:bg-gray-100"
                            style={{ transition: "all 0.15s ease 0s;" }}
                            required
                          />
                        </div>
                        <div className="relative mb-3 w-full">
                          <label className="mb-2 block text-xs font-bold uppercase text-gray-700">
                            Message
                          </label>
                          <textarea
                            maxLength={300}
                            name="feedback"
                            rows={4}
                            cols={80}
                            className="w-full rounded border-0 px-3 py-3 text-sm text-gray-800 placeholder-black shadow focus:bg-gray-100 focus:outline-none"
                            required
                          ></textarea>
                        </div>
                        <div className="mt-6 text-center">
                          <button
                            className="mx-auto mr-1 mb-1 rounded bg-yellow-300 px-6 py-3 text-center text-sm font-bold uppercase text-black shadow outline-none hover:shadow-lg focus:outline-none active:bg-yellow-400"
                            type="submit"
                            style={{ transition: "all 0.15s ease 0s;" }}
                          >
                            Submit
                          </button>
                        </div>
                      </Form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
