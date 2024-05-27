document.addEventListener('DOMContentLoaded', function() {
  const activityForm = document.getElementById('reminderForm');
  const activityList = document.getElementById('activityReminders');
  const medicineForm = document.getElementById('medicineForm');
  const medicineList = document.getElementById('medicineReminders');
  const addMedicineButton = document.getElementById('addMedicine');

  activityForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const activity = activityForm.activity.value;
    const time = activityForm.time.value; // Substituído 'date' por 'time'

    const li = document.createElement('li');
    li.textContent = `${activity} - ${time}`; // Substituído 'date' por 'time'

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Deletar';
    deleteButton.addEventListener('click', function() {
      li.remove();
    });

    li.appendChild(deleteButton);
    activityList.appendChild(li);

    activityForm.reset();
  });

  addMedicineButton.addEventListener('click', function() {
    const medicine = medicineForm.medicine.value;
    const time = medicineForm.time.value;
    const date = medicineForm.date.value;

    const li = document.createElement('li');
    li.textContent = `${medicine} - ${time} - ${date}`;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Deletar';
    deleteButton.addEventListener('click', function() {
      li.remove();
    });

    li.appendChild(deleteButton);
    medicineList.appendChild(li);

    medicineForm.reset();
  });
});
