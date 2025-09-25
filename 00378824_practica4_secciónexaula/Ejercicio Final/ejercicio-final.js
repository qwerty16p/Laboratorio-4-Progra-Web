document.getElementById('reminder-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const dayOfWeek = document.getElementById('dayOfWeek').value;
    const customMessage = document.getElementById('customMessage').value;
    const reminderDisplay = document.getElementById('reminder-display');

    function getReminder(day, message) {
        let activity = "";
        switch (day.toLowerCase()) {
            case 'lunes':
                activity = "atender un cliente específico.";
                break;
            case 'martes':
                activity = "visitar una agencia fuera de la ciudad.";
                break;
            case 'miercoles':
                activity = "llevar a mi hija al ballet.";
                break;
            case 'jueves':
                activity = "priorizar entregas de desarrollo.";
                break;
            case 'viernes':
                activity = "atender problemas de manera remota.";
                break;
            case 'sabado':
                activity = "hacer lo que mi esposa quiera.";
                break;
            default:
                activity = "descansar.";
                break;
        }

        let reminderMessage = `<h2>Recordatorio para el ${day}:</h2>`;
        if (message) {
            reminderMessage += `<p><strong>Mensaje:</strong> ${message}</p>`;
        }
        reminderMessage += `<p>Hoy tienes que ${activity}</p>`;
        return reminderMessage;
    }

    reminderDisplay.innerHTML = getReminder(dayOfWeek, customMessage);
});