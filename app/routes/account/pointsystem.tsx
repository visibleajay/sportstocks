export default function PointSystem() {
  return (
    <div className="flex flex-row justify-around w-full pt-12 ">
      <Batsman />
      <Bowler />
      <Fielder />
    </div>
  );
}

const Fielder = () => (
  <table className="table-auto">
    <thead className="bg-gray-100">
      <tr>
        <th className="border-b text-xl" colSpan={4}>
          Fielding
        </th>
      </tr>
      <tr>
        <th className="border-r"></th>
        <th
          scope="col"
          className="border-r px-6 py-3 text-sm font-medium text-gray-900"
        >
          T20
        </th>
        <th
          scope="col"
          className="border-r px-6 py-3 text-sm font-medium text-gray-900"
        >
          ODI
        </th>
        <th
          scope="col"
          className="border-r px-6 py-3 text-sm font-medium text-gray-900"
        >
          Test
        </th>
      </tr>
    </thead>
    <tbody>
      <tr className="border bg-white transition duration-300 ease-in-out hover:bg-violet-100">
        <td
          scope="col"
          className="border-r px-6 py-2 text-sm font-medium text-gray-900"
        >
          Catch
        </td>
        <td
          scope="col"
          className="border-r px-6 py-2 text-sm font-medium text-gray-900"
        >
          8
        </td>
        <td
          scope="col"
          className="border-r px-6 py-2 text-sm font-medium text-gray-900"
        >
          8
        </td>
        <td
          scope="col"
          className="border-r px-6 py-2 text-sm font-medium text-gray-900"
        >
          8
        </td>
      </tr>
      <tr className="border bg-white transition duration-300 ease-in-out hover:bg-violet-100">
        <td
          scope="col"
          className="border-r px-6 py-2 text-sm font-medium text-gray-900"
        >
          Runout(Field/Catch)
        </td>
        <td
          scope="col"
          className="border-r px-6 py-2 text-sm font-medium text-gray-900"
        >
          (8/4)
        </td>
        <td
          scope="col"
          className="border-r px-6 py-2 text-sm font-medium text-gray-900"
        >
          (8/4)
        </td>
        <td
          scope="col"
          className="border-r px-6 py-2 text-sm font-medium text-gray-900"
        >
          (8/4)
        </td>
      </tr>
      <tr className="border bg-white transition duration-300 ease-in-out hover:bg-violet-100">
        <td
          scope="col"
          className="border-r px-6 py-2 text-sm font-medium text-gray-900"
        >
          Stumping
        </td>
        <td
          scope="col"
          className="border-r px-6 py-2 text-sm font-medium text-gray-900"
        >
          10
        </td>
        <td
          scope="col"
          className="border-r px-6 py-2 text-sm font-medium text-gray-900"
        >
          10
        </td>
        <td
          scope="col"
          className="border-r px-6 py-2 text-sm font-medium text-gray-900"
        >
          10
        </td>
      </tr>
    </tbody>
  </table>
);

