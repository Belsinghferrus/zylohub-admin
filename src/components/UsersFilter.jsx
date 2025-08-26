export default function UsersFilter({ filter, setFilter }) {
  const filters = ["all", "hoster", "seeker"];

  return (
    <div className="flex gap-4">
      {filters.map((role) => (
        <button
          key={role}
          onClick={() => setFilter(role)}
          className={`flex-1 px-4 py-2 rounded-lg border text-center font-medium shadow-sm transition
            ${
              filter === role
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-blue-50 text-blue-700 border-blue-300 hover:bg-blue-100"
            }`}
        >
          {role.charAt(0).toUpperCase() + role.slice(1)}
        </button>
      ))}
    </div>
  );
}


// import { Button } from "./ui/button";

// export default function UsersFilter({ filter, setFilter }) {
//   const filters = ["all", "hoster", "seeker"];

//   return (
//     <div className="flex gap-3">
//       {filters.map((f) => (
//         <Button
//           key={f}
//           variant={filter === f ? "default" : "outline"}
//           className="capitalize"
//           onClick={() => setFilter(f)}
//         >
//           {f}
//         </Button>
//       ))}
//     </div>
//   );
// }

