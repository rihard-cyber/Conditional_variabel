console.clear();
//Contoh kode
const employeeList = [
  {
    name: "Richard",
    age: 52,
  },
  {
    name: "Iqbal",
    age: 45,
  },
  {
    name: "Aris",
    age: 57,
  },
  {
    name: "Andika",
    age: 60,
  },
  {
    name: "Sekar",
    age: 58,
  },
];

//sudah pensiun
const employeeAge = employeeList.map((employee) => {
  const employeeStatus = employee.age >= 57 ? "Pensiun" : "Belum Pensiun";
  const employeeInfo = {
    name: employee.name,
    age: employee.age,
    status: employeeStatus,
  };
  return employeeInfo;
});

const employeeAgeStatus = employeeAge.filter(
  (employee) => employee.status === "Pensiun"
);

console.log(employeeAgeStatus);
