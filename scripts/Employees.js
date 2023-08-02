import { getEmployees, getOrders } from "./database.js"

const employees = getEmployees()

export const Employees = () => {
    let html = `<ul>`

    for (const employee of employees) {
        html += `<li data-type="number" data-name="${employee.name}" data-id="${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target;
  
    if (itemClicked.dataset.type === "number") {
      const employeeId = itemClicked.dataset.id;
      let orderCounter = 0;
      const orderId = getOrders()
      
      for (const order of orderId) {
        if (parseInt(employeeId) === order.employeeId) {
          orderCounter++;
        }
      }
      // input string into window alert. program already runs
      window.alert(`${itemClicked.dataset.name} has completed ${orderCounter} order(s)`);
  
    }
  });