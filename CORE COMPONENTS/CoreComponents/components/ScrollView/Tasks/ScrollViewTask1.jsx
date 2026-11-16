
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';

export default function ScrollViewTask1() {
  const courses = [
    { id: 1, name: 'React Native', duration: '3 Months' },
    { id: 2, name: 'React JS', duration: '2 Months' },
    { id: 3, name: 'Node JS', duration: '2 Months' },
    { id: 4, name: 'MongoDB', duration: '1 Month' },
    { id: 5, name: 'Express JS', duration: '1 Month' },
    { id: 6, name: 'JavaScript', duration: '2 Months' },
    { id: 7, name: 'TypeScript', duration: '1 Month' },
  ];

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.heading}>My Learning App</Text>
        <Text style={styles.subtitle}>
          Explore programming courses
        </Text>
      </View>

      {/* Horizontal ScrollView */}
      <Text style={styles.sectionTitle}>Popular Categories</Text>

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.horizontalScroll}
      >
        <View style={styles.category}>
          <Text style={styles.categoryText}>Frontend</Text>
        </View>

        <View style={styles.category}>
          <Text style={styles.categoryText}>Backend</Text>
        </View>

        <View style={styles.category}>
          <Text style={styles.categoryText}>Database</Text>
        </View>

        <View style={styles.category}>
          <Text style={styles.categoryText}>Mobile App</Text>
        </View>

        <View style={styles.category}>
          <Text style={styles.categoryText}>Full Stack</Text>
        </View>
      </ScrollView>

      {/* Vertical Course List */}
      <Text style={styles.sectionTitle}>Available Courses</Text>

      {courses.map((course) => (
        <View key={course.id} style={styles.courseCard}>
          <View>
            <Text style={styles.courseName}>
              {course.name}
            </Text>

            <Text style={styles.duration}>
              Duration: {course.duration}
            </Text>
          </View>

          <Text style={styles.courseNumber}>
            #{course.id}
          </Text>
        </View>
      ))}

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Happy Learning!
        </Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F5F9',
  },

  content: {
    padding: 20,
    paddingBottom: 40,
  },

  header: {
    backgroundColor: '#2563EB',
    padding: 25,
    borderRadius: 15,
    marginBottom: 25,
  },

  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  subtitle: {
    fontSize: 14,
    color: '#DBEAFE',
    marginTop: 8,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 15,
    marginTop: 10,
  },

  horizontalScroll: {
    marginBottom: 25,
  },

  category: {
    backgroundColor: '#DBEAFE',
    paddingVertical: 15,
    paddingHorizontal: 22,
    borderRadius: 10,
    marginRight: 12,
  },

  categoryText: {
    color: '#1D4ED8',
    fontSize: 15,
    fontWeight: '600',
  },

  courseCard: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 12,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 3,
  },

  courseName: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#0F172A',
  },

  duration: {
    fontSize: 13,
    color: '#64748B',
    marginTop: 6,
  },

  courseNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2563EB',
  },

  footer: {
    padding: 20,
    alignItems: 'center',
  },

  footerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2563EB',
  },
});
