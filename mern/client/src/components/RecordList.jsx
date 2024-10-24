import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Record = (props) => (
  <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
      {props.record.name}
    </td>
    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
      {props.record.position}
    </td>
    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
      {props.record.level}
    </td>
    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
      <div className="flex gap-2">
        <Link
          className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-slate-100 h-9 rounded-md px-3"
          to={`/edit/${props.record._id}`}
        >
          Edit
        </Link>
        <button
          className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-slate-100 hover:text-accent-foreground h-9 rounded-md px-3"
          color="red"
          type="button"
          onClick={() => {
            props.deleteRecord(props.record._id);
          }}
        >
          Delete
        </button>
      </div>
    </td>
  </tr>
);

Record.propTypes = {
  record: PropTypes.shape({
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
  deleteRecord: PropTypes.func.isRequired,
};

export default function RecordList() {
  const [records, setRecords] = useState([]);

  // This method fetches the records from the database.
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`https://toepfernfull-be.onrender.com/record/`);
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        console.error(message);
        return;
      }
      const records = await response.json();
      setRecords(records);
    }
    getRecords();
    return;
  }, [records.length]);

  // This method will delete a record
  async function deleteRecord(id) {
    await fetch(`https://toepfernfull-be.onrender.com/record/${id}`, {
      method: "DELETE",
    });
    const newRecords = records.filter((el) => el._id !== id);
    setRecords(newRecords);
  }

  // This method will map out the records on the table
  function recordList() {
    return records.map((record) => {
      return (
        <Record
          record={record}
          deleteRecord={() => deleteRecord(record._id)}
          key={record._id}
        />
      );
    });
  }

  // This following section will display the table with the records of individuals.
  return (
    <>

{/* Video */}
<h1 className="text-lg font-semibold p-4">Option 1: Natural Clay Colors</h1>
<div className="my-4">
        <h3 className="text-lg font-semibold p-4">Clays</h3>
        <p className="text-lg font-semibold p-4">Not all of the Clay can be considered, it needs to be fired at around 1250. But I will check on it</p>
        <video width="600" controls>
          <source src="/20241019_104601.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>


       {/* Image Section */}
       <div className="my-4">
        <h3 className="text-lg font-semibold p-4">Photographs of clay</h3>
        <img 
          src="/20241019_104647.jpg" 
          alt="Team Photo" 
          width="600" 
          className="rounded-lg"
        />
      </div>

      <div className="my-4">
        <h3 className="text-lg font-semibold p-4">Photographs of clay</h3>
        <img 
          src="/20241019_104701.jpg" 
          alt="Team Photo" 
          width="600" 
          className="rounded-lg"
        />
      </div>

      <div className="my-4">
        <h3 className="text-lg font-semibold p-4">Photographs of clay</h3>
        <img 
          src="/20241019_104715.jpg" 
          alt="Team Photo" 
          width="600" 
          className="rounded-lg"
        />
      </div>


      <div className="my-4">
        <h3 className="text-lg font-semibold p-4">Even more clay (only 3rd row to consider)</h3>
        <img 
          src="/20241023_153341.jpg" 
          alt="Team Photo" 
          width="600" 
          className="rounded-lg"
        />
      </div>

      <div className="my-4">
        <h3 className="text-lg font-semibold p-4">Absolute beauty</h3>
        <img 
          src="/20241019_114520.jpg" 
          alt="Team Photo" 
          width="600" 
          className="rounded-lg"
        />
      </div>

      <div className="my-4">
        <h3 className="text-lg font-semibold p-4">Maybe?</h3>
        <img 
          src="/20241019_114509.jpg" 
          alt="Team Photo" 
          width="600" 
          className="rounded-lg"
        />
      </div>

      <div className="my-4">
        <h3 className="text-lg font-semibold p-4">One I am using right now without grog</h3>
        <img 
          src="/20241019_114551.jpg" 
          alt="Team Photo" 
          width="600" 
          className="rounded-lg"
        />
      </div>

      <div className="my-4">
        <h3 className="text-lg font-semibold p-4">One I am using right now with more grog</h3>
        <img 
          src="/20241019_114557.jpg" 
          alt="Team Photo" 
          width="600" 
          className="rounded-lg"
        />
      </div>




      <h3 className="text-lg font-semibold p-4">Employee Records</h3>
      <div className="border rounded-lg overflow-hidden">
        <div className="relative w-full overflow-auto">
          <table className="w-full caption-bottom text-sm">
            <thead className="[&amp;_tr]:border-b">
              <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                  Name
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                  Position
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                  Level
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="[&amp;_tr:last-child]:border-0">
              {recordList()}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
