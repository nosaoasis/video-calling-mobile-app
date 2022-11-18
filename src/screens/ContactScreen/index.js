import React, {useState, useEffect} from "react";

import { StyleSheet, Text, View, FlatList, TextInput } from "react-native";

import dummyContacts from "../../../assets/data/contacts.json"

const ContactsScreen = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredContacts, setFilteredContacts] = useState(dummyContacts)

  useEffect(() => {
    const newContactList = dummyContacts.filter(contact => contact.user_display_name.toLowerCase().includes(searchTerm.toLowerCase()))
    setFilteredContacts(newContactList)
  }, [searchTerm])


  const handleChangeText = (value) => {
    setSearchTerm(value);
  };

  return (
    <>
      <View style={styles.container}>
      <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={searchTerm}
          onChangeText={(text) => handleChangeText(text)}
        />
        <FlatList
          data={filteredContacts}
          renderItem={({ item }) => (
            <Text style={styles.contactName}>{item.user_display_name}</Text>
          )}
          ItemSeparatorComponent={() => <View style={styles.seperator} />}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  contactName: {
    fontSize: 16,
    color: "blue",
    marginVertical: 5,
    marginHorizontal:10,
  },
  seperator: {
    width: "100%",
    height: 1,
    backgroundColor: "#f0f0f0"
  },
  searchInput: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 5,
    marginBottom: 10
  },
})

export default ContactsScreen;
