function toggleSubmit(toggle = false) {
    const submitButton = document.querySelector('button[type="submit"]');
    if (toggle) {
        submitButton.removeAttribute("disabled");
    } else {
        submitButton.setAttribute("disabled", "");
    }
}

class CheckEdit {
    constructor(inputs = []) {
        this.inputValues = {};
        this.inputs = inputs;

        // init
        this.getInputValues();
        this.listenInputs();
    }

    getInputValues() {
        this.inputs.forEach(element => {
            console.log(element);
            const inputName = element.name;
            this.inputValues[inputName] = element.value;
        });
    }

    listenInputs() {
        this.inputs.forEach(element => {
            const firstValue = element.value;

            function compareValues() {
                const currentvalue = element.value,
                    isDataChanged =
                        firstValue !== currentvalue && currentvalue !== "";

                toggleSubmit(isDataChanged);
            }

            const inputType = element.type;

            if (inputType === "file") {
                element.addEventListener("change", compareValues);
            } else {
                element.addEventListener("input", compareValues);
            }
        });
    }
}
