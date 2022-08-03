import { ActionArgs, json } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import { useEffect } from "react";
import { createUser } from "~/models/login.server";

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();
  const mobile = formData.get("mobile");

  const mobileRegex = /^\d{10}$/;

  // @ts-ignore
  const mobile_number = +mobile;
  if (isNaN(mobile_number) || !mobileRegex.test(mobile + "")) {
    return json(
      { error: { mobile: "Please enter a valid mobile number" } },
      { status: 400 }
    );
  }

  // @ts-ignore
  return createUser(mobile);
}

export default function LoginAge() {
  const actionData = useActionData();

  useEffect(() => {
    if (actionData) console.log({ actionData });
  }, [actionData]);

  return (
    <div className="bg-gradient-to-br from-violet-100 to-white antialiased">
      <div className="container mx-auto px-6">
        <div className="flex h-screen flex-col justify-evenly text-center md:flex-row md:items-center md:text-left">
          <div className="flex w-full flex-col">
            <div className="h-50 mx-auto w-52 flex-1 md:mx-0">
              <TradingLogo />
            </div>
            <h1 className="text-5xl font-bold text-gray-800">Sport Stocks</h1>
            <p className="mx-auto w-5/12 text-gray-500 md:mx-0">
              Trade Sports Like Stocks
            </p>
          </div>
          <div className="mx-auto w-full md:mx-0 md:w-full lg:w-9/12">
            <div className="flex w-full flex-col rounded-xl bg-white p-10 shadow-xl">
              <h2 className="mb-5 text-left text-2xl font-bold text-gray-800">
                Mobile SignIn
              </h2>
              <Form
                method="post"
                className="w-full"
                onSubmit={(event: any) => {
                  // handleSubmit(() => submit(event.target))(event);
                }}
              >
                <div className="my-5 flex w-full flex-col">
                  <label className="mb-2 text-gray-500">Mobile Number</label>
                  <input
                    type="text"
                    name="mobile"
                    placeholder="Please insert your mobile number"
                    className="appearance-none rounded-lg border-2 border-gray-100 px-4 py-3 placeholder-gray-300 focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                  />
                </div>
                <div className="my-5 flex w-full flex-col">
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-green-600 py-4 text-green-100"
                  >
                    <div className="flex flex-row items-center justify-center">
                      <div className="mr-2">
                        <svg
                          className="h-6 w-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                          ></path>
                        </svg>
                      </div>
                      <div className="font-bold">Get OTP</div>
                    </div>
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const TradingLogo = () => (
  <svg
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 490.04 490.04"
    style={{ fill: "#432313" }}
    xmlSpace="preserve"
  >
    <g>
      <path
        d="M96.701,148.775c-2.826-5.265-6.854-9.759-11.663-13.326c-5.681-4.215-12.458-7.089-20.002-7.838
c-0.064-0.006-0.122-0.031-0.187-0.037c-1.885-0.194-3.715-0.071-5.553-0.004c10.867,3.044,20.445,10.424,25.667,21.414
l15.442,32.474l10.362,21.79l31.86-3.004l6.982-11.334l-14.651,3.842L96.701,148.775z"
      />
      <path
        d="M222.552,175.65l-24.998-15.404c-1.526-0.94-3.272-1.43-5.044-1.43c-0.735,0-1.477,0.087-2.212,0.26
c-2.474,0.593-4.615,2.142-5.95,4.307l-22.897,37.169c16.68,3.655,29.927,17.637,31.622,35.573
c0.184,1.945,0.054,3.836-0.036,5.733l32.653-53.002C228.471,184.343,227.064,178.431,222.552,175.65z"
      />
      <path
        d="M78.328,316.453c6.371-6.415,10.739-14.896,11.654-24.602l0.51-5.403l-0.305,0.028c-1.28,0.127-2.553,0.182-3.817,0.182
c-15.491,0-29.78-8.891-36.529-23.085l-32.1-67.494l-8.325,88.168c-0.936,9.913,1.937,19.221,7.212,26.798l26.25,76.933l-9.5,69.92
c-2.11,15.506,8.749,29.779,24.247,31.881c1.296,0.182,2.584,0.261,3.857,0.261c13.949,0,26.096-10.306,28.024-24.508
l10.401-76.551c0.593-4.363,0.166-8.804-1.256-12.961L78.328,316.453z"
      />
      <path
        d="M99.016,117.447c26.76-6.971,42.804-34.324,35.832-61.085c-6.969-26.76-34.314-42.804-61.075-35.832
c-26.76,6.97-42.804,34.324-35.834,61.084C44.91,108.373,72.257,124.416,99.016,117.447z"
      />
      <path
        d="M150.506,215.759l-49.49,4.671l-30.672-64.49c-5.762-12.116-20.272-17.261-32.348-11.5
c-12.116,5.754-17.261,20.24-11.499,32.348l37.967,79.83c4.046,8.52,12.621,13.854,21.916,13.854c0.759,0,1.525-0.031,2.292-0.11
l66.403-6.268c13.349-1.256,23.148-13.104,21.884-26.452C175.701,224.286,163.759,214.36,150.506,215.759z"
      />
      <path
        d="M480.624,284.248l-11.349-120.192c-2.103-22.255-21.995-38.75-44.084-36.481c-15.57,1.471-28.083,11.66-33.567,25.222
l3.551-3.243c16.502-15.056,42.101-13.918,57.164,2.584c15.071,16.502,13.918,42.093-2.585,57.164l-52.925,48.343l3.229,34.207
c0.915,9.706,5.284,18.187,11.655,24.602l-20.324,59.567c-1.423,4.157-1.85,8.599-1.257,12.961l10.401,76.551
c1.928,14.202,14.076,24.508,28.025,24.508c1.272,0,2.561-0.079,3.856-0.261c15.499-2.102,26.357-16.375,24.248-31.881l-9.5-69.92
l26.251-76.933C478.688,303.469,481.56,294.161,480.624,284.248z"
      />
      <path
        d="M391.025,117.447c26.76,6.97,54.106-9.074,61.075-35.834c6.972-26.76-9.072-54.114-35.831-61.084
c-26.763-6.972-54.106,9.072-61.078,35.832C348.222,83.123,364.264,110.476,391.025,117.447z"
      />
      <path
        d="M440.388,163.052c-9.042-9.887-24.413-10.598-34.3-1.549l-51.829,47.341h-65.55c-13.412,0-24.278,10.866-24.278,24.278
s10.867,24.279,24.278,24.279h74.97c6.062,0,11.902-2.268,16.375-6.354l58.784-53.695
C448.742,188.311,449.43,172.955,440.388,163.052z"
      />
      <path
        d="M283.478,89.441c0-15.223-8.118-24.509-28.248-31.612c-14.366-5.415-20.287-8.964-20.287-14.544
c0-4.742,3.549-9.467,14.551-9.467c6.139,0,11.166,0.988,15.205,2.205c2.434,0.743,5.074,0.441,7.287-0.807
c2.213-1.25,3.824-3.35,4.458-5.816l0.159-0.608c1.303-5.09-1.732-10.282-6.807-11.649c-4.25-1.146-9.349-1.985-15.577-2.262V8.282
c0-4.575-3.707-8.282-8.283-8.282c-4.583,0-8.29,3.707-8.29,8.282v7.777c-18.092,3.548-28.57,15.221-28.57,30.096
c0,16.398,12.337,24.855,30.428,30.949c12.519,4.22,17.932,8.282,17.932,14.7c0,6.764-6.598,10.496-16.234,10.496
c-6.843,0-13.291-1.383-18.903-3.359c-2.404-0.854-5.058-0.641-7.303,0.561c-2.253,1.201-3.896,3.288-4.529,5.753l-0.157,0.625
c-1.392,5.437,1.722,11.009,7.082,12.685c5.697,1.778,12.494,3.035,19.409,3.342v7.786c0,4.576,3.706,8.283,8.282,8.283
c4.584,0,8.291-3.707,8.291-8.283v-8.97C272.816,117.348,283.478,104.489,283.478,89.441z"
      />
    </g>
  </svg>
);
