// CustomCalendar.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, getDay, isSameMonth } from 'date-fns';

const CustomCalendar = ({ onDateSelected }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const handlePrevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const daysInMonth = eachDayOfInterval({
    start: startOfMonth(currentMonth),
    end: endOfMonth(currentMonth),
  });

  const renderDays = () => {
    const startDay = getDay(startOfMonth(currentMonth));
    const emptyDays = Array.from({ length: startDay }, (_, i) => i);

    return (
      <View style={styles.daysContainer}>
        {emptyDays.map((_, index) => (
          <View key={index} style={styles.dayCell} />
        ))}
        {daysInMonth.map((day, index) => (
          <TouchableOpacity
            key={index}
            style={styles.dayCell}
            onPress={() => onDateSelected(day)}
          >
            <Text style={isSameMonth(day, currentMonth) ? styles.dayText : styles.dayTextDisabled}>
              {format(day, 'd')}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handlePrevMonth}>
          <Text style={styles.navButton}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.monthText}>{format(currentMonth, 'MMMM yyyy')}</Text>
        <TouchableOpacity onPress={handleNextMonth}>
          <Text style={styles.navButton}>›</Text>
        </TouchableOpacity>
      </View>
      {renderDays()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navButton: {
    fontSize: 24,
  },
  monthText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  daysContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  dayCell: {
    width: '14.28%',
    alignItems: 'center',
    padding: 8,
  },
  dayText: {
    fontSize: 16,
  },
  dayTextDisabled: {
    fontSize: 16,
    color: '#ccc',
  },
});

export default CustomCalendar;
