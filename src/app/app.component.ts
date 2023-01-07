import { Component, OnInit } from '@angular/core';

interface TableData {
  name: string;
  gender: string;
  email: string;
  phone: string;
  location: string;
}

interface Header {
  value: string;
  sortedUp: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  headers: Header[] = [
    { value: 'name', sortedUp: true },
    { value: 'gender', sortedUp: true },
    { value: 'email', sortedUp: true },
    { value: 'phone', sortedUp: true },
    { value: 'location', sortedUp: true },
  ];
  tableData: TableData[] = [];

  ngOnInit() {
    this.getUserData().then(this.mapDataToTable);
  }

  async getUserData() {
    return await fetch('https://randomuser.me/api/?results=30')
      .then((response) => response.json())
      .then((data) => data.results)
      .catch((error) => console.log(error));
  }

  mapDataToTable = (data: any) => {
    this.tableData = data.map((entry: any) => ({
      name: `${entry.name.first} ${entry.name.last}`,
      gender: entry.gender,
      email: entry.email,
      phone: entry.phone,
      location: `${entry.location.city}, ${entry.location.country}`,
    }));
  };

  sortTableBy = (header: Header) => {
    const headerType = header.value as keyof TableData;
    this.tableData.sort((a, b) =>
      header.sortedUp
        ? b[headerType].localeCompare(a[headerType])
        : a[headerType].localeCompare(b[headerType])
    );
    this.headers = this.headers.map((element) =>
      element.value === header.value
        ? { ...element, sortedUp: !header.sortedUp }
        : { ...element, sortedUp: true }
    );
  };
}
