const subjectSemesterElement = document.querySelector(
        'select[name="subject_semester"]'
    ),
    initialSemester = subjectSemesterElement.dataset.initialsemester;

for (let index = 1; index <= 8; index++) {
    const semesterOption = document.createElement("option");
    semesterOption.innerText = `Semester ${index}`;
    semesterOption.value = index;

    if (Number(initialSemester) === index) {
        semesterOption.selected = "selected";
    }

    subjectSemesterElement.appendChild(semesterOption);
}

(async () => {
    // fetching data
    const subjectsResponse = await fetch("/api/subjects/"),
        subjectsJson = await subjectsResponse.json();

    // gather elements
    const subjectNameElement = document.querySelector(
        'select[name="subject_name"]'
    );

    // setting function
    function refreshSubjectSelection(
        selectedSemester = null,
        selectedSubject = null
    ) {
        if (
            selectedSemester === null ||
            selectedSemester === "Pilih semester"
        ) {
            console.log(selectedSemester);
            subjectNameElement.innerHTML = `<option value="">Pilih semester terlebih dahulu</option>`;
            return;
        }

        const filteredSubjects = subjectsJson.filter(
            subject => subject.semester == Number(selectedSemester)
        );

        subjectNameElement.innerHTML = `<option value="">Pilih mata kuliah</option>`;

        filteredSubjects.forEach(subject => {
            const subjectOption = document.createElement("option");
            subjectOption.innerText = subject.name;
            subjectOption.value = subject.id;

            if (Number(selectedSubject) === subject.id) {
                subjectOption.selected = "selected";
            }

            subjectNameElement.appendChild(subjectOption);
        });
    }

    // setting listener
    subjectSemesterElement.addEventListener(
        "change",
        ({ target: { value: selectedSemester } }) => {
            refreshSubjectSelection(selectedSemester);
        }
    );

    // subject_name options init
    const initialSubject = subjectNameElement.dataset.initialsubject;
    refreshSubjectSelection(initialSemester, initialSubject);
})();
