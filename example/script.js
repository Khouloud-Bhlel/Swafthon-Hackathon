function selectUserType(userType) {
    const formContainer = document.getElementById('form-container');
    const userTypeText = document.getElementById('user-type-text');
    
    if (userType === 'individu') {
      userTypeText.textContent = "Inscription pour Individu";
    } else if (userType === 'club') {
      userTypeText.textContent = "Inscription pour Club/Association";
    }
    
    // Affiche le formulaire avec l'effet de slide
    formContainer.classList.add('show');
  }
  
  function closeForm() {
    const formContainer = document.getElementById('form-container');
    // Masque le formulaire
    formContainer.classList.remove('show');
  }
  