import { auth } from "../_lib/auth";

export const metadata = { title: "Guest area" };
async function Page() {
  const session = await auth();

  const firstName = session.user.name.split(" ").at(0);

  return (
    <div>
      <h1 className="font-semibold text-2xl text-accent-400 mb-7">
        welcome {firstName}
      </h1>
    </div>
  );
}

export default Page;
