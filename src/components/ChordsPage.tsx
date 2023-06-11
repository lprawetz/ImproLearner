import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import PianoKeyboard from './PianoKeyboard';
import { useNavigation } from '@react-navigation/native';
import chordsData from '../data/chordsData';

const rootNotes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

const cChords = [
  { symbol: 'C', keys: [0, 4, 7] },
  { symbol: 'Cm', keys: [0, 3, 7] },
  // ... add the rest of the C chords here with their keys (indices)...
  // Replace this comment with the rest of the chords from the list I provided earlier
];

const ChordsPage = () => {
  const [selectedRootNote, setSelectedRootNote] = useState('C');
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chords</Text>
      
      <View style={styles.goBackButton}>
        <Button title="Go Back" onPress={() => navigation.goBack()} />
      </View>

      <Picker
        selectedValue={selectedRootNote}
        style={styles.picker}
        onValueChange={(itemValue) => setSelectedRootNote(itemValue)}
      >
        {rootNotes.map((note, index) => (
          <Picker.Item key={index} label={note} value={note} />
        ))}
      </Picker>

      {selectedRootNote === 'C' && (
        <View style={styles.chordsList}>
          {cChords.map((chord, index) => (
            <View key={index} style={styles.chordItem}>
              <Text style={styles.chordSymbol}>{chord.symbol}</Text>
              <PianoKeyboard markedKeys={chord.keys} />
            </View>
          ))}
        </View>
      )}

      /* Add more conditions for other root notes when needed */

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
  },
  picker: {
    width: '50%',
  },
  chordsList: {
    marginTop: 20,
  },
  chordItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  chordSymbol: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
  goBackButton: {
    marginTop: 20,
  },
});

export default ChordsPage;