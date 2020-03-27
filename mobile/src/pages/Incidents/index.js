import React, { useEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";
import { View, FlatList, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import api from '../../services/api';

import styles from "./styles";

import logoImg from "../assets/logo.png";

function Incidents() {
    const [incidents, setIncidents] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [total, setTotal] = useState(0);
  const navigation = useNavigation();

  function navigateToDetail(incident) {
    navigation.navigate("Datils", { incident });
  }

  
    async function loadincidents(){
        

        if(loading){
            return;
        }

        if(total > 0 && incidents.length == total){
            return;
        }

        setLoading(true);

        const response = await api.get('/incidents', {
            params: {page}
        });

        setIncidents([...incidents, ...response.data]);
        setTotal(response.headers['x-total-count']);
        setPage(page + 1)
        setLoading(false)
    }

    useEffect(() => {
        loadincidents();
    }, [])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}> {total} casos</Text>.
        </Text>
      </View>

      <Text style={styles.title}>Seja bem vindo!</Text>
      <Text style={styles.descrition}>
        Escolha um dos casos abaixo e salve o dia.
      </Text>

      <FlatList
        data={incidents}
        style={styles.IncidentsList}
        keyExtractor={incident => String(incident.id)}
        showsVerticalScrollIndicator={false}
        onEndReached={loadincidents}
        onEndReachedThreshold={0.2}
        renderItem={({ item: incidents }) => (
          <View style={styles.incident}>
            <Text style={styles.incidentPropety}>ONG:</Text>
            <Text style={styles.incidentValue}>{incidents.name}</Text>

            <Text style={styles.incidentPropety}>CASO:</Text>
            <Text style={styles.incidentValue}>{incidents.title}</Text>

            <Text style={styles.incidentPropety}>VALOR:</Text>
            <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incidents.value)}</Text>

            <TouchableOpacity style={styles.detailsButton} onPress={() => navigateToDetail(incidents)}>
              <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
              <Feather name="arrow-right" size={16} color="#E02041" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
export default Incidents;
