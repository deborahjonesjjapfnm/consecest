interface Company {
  name: string;
}

const company: Company = {
  name: "Romaguera-Crona",
};

// Function to display company name
function displayCompanyName(company: Company): void {
  console.log(`Company Name: ${company.name}`);
}

// Call the function to display the name
displayCompanyName(company);
