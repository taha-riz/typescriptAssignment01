interface TableData {
  id: number;
  firstName: string;
  lastName: string;
  address: string;
  age: number;
  contactNumber: string;
  salary: number;
  dob: string;
  email: string;
  imageUrl: string;
}

const apiURL =
  "https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001";

fetch(apiURL)
  .then((response) => {
    if (response.ok) {
      return response.json() as Promise<TableData[]>;
    } else {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }
  })
  .then((data) => {
    let tableHead = `<thead>
            <tr>
            <td>#</td>
            <td>Image</td>
            <td>Salary</td>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Email</td>
            <td>Contact Number</td>
            <td>Date of Birth</td>
            <td>Age</td>
            <td>Address</td>
            </tr>
        </thead>`;
    let tableRows: string = "";
    let tableBody: string = "";
    const value = data.map((item) => {
      return (tableRows += `
      <tr>
                <td>${item.id}</td>
                <td><img src=${item.imageUrl}/></td>
                <td>${item.salary}</td>
                <td>${item.firstName}</td>
                <td>${item.lastName}</td>
                <td>${item.email}</td>
                <td>${item.contactNumber}</td>
                <td>${item.dob}</td>
                <td>${item.age}</td>
                <td>${item.address}</td>
                </tr>
                `);
    });
    tableBody = `<tbody>
              ${value[value.length - 1]}
              </tbody>`;
    const table = document.createElement("table");
    table.innerHTML = `${tableHead} ${tableBody}`;
    document.body.appendChild(table);
    console.log(table);
  });
