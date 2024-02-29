
const identityG = [
  { id: 1, label: "Name", value: "RAHERIMANANTSOA" },
  { id: 3, label: "Surname", value: "Najoro Fanantenana" },
  { id: 5, label: "Birthday", value: "27 Feb 1999 (24ans)" },
  { id: 4, label: "Ville", value: "Antananarivo" },
  { id: 2, label: "contry", value: "Madagascar" },
  { id: 6, label: "Nationality", value: "Malagasy" },
];

const Biographie = () => {

  return (
    <ul className="biographies">
      {identityG.map(({ id, label, value }) => {
        return (
          <li className="biographie" key={id}>
            <span>{label} :</span>
            <span>{value}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default Biographie ;
