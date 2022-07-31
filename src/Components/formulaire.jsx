import './formulaire.css';



const Formulaire = () => {
  return(
  <div className = "form">
    <form method="post" action="traitement.php">

    <fieldset>

            <legend>Affectation des Sujets</legend>
            
              <label><input type="text" name="nom" placeholder='Nom de l"Etudiant en autosuggestion ' required /> <br /></label>

            <label><input type="number" name="numsujet" placeholder='Numero de Sujet ' required /> <br /></label>

            <label><input type="text" name="titre" placeholder='Titre de Sujet ' required/> <br /></label>

            <label> <input type="text" name="Organisme" placeholder='Organisme d accueil (l"Entreprise)     ' required/> <br /></label>
  
            <label >  <input type="submit" name="submit" id='submit' value='valider' class='button' /></label>  
  </fieldset>  
    </form>
    <form method="post" action="traitement.php">
  
          <fieldset>
              <legend>Affectation des Superviseurs</legend>
  
              <label><input type="text" name="nom" placeholder='Nom de l"étudiant en autosuggestion' required /> <br /></label>
  
              <label><input type="text" name="superviseur" placeholder='Nom du superviseur en autosuggestion' required /> <br /></label>
  
              <label >  <input type="submit" name="submit" id='submit' value='valider' class='button' /></label>  
          </fieldset>  
    </form>
    <form method="post" action="traitement.php">
  
      <fieldset>
          <legend>Affectation des Jury</legend>

          <label><input type="text" name="nom" placeholder='Nom de l"Etudiant en autosuggestion ' required /> <br /></label>

          <label><input type="text" name="president" placeholder='Nom du Président en autosuggestion ' required /> <br /><input type="text" name="Membre1" placeholder='Nom Membre 1 en autosuggestion ' required /></label>

          <label><input type="text" name="Membre2" placeholder='Nom Membre 2 en autosuggestion ' required/><br /><input type="date" name="calendrier" placeholder='Calendrier pour choisir date soutenance ' required/> </label>

          <label> <input type="text" name="heure" placeholder='Heure soutenance' required/> <br /></label>

          <label >  <input type="submit" name="submit" id='submit' value='valider' class='button' /></label>  
      </fieldset>  
    </form>
    </div>
    );
  }
  
export default Formulaire;

