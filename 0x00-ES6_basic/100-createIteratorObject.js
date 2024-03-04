export default function createIteratorObject(report) {
  const employees = report.allEmployees;
  const agents = [];
  for (const agent of Object.values(employees)) {
    agents.push(...agent);
  };
  return agents;
}