const Bowler = () => (
  <table className="table-auto">
    <thead className="bg-gray-100">
      <tr>
        <th className="border-b py-4 text-xl" colSpan={4}>
          Bowling
        </th>
      </tr>
      <tr>
        <th className="border-r"></th>
        <th
          scope="col"
          className="border-r px-6 py-3 text-sm font-medium text-gray-900"
        >
          T20
        </th>
        <th
          scope="col"
          className="border-r px-6 py-3 text-sm font-medium text-gray-900"
        >
          ODI
        </th>
        <th
          scope="col"
          className="border-r px-6 py-3 text-sm font-medium text-gray-900"
        >
          Test
        </th>
      </tr>
    </thead>
    <tbody>
      <tr className="border bg-white transition duration-300 ease-in-out hover:bg-violet-100">
        <td
          scope="col"
          className="border-r px-6 py-2 text-sm font-medium text-gray-900"
        >
          Dotball
        </td>
        <td
          scope="col"
          className="border-r px-6 py-2 text-sm font-medium text-gray-900"
        >
          1
        </td>
        <td
          scope="col"
          className="border-r px-6 py-2 text-sm font-medium text-gray-900"
        >
          1
        </td>
        <td
          scope="col"
          className="border-r px-6 py-2 text-sm font-medium text-gray-900"
        >
          -
        </td>
      </tr>
      <tr className="border bg-white transition duration-300 ease-in-out hover:bg-violet-100">
        <td
          scope="col"
          className="border-r px-6 py-2 text-sm font-medium text-gray-900"
        >
          1 Wicket
        </td>
        <td
          scope="col"
          className="border-r px-6 py-2 text-sm font-medium text-gray-900"
        >
          20
        </td>
        <td
          scope="col"
          className="border-r px-6 py-2 text-sm font-medium text-gray-900"
        >
          20
        </td>
        <td
          scope="col"
          className="border-r px-6 py-2 text-sm font-medium text-gray-900"
        >
          30
        </td>
      </tr>
      <tr className="border bg-white transition duration-300 ease-in-out hover:bg-violet-100">
        <td
          scope="col"
          className="border-r px-6 py-2 text-sm font-medium text-gray-900"
        >
          3 Wicket Haul
        </td>
        <td
          scope="col"
          className="border-r px-6 py-2 text-sm font-medium text-gray-900"
        >
          5
        </td>
        <td
          scope="col"
          className="border-r px-6 py-2 text-sm font-medium text-gray-900"
        >
          5
        </td>
        <td
          scope="col"
          className="border-r px-6 py-2 text-sm font-medium text-gray-900"
        >
          -
        </td>
      </tr>
      <tr className="border bg-white transition duration-300 ease-in-out hover:bg-violet-100">
        <td
          scope="col"
          className="border-r px-6 py-2 text-sm font-medium text-gray-900"
        >
          5 Wicket Haul
        </td>
        <td
          scope="col"
          className="border-r px-6 py-2 text-sm font-medium text-gray-900"
        >
          10
        </td>
        <td
          scope="col"
          className="border-r px-6 py-2 text-sm font-medium text-gray-900"
        >
          5
        </td>
        <td
          scope="col"
          className="border-r px-6 py-2 text-sm font-medium text-gray-900"
        >
          5
        </td>
      </tr>
      <tr className="border bg-white transition duration-300 ease-in-out hover:bg-violet-100">
        <td
          scope="col"
          className="border-r px-6 py-2 text-sm font-medium text-gray-900"
        >
          Maiden Over
        </td>
        <td
          scope="col"
          className="border-r px-6 py-2 text-sm font-medium text-gray-900"
        >
          4
        </td>
        <td
          scope="col"
          className="border-r px-6 py-2 text-sm font-medium text-gray-900"
        >
          5
        </td>
        <td
          scope="col"
          className="border-r px-6 py-2 text-sm font-medium text-gray-900"
        >
          -
        </td>
      </tr>
      <tr className="border bg-white transition duration-300 ease-in-out hover:bg-violet-100">
        <td
          scope="col"
          className="border-r px-6 py-2 text-sm font-medium text-gray-900"
        >
          LBW
        </td>
        <td
          scope="col"
          className="border-r px-6 py-2 text-sm font-medium text-gray-900"
        >
          5
        </td>
        <td
          scope="col"
          className="border-r px-6 py-2 text-sm font-medium text-gray-900"
        >
          5
        </td>
        <td
          scope="col"
          className="border-r px-6 py-2 text-sm font-medium text-gray-900"
        >
          -
        </td>
      </tr>
      <tr className="border bg-white transition duration-300 ease-in-out hover:bg-violet-100">
        <td
          scope="col"
          className="border-r px-6 py-2 text-sm font-medium text-gray-900"
        >
          Bowled
        </td>
        <td
          scope="col"
          className="border-r px-6 py-2 text-sm font-medium text-gray-900"
        >
          5
        </td>
        <td
          scope="col"
          className="border-r px-6 py-2 text-sm font-medium text-gray-900"
        >
          5
        </td>
        <td
          scope="col"
          className="border-r px-6 py-2 text-sm font-medium text-gray-900"
        >
          -
        </td>
      </tr>
    </tbody>
  </table>
);

