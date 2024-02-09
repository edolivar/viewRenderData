import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  connect() {}

  toggleForm(event) {
    event.preventDefault();
    event.stopPropagation();
    const formID = event.params["form"];
    const bodyID = event.params["body"];
    const elem = document.getElementById(formID);
    elem.classList.toggle("d-none");
    elem.classList.toggle("mt-5");
    const body = document.getElementById(bodyID);
    body.classList.toggle("d-none");
  }
}
