function Error(props: JSX.IntrinsicElements["div"]) {
  return <div {...props} className="mx-0.5 text-xs text-red-700" />;
}
function ServerError({ message }: { message: string | null }) {
  if (!message) return null;
  return <Error>{message}</Error>;
}

export function FieldError({
  name,
  errors,
  sError,
}: {
  name: string;
  errors: any;
  sError: string | null;
}) {
  const message = errors[name]?.message;
  if (message) {
    return <Error>{message}</Error>;
  }
  return <ServerError message={sError} />;
}
