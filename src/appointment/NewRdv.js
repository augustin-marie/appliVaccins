import React from 'react';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
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
    const formData = {
      page: page,
      dateRdv: dateRdv,
      employer: employer,
      patient: patient,
      numLot: numLot,
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
        return <NewRDVForm onPageChange={setPage} onDateChange={setDateRdv} formData={formData}/>
    }
  }