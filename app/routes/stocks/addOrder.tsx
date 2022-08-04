import { useEffect, useState } from "react";
import { Button, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { Form, useSubmit, useActionData } from "@remix-run/react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { action } from "..";
import { FieldError } from "~/components/fieldError";

const validationSchema = yup.object().shape({
  player: yup.string().required("Player is required!"),
  min: yup
    .number()
    .required("Min is required!")
    .typeError("Min should be number"),
  max: yup
    .number()
    .required("Max is required!")
    .typeError("Max should be number"),

  quantity: yup
    .number()
    .required("Quantity is required!")
    .typeError("Quantity should be number"),
  price: yup
    .number()
    .required("Price is required!")
    .typeError("Price should be number"),
});

export default function AddOrder({
  players = [],
  isAddOrder,
  onClose,
}: {
  players: any[];
  isAddOrder: boolean;
  onClose: (val: boolean) => void;
}) {
  const [stockType, setStockType] = useState<"buy" | "sell">("buy");
  const submit = useSubmit();

  const actionData = useActionData<typeof action>();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: initial_values,
    resolver: yupResolver(validationSchema),
  });

  useEffect(() => {
    if (actionData && actionData.hasOwnProperty("id")) {
      reset(initial_values);
      onClose(false);
    }
  }, [actionData]);

  return (
    <div
      className="modal fade fixed top-0 left-0 hidden h-full w-full overflow-y-auto overflow-x-hidden bg-gray-500 bg-opacity-75 outline-none transition-opacity"
      style={{ display: isAddOrder ? "block" : "none" }}
      aria-labelledby="addOrder"
      aria-modal="true"
      role="dialog"
    >
      <div className="modal-dialog modal-dialog-centered pointer-events-none relative flex h-full w-auto items-center justify-center">
        <div className="modal-content min-h-prose pointer-events-auto relative m-auto flex max-w-prose flex-col rounded-md border-none bg-white bg-clip-padding text-current antialiased shadow-lg outline-none">
          <div
            className={`flex flex-row items-center justify-between p-3 ${
              stockType === "buy" ? "bg-blue-600" : "bg-red-600"
            }`}
          >
            <div className="my-0 text-xl font-medium text-white">Add Stock</div>
            <div className="inline-flex" role="group" aria-label="Button group">
              <button
                className={`focus:shadow-outline h-10 rounded-l-lg bg-indigo-700 px-5 transition-colors duration-150 hover:bg-indigo-800 ${
                  stockType === "buy" ? "text-gray-200" : "text-slate-900"
                }`}
                onClick={() => setStockType("buy")}
              >
                Buy
              </button>
              <button
                className={`focus:shadow-outline h-10 rounded-r-lg bg-indigo-700 px-5 transition-colors duration-150 hover:bg-indigo-800 ${
                  stockType === "sell" ? "text-gray-200" : "text-slate-900"
                }`}
                onClick={() => setStockType("sell")}
              >
                Sell
              </button>
            </div>
          </div>
          <Form
            method="post"
            className="flex h-full flex-col justify-around space-y-5 p-4"
            onSubmit={(event: any) => {
              handleSubmit(() => submit(event.target))(event);
            }}
          >
            <input
              type="hidden"
              name="userId"
              value="cl6apo2830009uuozlgjtejt6"
            />
            <input type="hidden" name="type" value={stockType} />
            <div className="w-full flex-1">
              <InputLabel id="selectPlayer">Select Player</InputLabel>
              <Select
                labelId="selectPlayer"
                id="selectPlayer"
                label="Select Player"
                {...register("player")}
                className="w-full"
              >
                {players.map(({ id, name }, index) => {
                  return (
                    <MenuItem key={`${name} ${index}`} value={id}>
                      {name}
                    </MenuItem>
                  );
                })}
              </Select>
              <FieldError
                name="player"
                errors={errors}
                // @ts-ignore
                sError={actionData?.errors?.player}
              />
            </div>

            <div className="flex flex-row space-x-5">
              <div className="flex-1">
                <TextField
                  variant="outlined"
                  label="Min"
                  {...register("min")}
                  className={`form-control`}
                  type="number"
                />
                <FieldError
                  name="min"
                  errors={errors}
                  // @ts-ignore
                  sError={actionData?.errors?.min}
                />
              </div>
              <div className="flex-1">
                <TextField
                  variant="outlined"
                  label="Max"
                  {...register("max")}
                  className={`form-control`}
                  type="number"
                />
                <FieldError
                  name="max"
                  errors={errors}
                  // @ts-ignore
                  sError={actionData?.errors?.max}
                />
              </div>
            </div>

            <div className="flex flex-row space-x-5">
              <div className="flex-1">
                <TextField
                  variant="outlined"
                  label="Quantity"
                  {...register("quantity")}
                  className={`form-control`}
                  type="number"
                />
                <FieldError
                  name="quantity"
                  errors={errors}
                  // @ts-ignore
                  sError={actionData?.errors?.quantity}
                />
              </div>
              <div>
                <TextField
                  autoComplete="Price"
                  variant="outlined"
                  label="Price"
                  {...register("price")}
                  className={`form-control`}
                  type="number"
                />
                <FieldError
                  name="price"
                  errors={errors}
                  // @ts-ignore
                  sError={actionData?.errors?.price}
                />
              </div>
            </div>

            <div className="flex flex-row justify-evenly">
              <Button variant="outlined" onClick={() => onClose(false)}>
                Cancel
              </Button>
              <Button variant="outlined" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

type Order = {
  player: string;
  min: null | number;
  max: null | number;
  price: null | number;
  quantity: null | number;
  type?: "buy" | "sell";
};

const initial_values: Order = {
  player: "",
  min: null,
  max: null,
  price: null,
  quantity: null,
};
