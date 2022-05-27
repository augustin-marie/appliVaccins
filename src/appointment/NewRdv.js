import React from 'react';
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import NewRDVForm from './forms/NewRDVForm';
import SelectPatient from './forms/selectPatient';
import SelectEmployer from './forms/selectEmployer';
import SelectLot from './forms/selectLot';

/* Logical component
 * Store the diffrents variables and handle the navigation in the sub-forms
*/
export default function App(props) {
    //Handle API call
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    //handle sub-forms navigation
    const [page, setPage] = useState('main')

    //appointment form
    const [dateRdv, setDateRdv] = useState(null);
    const [employer, setEmployer] = useState(null);
    const [patient, setPatient] = useState(null);
    const [numLot, setNumLot] = useState(null);
    //annule = false

    //Object with all the currently selected values
    //Hour selection is missing !
    const formData = {
      page: page,
      dateRdv: dateRdv,
      employer: employer,
      patient: patient,
      numLot: numLot,
    }


    function formHandler() {
      if (formData.employer==null){
        return alertForm('L\'employer doit être renseigné !');
      }
      if (formData.patient==null){
        return alertForm('Le patient doit être renseigné !');
      }
      if (formData.dateRdv==null){
        return alertForm('La date du rendez vous est manquante !');
      }
      if (numLot==null){
        return alertForm('Le lot a administrer doit être renseigné !');
      }
  
      /*API request*/
      //Transform a DD-MM-YYYY date into a AAAA-MM-DD
      
      let dateFragment = formData.dateRdv.split('-')
      let dateFormat = dateFragment[2] + '-' + dateFragment[1] + '-' + dateFragment[0];

      let bodyRequest = {
        "dateRdv": dateFormat,
        "Annule": false,
        "idEmployer": formData.employer["@id"],
        "idPatient": formData.patient["@id"],
        "numLot": formData.numLot["@id"]
      }

      sendRequest(bodyRequest);
    }
  
    
    function alertForm(text, title='Erreur') {
      return (
        Alert.alert(
          title,
          text,
          [
            { text: "OK" }
          ]
        )
      )
    }
  
  
    const sendRequest = async (data) => {
      try {
       const response = await fetch('http://'+props.api_url+'/api/rendez_vouses', {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify(data),
       });
       const json = await response.json();
       setData("La requête est un succès");
       alertForm("Le vaccin a été ajouté, vous pouvez le voir des maintenant dans l'onglet \"rendez-vous\".", "info");
      } catch (error) {
        setData("Il semble y avoir une erreur...");
        alertForm("Une erreur s'est produite lors de l'envoi du rendez vous :\n" + error);
      } finally {
       setLoading(false);
      }
    }

    switch (page) {
      case 'patient':
        return <SelectPatient api_url={props.api_url} onPageChange={setPage} onPatientChange={setPatient} patientName={patient}/>

      case 'employer':
        return <SelectEmployer api_url={props.api_url} onPageChange={setPage} onEmployerChange={setEmployer} employerName={employer}/>
      
      case 'lot':
        return <SelectLot api_url={props.api_url} onPageChange={setPage} onLotChange={setNumLot} numLot={numLot}/>

      default:
      case 'main':
        return <NewRDVForm onPageChange={setPage} onDateChange={setDateRdv} formData={formData} onSend={formHandler}/>
    }
  }