const Batsman = () => (
  <table className="table-auto">
    <thead className="bg-gray-100">
      <tr>
        <th className="border-b py-4 text-xl" colSpan={4}>
          Batting
        </th>
      </tr>
      <tr>
        <th className="border-r"></th>
        <th
          scope="col"
          className="border-r px-6 py-3 text-sm font-medium text-gray-900"
        >
          T20
        </th>
        <th
          scope="col"
          className="border-r px-6 py-3 text-sm font-medium text-gray-900"
        >
          ODI
        </th>
        <th
          scope="col"
          className="border-r px-6 py-3 text-sm font-medium text-gray-900"
        >
          Test
        </th>
      </tr>
    </thead>
    <tbody>
      <tr className="border bg-white transition duration-300 ease-in-out hover:bg-violet-100">
        <td
          scope="col"
          className="border-r px-6 py-2 text-sm font-medium text-gray-900"
        >
          1 Run
        </td>
        <td
          scope="col"
          className="border-r px-6 py-2 text-sm font-medium text-gray-900"
        >
          1
        </td>
        <td
          scope="col"
          className="border-r px-6 py-2 text-sm font-medium text-gray-900"
        >
          1
        </td>
        <td
          scope="col"
          className="border-r px-6 py-2 text-sm font-medium text-gray-900"
        >
          -
        </td>
      </tr>
      <tr className="border bg-white transition duration-300 ease-in-out hover:bg-violet-100">
        <td
          scope="col"
          className="border-r px-6 py-2 text-sm font-medium text-gray-900"
        >
          Four
        </td>
        <td
          scope="col"
          className="border-r px-6 py-2 text-sm font-medium text-gray-900"
        >
          1
        </td>
        <td
          scope="col"
          className="border-r px-6 py-2 text-sm font-medium text-gray-900"
        >
          1
        </td>
        <td
          scope="col"
          className="border-r px-6 py-2 text-sm font-medium text-gray-900"
        >
          2
        </td>
      </tr>
      <tr className="border bg-white transition duration-300 ease-in-out hover:bg-violet-100">
        <td
          scope="col"
          className="border-r px-6 py-2 text-sm font-medium text-gray-900"
        >
          Six
        </td>
        <td
          scope="col"
          className="border-r px-6 py-2 text-sm font-medium text-gray-900"
        >
          1
        </td>
        <td
          scope="col"
          className="border-r px-6 py-2 text-sm font-medium text-gray-900"
        >
          2
        </td>
        <td
          scope="col"
          className="border-r px-6 py-2 text-sm font-medium text-gray-900"
        >
          3
        </td>
      </tr>
      <tr className="border bg-white transition duration-300 ease-in-out hover:bg-violet-100">
        <td
          scope="col"
          className="border-r px-6 py-2 text-sm font-medium text-gray-900"
        >
          30
        </td>
        <td
          scope="col"
          className="border-r px-6 py-2 text-sm font-medium text-gray-900"
        >
          1
        </td>
        <td
          scope="col"
          className="border-r px-6 py-2 text-sm font-medium text-gray-900"
        >
          -
        </td>
        <td
          scope="col"
          className="border-r px-6 py-2 text-sm font-medium text-gray-900"
        >
          -
        </td>
      </tr>
      <tr className="border bg-white transition duration-300 ease-in-out hover:bg-violet-100">
        <td
          scope="col"
          className="border-r px-6 py-2 text-sm font-medium text-gray-900"
        >
          50
        </td>
        <td
          scope="col"
          className="border-r px-6 py-2 text-sm font-medium text-gray-900"
        >
          2
        </td>
        <td
          scope="col"
          className="border-r px-6 py-2 text-sm font-medium text-gray-900"
        >
          1
        </td>
        <td
          scope="col"
          className="border-r px-6 py-2 text-sm font-medium text-gray-900"
        >
          -
        </td>
      </tr>
      <tr className="border bg-white transition duration-300 ease-in-out hover:bg-violet-100">
        <td
          scope="col"
          className="border-r px-6 py-2 text-sm font-medium text-gray-900"
        >
          100
        </td>
        <td
          scope="col"
          className="border-r px-6 py-2 text-sm font-medium text-gray-900"
        >
          5
        </td>
        <td
          scope="col"
          className="border-r px-6 py-2 text-sm font-medium text-gray-900"
        >
          3
        </td>
        <td
          scope="col"
          className="border-r px-6 py-2 text-sm font-medium text-gray-900"
        >
          1
        </td>
      </tr>
    </tbody>
  </table>
);
