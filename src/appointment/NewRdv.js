import React from 'react';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import NewRDVForm from './forms/NewRDVForm';

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

    //Object with all the props and the setters
    const formData = {
      page: [page, setPage],
      dateRdv: [dateRdv, setDateRdv],
      employer: [employer, setEmployer],
      patient: [patient, setPatient],
      numLot: [numLot, setNumLot],
    }

    switch (page) {
      default:
      case 'main':
        return <NewRDVForm onPageChange={setPage} formData={formData}/>
    }
  }