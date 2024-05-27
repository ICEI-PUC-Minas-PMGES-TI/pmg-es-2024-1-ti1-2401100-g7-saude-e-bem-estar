document.addEventListener('DOMContentLoaded', function() {
  const recordForm = document.getElementById('recordForm');
  const recordsList = document.getElementById('recordsList');

  recordForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const date = recordForm.date.value;
    const time = recordForm.time.value;
    const bloodPressure = recordForm.bloodPressure.value;
    const glucose = recordForm.glucose.value;
    const weight = recordForm.weight.value;

    addRecordToList(date, time, bloodPressure, glucose, weight);

    recordForm.reset();
  });

  function addRecordToList(date, time, bloodPressure, glucose, weight) {
    const li = document.createElement('li');
    li.innerHTML = `<strong>Data:</strong> ${date}, <strong>Hora:</strong> ${time}, <strong>Pressão Arterial:</strong> ${bloodPressure}, <strong>Glicose:</strong> ${glucose} mg/dL, <strong>Peso:</strong> ${weight} kg`;
    recordsList.appendChild(li);
  }
});
