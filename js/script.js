document.addEventListener('DOMContentLoaded', () => {
  const colorForm = document.getElementById('colorForm');

  const saveColorScheme = (colorScheme) => {
    localStorage.setItem('colorScheme', colorScheme);
  };

  const applyColorScheme = (colorScheme) => {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(colorScheme);
  };

  const formHandler = (e) => {
    const selectedColorScheme = colorForm.querySelector('input[name="colorScheme"]:checked').value;
    saveColorScheme(selectedColorScheme);
    applyColorScheme(selectedColorScheme);
  };

  colorForm.addEventListener('change', formHandler);

  const savedColorScheme = localStorage.getItem('colorScheme');
  if (savedColorScheme) {
    applyColorScheme(savedColorScheme);

    colorForm.querySelector(`input[value="${savedColorScheme}"]`).checked = true;
  }
});
